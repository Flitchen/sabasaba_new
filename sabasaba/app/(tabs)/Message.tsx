import { StyleSheet, View } from 'react-native';

import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View>
      <Link href={"/(modals)/booking"}>booking</Link>
      <Link href={"/(modals)/login"}>login</Link>
      <Link href={"/(modals)/SignUpScreen"}>SignUpScreen</Link>
      <Link href={"/(modals)/Profile"}>Profile</Link>
      <Link href={"/Product/123"}>Product</Link>
    </View>
  );
}