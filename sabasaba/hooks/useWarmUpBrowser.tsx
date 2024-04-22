import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as WebBrowser from "expo-web-browser"
export default function useWarmUpBrowser() {
  return (
   useEffect(() => {
     void WebBrowser.warmUpAsync()
     return () => {
       WebBrowser.coolDownAsync()
     }
   }, [])
   
  )
}