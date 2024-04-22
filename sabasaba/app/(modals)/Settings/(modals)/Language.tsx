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
    { label: 'English', value: 'English' },
    { label: 'Swahili', value: 'Swahili' },
  ]; //create our options for radio group
  // renders
  return (
    <View style={styles.container}>
      
        <View style={styles.contentContainer}>
        <RadioForm
        radio_props={options}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#efefef',
  },
  contentContainer: {
    flex: 1,
    fontSize:10,
    marginLeft: -10
  },
});

export default App;