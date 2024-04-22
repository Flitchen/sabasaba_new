import FontAwesome from '@expo/vector-icons/FontAwesome';

import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign, Feather, FontAwesome5, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'

export default function Layout() {
  const asd =process.env.CLERK_PUBLISHABLE_KEY;
  return (
    <Tabs>
        <Tabs.Screen name='index' 
        options={{
          tabBarLabel:"Home",
          headerShown: false,
          tabBarIcon: ({color,size})=> <AntDesign name='home' color="black" size={size}/>
        }}/>
        
        <Tabs.Screen name='Explore' 
        options={{
          tabBarLabel:"Explore",
          headerShown: false,
          tabBarIcon: ({color,size})=> <Feather name="list" size={24} color="black" />
        }}/>
        <Tabs.Screen name='Sell' 
        options={{
          tabBarLabel:"Sell",
          headerShown: false,
          tabBarIcon: ({color,size})=> 
          <AntDesign name="pluscircle" size={24} color="black" />
        }}/>
        <Tabs.Screen name='Message' 
        options={{
          tabBarLabel:"Message",
          headerShown: false,
          tabBarIcon: ({color,size})=> 
          <AntDesign name="message1" size={24} color="black" />
        }}/>
        <Tabs.Screen name='Account' 
        options={{
          tabBarLabel:"Account",
          headerShown: false,
          tabBarIcon: ({color,size})=> 
          // <AntDesign name="setting" size={24} color="black" />
          <AntDesign name="user" size={24} color="black" />
        }}/>
    </Tabs>
  )
}