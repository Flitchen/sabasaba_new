import { Center } from "native-base";
import { View } from "react-native";

export default function LoadingSpinner() {
    return (<>
    <Center style={{"padding-top": "50%"}}>
    <View
    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] m-auto"
    role="status">
    <Text
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</Text>
  </View>
    
    </Center>
    </>)
  }
  