import React from "react";
import { withExpoSnack } from "nativewind";

import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { styled } from "nativewind";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function Earnings() {
  return (
      <StyledView className="text-center mx-auto text-gray-700 p-4">
        <StyledText>Income Summary</StyledText>
        <StyledView className="card m-auto">
          <StyledText className="m-auto">Total Friend Invited : 0 </StyledText>
        </StyledView>
        <StyledView className="card m-auto">
          <StyledView className="m-auto">
            <StyledText>
            Money Earned :{" "}
            </StyledText>
            <StyledText style={{ color: "red" }}>Tsh 0 /=</StyledText>
          </StyledView>
        </StyledView>
        <StyledView className="card m-auto">
          <StyledView className="m-auto">
          <StyledText>Money in account :{" "}</StyledText>
            <StyledText style={{ color: "red" }}>Tsh 0 /=</StyledText>
          </StyledView>
        </StyledView>
        <StyledView className="card m-auto">
          <StyledView className="m-auto">
          <StyledText>Money spent :{" "}</StyledText>
            <StyledText style={{ color: "red" }}>Tsh 0 /=</StyledText>
          </StyledView>
        </StyledView>
        <StyledText>Share and Start Earning</StyledText>
        <StyledView className="flex">
          <StyledView
            className="relative mb-3 w-full"
            data-te-input-wrapper-init=""
          >
            <StyledText
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            >
                https://api.7saba.com/share/testuser
            </StyledText>
          </StyledView>
          <StyledView style={{ padding: "8px 0px" }}></StyledView>
        </StyledView>
        <StyledText>Instructions For Earning money</StyledText>
        <StyledView className="card">
          <StyledView>
            <StyledText>Copy the Link above</StyledText>
            <StyledText>
              Share the link with your Friends and start Earning
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
  );
}
