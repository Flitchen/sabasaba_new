import React from "react";
import { withExpoSnack } from "nativewind";

import { Image, StyleSheet, Text, View } from "react-native";
import { styled } from "nativewind";
import { AntDesign, Entypo, Feather, FontAwesome, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const App = () => {
  return (
    <StyledView>
      <StyledView
        style={[styles.cards, styles.header]}
        className="flex-1"
        >
        <StyledView   className="flex bg-red" >
          <StyledView   className="justify-center">
            <StyledImage
            style={styles.dp}
              className="h-24 w-24 md rounded-full relative bg-purple-500 "
              src="https://server.7saba.com/IMG_20230723_114801_084.jpg"
              alt=""
              
            />
            <StyledText 
            style={styles.dp}
            className="text-md whitespace-nowrap text-gray-800 font-semibold">
              Anonymous User
            </StyledText>
            <StyledView className="py-1 flex justify-center justify-center w-full StyledViewide-x StyledViewide-gray-400 StyledViewide-solid" style={{flexDirection:"row"}}>
              <StyledText className="text-center px-2">
                <StyledText className="font-bold text-gray-700">0</StyledText>
                <StyledText className="text-gray-600"> followers</StyledText>
              </StyledText>
              <StyledText className="text-center px-2">
                <StyledText className="font-bold text-gray-700">0</StyledText>
                <StyledText className="text-gray-600"> following</StyledText>
              </StyledText>
              <StyledText className="text-center px-2">
                <StyledText className="font-bold text-gray-700">0</StyledText>
                <StyledText className="text-gray-600"> Products</StyledText>
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
        <StyledText className="m-1 mx-2">Profile</StyledText>
      </StyledView>
      <StyledView className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mx-2" style={styles.balance,styles.flex}>
      <FontAwesome name="money" size={24} color="black" />
        <StyledText className="m-1 mx-2">Your Balance : 0/=</StyledText>
      </StyledView>
      <StyledView className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mx-2" style={styles.followers,styles.flex}>
      <SimpleLineIcons name="user-following" size={24} color="black" />
        <StyledText className="m-1 mx-2">Followers: 0</StyledText>
      </StyledView>
      <StyledView className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mx-2" style={styles.Settings,styles.flex}>
      <AntDesign name="setting" size={24} color="black" />
        <StyledText className="m-1 mx-2">Settings</StyledText>
      </StyledView>
      <StyledView className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mx-2" style={styles.invite_friends,styles.flex}>
      <Entypo name="mail" size={24} color="black" />
        <StyledText className="m-1 mx-2">Invite friends</StyledText>
      </StyledView>
      <StyledView className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mx-2" style={styles.report,styles.flex}>
      <MaterialIcons name="report-problem" size={24} color="black" />
        <StyledText className="m-1 mx-2">Report a problem</StyledText>
      </StyledView>
      <StyledView className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mx-2" style={styles.help,styles.flex}>
      <Feather name="help-circle" size={24} color="black" />
        <StyledText className="m-1 mx-2">Help</StyledText>
      </StyledView>
      <StyledView className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white  mx-2" style={styles.user_guides,styles.flex}>
      <Entypo name="text-document" size={24} color="black" />
        <StyledText className="m-1 mx-2">Terms of service</StyledText>
      </StyledView>
      <StyledView className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white mx-2" style={styles.cards,styles.flex}>
      <MaterialIcons name="policy" size={24} color="black" />
        <StyledText className="m-1 mx-2">Privacy Policy</StyledText>
      </StyledView>
    </StyledView>
  );
};

var styles = StyleSheet.create({
  cards: { backgroundColor: "#F5A5A5", height: 48, marginBottom: 2 },
  header: { height: 180, backgroundColor: "#Efefef" },
  balance: {},
  followers: {},
  Settings: {},
  invite_friends: {},
  report: {},
  help: {},
  user_guides: {},
  t_a_c: {},
  p_p: {},
  and_copy: {},
  dp: {margin:"auto",position:"relative",left:120},
  flex:{flexDirection:"row"}

});
// export default withExpoSnack(App);
export default App;

