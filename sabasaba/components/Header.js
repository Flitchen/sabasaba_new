import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {Input} from 'native-base';
// import Constants from 'expo-constants'
// import { NativeWindStyleSheet } from "nativewind";
import {Link} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
// import Colors from "@/constan1ts/Colors";
import {SafeAreaView} from 'react-native-safe-area-context';
import {useLang} from '@/contexto/LanguageProvider';
//
// NativeWindStyleSheet.setOutput({
// default: "native",
// });

const {language} = useLang();

const motto = {
  En: ' Where all your needs are met',
  Sw: 'Pata kila hitaji lako',
  Zh: '满足你所有需要的地方',
  Zh: 'Where all your needs are met',
};

const search_palceholder = {
  En: 'What are you looking for',
  Sw: 'Unatafuta Nini',
  Zh: '你在找什么',
  Zh: 'What are you looking for',
};

export default function Header({navigation}) {
  let promo_icon = require('../assets/images/watu.png');
  const switch_screen = () => {
    navigation.navigate('RewardsProgram');
  };
  const open_search = () => {
    navigation.navigate('SearchPage');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#752b07',
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          borderBottomRadius: 100,
          marginBottom:2
        }}>
        <Text style={{fontWeight: '900', textAlign: 'center', color: 'white'}}>
          7SABA
          <Text style={{padding: 102, color: 'white'}}>
            {language === 'En'
              ? motto.En
              : language == 'Sw'
              ? motto.Sw
              : motto.Zh}
          </Text>
        </Text>
      </View>
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.search_button} onPress={open_search}>
          {/* <Ionicons name="search" size= {24} style={{marginTop:6,marginLeft:6}} /> */}
          <View style={{paddingLeft: 10}}>
            <Text style={{color: '#fff'}}>
              {' '}
              {language === 'En'
                ? search_palceholder.En
                : language == 'Sw'
                ? search_palceholder.Sw
                : search_palceholder.Zh}{' '}
            </Text>
            <Text style={{color: '#fff', marginTop: '-5px', padding: 0}}>
              Anything · Anywhere
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter_button} onPress={switch_screen}>
          <Image
            source={require('../assets/images/promo.png')}
            style={{height: 40, width: 50, borderRadius: 1000}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: '#e65d19',
    //  marginTop:StatusBar.currentHeight,
    // paddingTop: Constants.statusBarHeight,
  },
  actionRow: {
    flexDirection: 'row',
    allignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  filter_button: {
    padding: 0,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 25,
  },
  search_button: {
    borderRadius: 30,
    flex: 4,
    flexDirection: 'row',
    allignItems: 'center',
    gap: 10,
    borderColor: '#e3e3e3',
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 2,
    shadowOpacity: 0.12,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOffset: {width: 3, height: 3},
    flex: 1,
    backgroundColor: '#e30e3e3',
  },
});
