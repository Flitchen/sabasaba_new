import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useLang } from '@/contexto/LanguageProvider';

export default function Page() {
const {language} = useLang()
const {id} = useLocalSearchParams<{id:string}>();
useEffect(() => {
  console.log(language)
 }, [])
 
  return (
    <View>
      <Text>Page {id}</Text>
    </View>
  )
}