import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { Input } from 'native-base'
import { Image } from 'react-native-svg'
export default function Header(props) {
  return <View className="flex p-2 m-auto">
    <Text className="font-bold leading-tight text-xl text-slate-500 "> 7SABA <Text className="p-1 m-2 border-b-0 text-sm">Where all your needs are met</Text></Text>
    <View className="flex">
    {/* <form action="SearchPage" method="get" style="width: 90%;"> */}
    <View><View className="relative w-full">
    <Input type="password" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Products..." name="q" required=""/>
    </View>
    </View>
    {/* </form> */}
    <View className="m-auto">
    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006_edit_1.jpg'}} className={{ resizeMode: 'cover', width: '100%', height: '100%' }}/>

    </View></View>
  </View>
}
