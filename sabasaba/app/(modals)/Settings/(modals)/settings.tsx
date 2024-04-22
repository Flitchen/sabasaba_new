
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const App = () => {
  const [seen,set_seen]= useState(false)
  function clearCache(){
    set_seen(true)
    setTimeout(() => {
    alert("Cache Cleared")
    set_seen(false)
      
    }, 500);
  }
  return (
    <View>
      <TouchableOpacity href={"/(modals)/Language"} style={{backgroundColor:"white"}}>
      <View style={styles.flex}>
        <Text style={{ margin: 1, marginHorizontal: 12 }}>🌐 Language</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity href={"/(modals)/Theme"} style={{backgroundColor:"white"}}>
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

    {seen?
      <Text style={{ margin: 1, marginHorizontal: 12 }}>Loading ..</Text>:""
    }

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
// export default withExpoSnack(App);
export default App;
