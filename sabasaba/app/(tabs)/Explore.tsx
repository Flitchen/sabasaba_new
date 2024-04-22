import React, { useEffect, useMemo, useRef, useState } from "react";
import { SafeAreaView,ScrollView,StatusBar,useColorScheme,View,FlatList,StyleSheet,TouchableOpacity,BackHandler,ListRenderItem,Image,} from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { Linking } from "react-native";
import WebView from "react-native-webview";
// import {atom, useAtom} from 'jotai';
// const counter = atom(0);
import * as Notifications from "expo-notifications";
import { create } from "zustand";
import Header from "../../components/Header";
import Categories from "../../components/Categories";

const SERVER_URL: String = "http://192.168.1.2:8000/";
let is_selectedId =""
// const useStore = create((set) => ({
  // is_selectedId: null,
  // set_is_selectedId: () => set((state) => ({ is_selectedId: state, })),
  // set_is_selectedId: (state) => set({ is_selectedId: state }),
// }));

const numColumns = 3;

function is_odd(x) {
  return x % 2 == 0;
}
function App({ navigation, list_of_products }) {
  // const { is_selectedId, set_is_selectedId } = useStore();
  return (
    <View style={styles.app}>
      <FlatList
        data={list_of_products}
        numColumns={numColumns}
        renderItem={({ item }) => {
          return (
            <>
              {item.images[0] ? (
                <Item
                  onPress={() => {
                    console.log(item.uid, "was pressed");
                  }}
                  title={item.product_name}
                  images={
                    item.images[0]
                      ? item.images[0]["fields"].file
                      : item.images[0]["fields"].file
                  }
                  price={item.price}
                  uid={item.uid}
                  key={item.uid}
                />
              ) : (
                ""
              )}
            </>
          );
        }}
      />
    </View>
  );
}
function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function OldHomeScreen({ navigation,list_of_products,setIliyochaguliwa }) {

  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const list_ref = useRef<FlatList>(null);
  const RenderItem: ListRenderItem<any> = ({ item }) => (
    <Link href={`/Product/${item.uid}`} asChild>
    <TouchableOpacity style = {{margin:"auto"}} 
    onPress={() => {
      console.log(item.uid)
    }}>
      <Animated.View entering={FadeInRight} exiting={FadeOutLeft}>
      {item.images[0] ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 15,
            paddingHorizontal: 1,
            backgroundColor:"white",
            borderRadius:8,
            overflow: "hidden",
            margin:"5px"
          }}
        >
          <View style={{ width: 190,  }}>
            <Image
              source={{ uri: SERVER_URL + item.images[0]["fields"].file }}
              style={{ resizeMode: "cover", width: "100%", height: 100,borderRadius:10}}
            />
            <View style={{padding:"0px 10px"}}>
              <Text style={{fontWeight: 700,marginBottom: "0.2rem",color: "#344767",marginTop: "0.1rem",fontSize: 16,lineHeight: 19}}>{item.product_name ? item.product_name : ""}</Text>
              <Text>{item.description ? item.description.substring(0, 17) : ""}</Text>
              <View style={{flexDirection: "row"}}>
              <Text style={{fontWeight: 600,fontSize: 12,lineHeight: 16}}>Bei </Text>
              <Text style={{color: "red",fontWeight: 600,fontSize: 12,lineHeight: 16}}>{item.price ? numberWithCommas(item.price) : ""}</Text>
              <Text style={{fontWeight: 600,fontSize: 12,lineHeight: 16}}> /=</Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        ""
      )}
    </Animated.View>
    </TouchableOpacity>
    </Link>
  );

  return (
    // <SafeAreaView style={{ margin: "auto", marginTop: "0" }} >
    <ScrollView>
      {/* <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      /> */}

      <FlatList
        data={list_of_products}
        ref={list_ref}
        numColumns={numColumns}
        renderItem={RenderItem}
      />
      {/* <View>{items}</View> */}
    </ScrollView>
    // </SafeAreaView>
  );
}

function Product_page() {
  // const { is_selectedId } = useStore();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        cacheEnabled={true}
        source={{ uri: `https://7saba.com/Product/${is_selectedId}` }}
      />
      {/* <OldHomeScreen /> */}
    </SafeAreaView>
  );
}

import { NativeBaseProvider } from "native-base";
import { Link, Stack } from "expo-router";
import Listings from "@/components/Listings";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
export default function HomeScreen({ navigation }) {
  // const { is_selectedId, set_is_selectedId } = useStore();
  useEffect(() => {
    console.log(is_selectedId);
  }, [is_selectedId]);
  const [isLoadong, setLoading] = useState(false);

  const webViewRef = useRef();
  const handleBackButtonPress = () => {
    set_is_selectedId("");
    try {
      console.log("trying Back Button");
      return true;
    } catch (err) {
      console.log("[handleBackButtonPress] Error : ", err.message);
    }
  };

  const [is_loading, set_is_loading] = useState(false);
  const [list_of_products, set_list_of_products] = useState([]);

  async function get_products() {
    // var response = await fetch(`https://server.7saba.com/products`, {
    var response = await fetch("http://192.168.1.2:8000/api/products", {
      method: "GET",
    });
    let data = await response.json();
    set_list_of_products(data);

    // requestAnimationFrame(() =>
    //     .then(response => response.json()).then(responseJson => {
    //       this.setState({data: responseJson.data}):console.warn(responseJson);//     })
    //     .catch(error => {{alert(error)}}),
    // );
  }
  const [Iliyochaguliwa, setIliyochaguliwa] = useState("");
  useEffect(() => {
    // console.log(selectedId);
    set_is_loading(true);
    get_products();
    set_is_loading(false);
    console.log("state changed to ", Iliyochaguliwa);
  }, [Iliyochaguliwa]);

  const items = useMemo(() => list_of_products as any, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonPress
      );
    };
  });
  return (
      <>{!is_selectedId ? <OldHomeScreen list_of_products ={list_of_products} setIliyochaguliwa={setIliyochaguliwa} /> : <Product_page />}</>
  );
}

const styles = {
  image:{},
  item: {
    backgroundColor: "#A1A1A1",
    alignItems: "center",
    justifyContent: "center",
    margin: 1,
    height: 120,
    width: "50%",
  },
  itemText: {
    color: "#fff",
  },
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
    // backgroundColor: "red"
  },
  row: {
    flexDirection: "row",
  },
  "1col": {
    backgroundColor: "lightblue",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 1,
  },
  "2col": {
    backgroundColor: "#fff",
    borderColor: "#efefef",
    borderWidth: 1,
    flex: 2,
  },
  "3col": {
    backgroundColor: "orange",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 3,
  },
  "4col": {
    flex: 4,
  },
};
