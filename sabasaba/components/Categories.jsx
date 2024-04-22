import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLang } from '@/contexto/LanguageProvider'
import { useApp } from '@/contexto/AppProvider'



var list_of_categories =[
    {category:"Vehicles",category_sw:"Magari",category_zh:"车辆",icon:require("../assets/images/Exotic-Car-No-Background.png")},
    {category:"Phone",category_sw:"Simu",category_zh:"电话",icon:require("../assets/images/iPhone-11-PNG-Transparent-HD-Photo.png")},
    {category:"Rent",category_sw:"Nyumba",category_zh:"出租物业",icon:require("../assets/images/Dream-House-PNG-Pic.png")},
    {category:"Fashion",category_sw:"Mavazi",category_zh:"衣服",icon:require("../assets/images/Fashion-Logo-PNG-Clipart.png")},
    {category:"Job",category_sw:"Ajira",category_zh:"工作机会",icon:require("../assets/images/Factory-PNG-Free-Image.png")},
    {category:"Children",category_sw:"Watoto",category_zh:"儿童",icon:require("../assets/images/toto.png")},
    {category:"Service",category_sw:"Huduma",category_zh:"服务",icon:require("../assets/images/Banker-PNG-Picture.png")},
    {category:"Electronic",category_sw:"Vyombo",category_zh:"电子产品",icon:require("../assets/images/Computer-PNG-Picture.png")},
    {category:"Hobby",category_sw:"Michezo",category_zh:"爱好",icon:require("../assets/images/Electric-Guitar-Rock-No-Background.png")},
    {category:"Others",category_sw:"Vinginevy",category_  :"其他",icon:require("../assets/images/others.png")},
]
export default function Categories(props) {
const {language,set_selected_language} = useLang()
var {Iliyochaguliwa, setIliyochaguliwa} = useApp()

useEffect(() => {
  // props.navigation.navigate(Iliyochaguliwa)
 }, [Iliyochaguliwa])
 
  return (
    <View style={{backgroundColor:"#f55405", color:"white"}}>
      <View style={{flexDirection: "row",justifyContent:"space-between",display:"block",width:"98%", marginLeft:5}}>
      {list_of_categories.map((category,index)=>(
        <>{index%2==0 ? <TouchableOpacity key={index}  style={{float:"left",width:"17%"}} onPress={() => {setIliyochaguliwa(language==="En" ? (category.category):language=="Sw" ? (category.category_sw): (category.category));props.navigation.navigate("Explore",category.category)}}>
        <View style={{backgroundColor:"lightgreen ", margin:"auto", borderRadius:10}}>
            <Image key={index}
                source={category.icon}
                style={{height:50, width:50,borderRadius:10,marginHorizontal:10,objectFit:"fill"}}
      /></View>
            <Text style={{margin:"auto", color:"white"}}>{language==="En" ? (category.category):language=="Sw" ? (category.category_sw): (category.category)}</Text>
        </TouchableOpacity> : ""}
        </>
      ))}
    </View><View style={{flexDirection: "row",justifyContent:"space-between",display:"block",width:"98%", marginLeft:5}}>
      {list_of_categories.map((category,index)=>(
        <>{index%2==1 ? <TouchableOpacity key={index}  style={{float:"left",width:"17%"}} onPress={() => {setIliyochaguliwa(language==="En" ? (category.category):language=="Sw" ? (category.category_sw): (category.category));props.navigation.navigate("Explore",category.category)}}>
        <View style={{backgroundColor:"lightgreen ", margin:"auto", borderRadius:10}}>
            <Image key={index}
                source={category.icon}
                style={{height:50, width:50,borderRadius:10,marginHorizontal:10,objectFit:"fill"}}
      /></View>
            <Text style={{margin:"auto", color:"white"}}>{language==="En" ? (category.category):language=="Sw" ? (category.category_sw): (category.category)}</Text>
        </TouchableOpacity> : ""}
        </>
      ))}
    </View>
    </View>
  )
}