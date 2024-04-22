import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {Pressable} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';   
const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '14%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const [selectedValue, setSelectedValue] = useState(null);
  const [chosenOption, setChosenOption] = useState(""); //will store our current user options
  
  const options = [
    { label: 'Allow', value: 'Allow' },
    { label: 'Dissable', value: 'Dissable' },
  ]; //create our options for radio group
  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
        <RadioForm
        radio_props={options}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      />
          {/* <Pressable onPress={() => {alert("Your choice:En ");setSelectedValue("En")}}><Text style={{paddingBottom:10,fontSize:20}} >English</Text></Pressable> */}
          {/* <Pressable onPress={() => {alert("Your choice:Sw ");setSelectedValue("Sw")}}><Text style={{paddingBottom:10,fontSize:20}} >Swahili</Text></Pressable> */}
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    fontSize:10,
    marginLeft: 25
  },
});

export default App;