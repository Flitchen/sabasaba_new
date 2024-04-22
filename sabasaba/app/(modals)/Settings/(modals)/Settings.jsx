import { createStackNavigator } from "@react-navigation/stack";
import MyProfile from "./Profile";
// import Settings from "./Settings";
import Help from "./Help";
import { useProduct } from "@/contexto/ProductProvider";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Language from "./Language";
import Theme from "./Theme";



const Stack = createStackNavigator();
const Settings = ({navigation}) => {
  const [seen,set_seen]= useState(false)
  const [lang,set_lang]= useState(false)
  function clearCache(){
    set_seen(true)
    setTimeout(() => {
    alert("Cache Cleared")
    set_seen(false)
      
    }, 500);
  }
  return (
    <View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Language')}} style={{backgroundColor:"white"}}>
      <View style={styles.flex}>
        <Text style={{ margin: 1, marginHorizontal: 12 }}>🌐 Language</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Theme')}} style={{backgroundColor:"white"}}>
      <View style={styles.flex}>
        <Text style={{ margin: 1, marginHorizontal: 12 }}>🌗 Theme</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity href={"/(modals)/Notifications"} style={{backgroundColor:"white"}}>
      <View style={styles.flex}>
        <Text style={{ margin: 1, marginHorizontal: 12 }}>🔔 Notifications</Text>
        
      </View>
</TouchableOpacity>
      <TouchableOpacity style={styles.flex} onPress={clearCache}>
        <Text style={{ margin: 1, marginHorizontal: 12 }}>🗑️ Clear Cache</Text>
      </TouchableOpacity>

    {seen && <Text style={{ margin: 1, marginHorizontal: 12 }}>Loading ..</Text>}

    </View>
  );
};

var styles = StyleSheet.create({
  flex: {
    backgroundColor: "white",
    height: 52,
    paddingVertical: 15,
    paddingHorizontal: 18,
    width: "auto",
    flexDirection: "row",
    padding: 4,
    font: 12,
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
  },
});
const ProfileStack = () => {
  const {show_more, set_show_more} = useProduct()
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
        name="Home"
        component={Settings}
      />
      <Stack.Screen
        name="Language"
        options={{
          headerShown: false,
          cardStyle:{ backgroundColor: 'transparent' },

          tabBarItemStyle: {
            margin: 0,
            backgroundColor: 'red',
          },
        }}
        component={Language}
      />
      <Stack.Screen name="Theme" component={Theme}
      options={{
          headerShown: false,
          tabBarItemStyle: {
            margin: 0,
            backgroundColor: 'red',
          },
        }} />

    </Stack.Navigator>
  );
};

export default ProfileStack;
