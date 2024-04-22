import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  ListRenderItem,
  Image,
} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {Linking} from 'react-native';
import WebView from 'react-native-webview';
// import {atom, useAtom} from 'jotai';
// const counter = atom(0);
// import * as Notifications from "expo-notifications";
import {create} from 'zustand';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import RewardsProgram from '../(modals)/RewardsProgram';
import SearchPage from '../(modals)/SearchPage';

const SERVER_URL = 'http://api.7saba.com/';
let is_selectedId = '';

const Col = ({numRows, children}) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const numColumns = 2;

function is_odd(x) {
  return x % 2 == 0;
}
function App({navigation, list_of_products}) {
  // const { is_selectedId, set_is_selectedId } = useStore();
  return (
    <View style={styles.app}>
      <FlatList
        data={list_of_products}
        numColumns={numColumns}
        renderItem={({item}) => {
          return (
            <>
              {item.images[0]
                ? {
                    /* <Item
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
                /> */
                  }
                : ''}
            </>
          );
        }}
      />
    </View>
  );
}
function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function OldHomeScreen({navigation, list_of_products}) {
  var {Iliyochaguliwa, setIliyochaguliwa} = useApp()
  const switch_screen = id => {
    navigation.navigate('ProductPage', {id});
  };
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
  const list_ref = useRef < FlatList > null;
  const RenderItem: ListRenderItem<any> = ({item}) => (
    <TouchableOpacity
      style={{margin: 2, width: '50%'}}
      onPress={() => {
        switch_screen(item.uid);
      }}>
      <Animated.View entering={FadeInRight} exiting={FadeOutLeft}>
        {item.images[0] ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: 10,
              paddingHorizontal: 1,
              backgroundColor: 'white',
              borderRadius: 8,
              overflow: 'hidden',
              margin: 'auto',
            }}>
            <View style={{width: '100%'}}>
              <Image
                source={{uri: SERVER_URL + item.images[0]['fields'].file}}
                style={{
                  resizeMode: 'cover',
                  width: '100%',
                  height: 100,
                  borderRadius: 10,
                }}
              />
              <View style={{padding: '0px 10px'}}>
                <Text
                  style={{
                    fontWeight: 700,
                    marginBottom: '0.2rem',
                    color: '#344767',
                    marginTop: '0.1rem',
                    fontSize: 16,
                    lineHeight: 19,
                  }}>
                  {item.product_name ? item.product_name : ''}
                </Text>
                <Text>
                  {item.description ? item.description.substring(0, 27)+" ...." : ''}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 600, fontSize: 12, lineHeight: 16}}>
                    Bei{' '}
                  </Text>
                  <Text
                    style={{
                      color: 'red',
                      fontWeight: 600,
                      fontSize: 12,
                      lineHeight: 16,
                    }}>
                    {item.price ? numberWithCommas(item.price) : ''}
                  </Text>
                  <Text style={{fontWeight: 600, fontSize: 12, lineHeight: 16}}>
                    {' '}
                    /=
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          ''
        )}
      </Animated.View>
    </TouchableOpacity>
    // </Link>
  );
  const H3 = ({children, style}) => {
    return <Text style={[styles.text, style]}>{children}</Text>;
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10, // Adjust as needed
    },
  });

  return (
    <ScrollView
    style={{
      backgroundColor: '#c1c1c1c1',
    }}>
    <Header navigation={navigation} />
    <Categories navigation={navigation} />
    <View>
      <H3> Trending</H3>
    </View>
    <FlatList
      data={list_of_products}
      numColumns={numColumns}
      renderItem={RenderItem}
    />
  </ScrollView>
  );
}

function Product_page() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        cacheEnabled={true}
        source={{uri: `https://7saba.com/Product/${is_selectedId}`}}
      />
    </SafeAreaView>
  );
}
// import VideoCall from '../Chat/VideoCall';
import {NativeBaseProvider} from 'native-base';
import {Link} from 'expo-router';
import Animated, {FadeInRight, FadeOutLeft} from 'react-native-reanimated';
import {useApp} from '@/contexto/AppProvider';
import {useProduct} from '@/contexto/ProductProvider';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './Account';
import ProductPage from './Explore';
import Explore from './Explore';
import Sell from './Sell';

function HomeScreen({navigation}) {
  const handleBackButtonPress = () => {
    set_is_selectedId('');
    try {
      console.log('trying Back Button');
      return true;
    } catch (err) {
      console.log('[handleBackButtonPress] Error : ', err.message);
    }
  };

  const [is_loading, set_is_loading] = useState(false);
  const [list_of_products, set_list_of_products] = useState([]);
  var {Iliyochaguliwa, setIliyochaguliwa} = useApp()
  async function get_products() {
    var response = await fetch(`http://api.7saba.com/api/products`, {
      // var response = await fetch("http://api.7saba.com/api/products", {
      method: 'GET',
    });
    let data = await response.json();
    set_list_of_products(data);
  }
  // console.log(list_of_products);
  useEffect(() => {
    set_is_loading(true);
    get_products();
    set_is_loading(false);
    // console.log("state changed to ", Iliyochaguliwa);
  }, []);

  const items = useMemo(() => list_of_products, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonPress,
      );
    };
  });
  return (
    <>
      {!is_selectedId ? (
        <OldHomeScreen
          list_of_products={list_of_products}
          setIliyochaguliwa={setIliyochaguliwa}
          navigation={navigation}
        />
      ) : (
        <Product_page />
      )}
    </>
  );
}

const styles = {
  image: {},
  item: {
    backgroundColor: '#A1A1A1',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    height: 120,
    width: '50%',
  },
  itemText: {
    color: '#fff',
  },
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: 400,
    // backgroundColor: "red"
  },
  row: {
    flexDirection: 'row',
  },
  '1col': {
    backgroundColor: 'lightblue',
    borderColor: '#fff',
    borderWidth: 1,
    flex: 1,
  },
  '2col': {
    backgroundColor: '#fff',
    borderColor: '#efefef',
    borderWidth: 1,
    flex: 2,
  },
  '3col': {
    backgroundColor: 'orange',
    borderColor: '#fff',
    borderWidth: 1,
    flex: 3,
  },
  '4col': {
    flex: 4,
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  const {show_more, set_show_more} = useProduct();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          tabBarItemStyle: {
            margin: 0,
            backgroundColor: 'red',
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: true,
          tabBarItemStyle: {
            margin: 0,
            backgroundColor: 'red',
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => set_show_more(!show_more)}
              style={{marginRight: 10}}>
              <Text style={{margin: 10, fontWeight: '800', fontSize: 29}}>
                ⋮
              </Text>
            </TouchableOpacity>
          ),
        })}
        name="ProductPage"
        component={ProductPage}
      />
      <Stack.Screen name="RewardsProgram" component={RewardsProgram} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="PublishAProduct" component={Sell} />
      <Stack.Screen name="Explore" component={Explore} />
      {/* <Stack.Screen name="VideoCall" component={VideoCall} /> */}
    </Stack.Navigator>
  );
};
export default HomeStack;
