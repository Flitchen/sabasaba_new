import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SecureStorage from "expo-secure-store"
import LanguageProvider from "@/contexto/LanguageProvider";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";


const CLERK_PUBLISHABLE_KEY=process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;


const token_cache = {
  async getToken(key: String){
    try {
    return SecureStorage.getItemAsync(key)
    } catch (error) {
      console.log(error)
      return null
      
    }
  },
  async saveToken(key: String,value: String){
    try {
    return SecureStorage.setItemAsync(key,value)
      
    } catch (error) {
      return null
      
    }
  }
}






export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LanguageProvider>
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={token_cache}><RootLayoutNav /></ClerkProvider>
      </LanguageProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  // const colorScheme = useColorScheme();
  let router = useRouter();
  const {isLoaded,isSignedIn} =useAuth();


  useEffect(()=>{
    if (isLoaded && !isSignedIn){router.push("/(modals)/login")}
  },[isLoaded])
  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/login"
        options={{
          presentation: "modal",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons size={26} name="close-outline" />
            </TouchableOpacity>
          ),
          // headerRight: () => (<TouchableOpacity onPress={()=>{router.back()}}><Ionicons size ={26} name='close-outline'/></TouchableOpacity>),
        }}
      />

      <Stack.Screen
        name="(modals)/booking"
        options={{
          presentation: "card",
          animation: "fade",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons size={26} name="close-outline" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Product/[id]"
        options={{
          // presentation: 'transparentModal'
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons size={26} name="close-outline" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
    // </ThemeProvider>
  );
}
