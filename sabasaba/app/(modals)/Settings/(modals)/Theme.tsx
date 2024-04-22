import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {Pressable} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(
    () => [' 16% ',' 17% ',' 18% ',' 19% ',' 20% ',' 21% ',' 22% ',' 23% ',' 24% ',' 25% ',' 26% ',' 27% ',' 28% ',' 29% ',' 30% ',' 31% ',' 32% ',' 33% ',' 34% ',' 35% ',' 36% ',' 37% ',' 38% ',' 39% ',' 40% ',' 41% ',' 42% ',' 43% ',' 44% ',' 45% ',' 46% ',' 47% ',' 48% ',' 49% ',' 50% ',' 51% ',' 52% ',' 53% ',' 54% ',' 55% ',' 56% ',' 57% ',' 58% ',' 59% ',' 60% ',' 61% ',' 62% ',' 63% ',' 64% ',' 65% ',' 66% ',' 67% ',' 68% ',' 69% ',' 70% ',' 71% ',' 72% ',' 73% ',' 74% ',' 75% ',' 76% ',' 77% ',' 78% ',' 79% ',' 80% ',' 81% ',' 82% ',' 83% ',' 84% ',' 85% ',' 86% ',' 87% ',' 88% ',' 89% ',' 90% ',' 91% ',' 92% ',' 93% ',' 94% ',' 95% ',' 96% ',' 97% ',' 98% ',' 99% ',],
    [],
  );

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const [selectedValue, setSelectedValue] = useState(null);
  const [chosenOption, setChosenOption] = useState(''); //will store our current user options

  const options = [
    {label: 'Light', value: 'light'},
    {label: 'Dark', value: 'dark'},
    {label: 'System default', value: 'System'},
  ]; //create our options for radio group
  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <RadioForm
            radio_props={options}
            initial={1} //initial value of this group
            onPress={value => {
              setChosenOption(value);
            }} //if the user changes options, set the new value
          />
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
    fontSize: 10,
    marginLeft: 25,
  },
});

export default App;
