import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView, StyleSheet } from 'react-native';

const PriceRangeComponent = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollViewContent}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Min Price:</Text>
        <TextInput
          style={styles.input}
          value={minPrice}
          onChangeText={text => setMinPrice(text)}
          keyboardType="numeric"
          placeholder="Min"
          placeholderTextColor="gray"
        />

        <Text style={styles.label}>Max Price:</Text>
        <TextInput
          style={styles.input}
          value={maxPrice}
          onChangeText={text => setMaxPrice(text)}
          keyboardType="numeric"
          placeholder="Max"
          placeholderTextColor="gray"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default PriceRangeComponent;
