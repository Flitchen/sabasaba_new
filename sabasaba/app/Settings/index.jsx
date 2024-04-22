import { createStackNavigator } from "@react-navigation/stack";
import { useProduct } from "@/contexto/ProductProvider";
import Settings from "../(modals)/settings";
import Help from "../(modals)/Help";
import Privacy from "../(modals)/Privacy";
import Terms from "../(modals)/Terms";
import Report from "../(modals)/Report";
import Earnings from "../(modals)/Earnings";
import MyProfile from "../(modals)/Profile";
// import Earnings from "../../(modals)/Earnings";
// 




const Stack = createStackNavigator();

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
        component={MyProfile}
      />
      <Stack.Screen name="Profile" component={MyProfile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        options={({ navigation }) => ({
          headerShown: true,
          tabBarItemStyle: {
            margin: 0,
            backgroundColor: 'red',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => set_show_more(!show_more)} style={{ marginRight: 10 }}>
              <Text
              style={{margin: 10, fontWeight:"800", fontSize:29}}>⋮</Text>
            </TouchableOpacity>
          ),
        })}
        name="ProductPage"
        component={MyProfile}
      />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="Earnings" component={Earnings} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
