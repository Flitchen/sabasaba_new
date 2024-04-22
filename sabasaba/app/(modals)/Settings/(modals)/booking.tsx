import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Svg, { Path } from 'react-native-svg';
import PriceRangeComponent from './PriceScrollComponent';
import DropdownSelect from "react-native-input-select";
import { Mikoa } from "@/constants/Mikoa";
import { useForm, Controller } from "react-hook-form";
import Categories from '@/components/Categories';


const SearchInput = () => {
  return (
    <View style={Searchstyles.container}>
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={Searchstyles.icon}
      >
        <Path d="M21 21l-4.35-4.35" />
        <Path d="M9 17a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
      </Svg>
      <TextInput
        placeholder="Search"
        style={Searchstyles.input}
        placeholderTextColor="black"
      />
    </View>
  );
};

const Searchstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom:12
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
  },
});



const SearchPage = () => {
  const [category, select_category] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [gender, set_gender] = React.useState(0);
  const {
    control,
    formState: { errors },
  } = useForm();



  const categories =[
    { name: "Phone", id: "phone" },
    { name: "Fashion", id: "Fashion" },
    { name: "Children", id: "Children" },
    { name: "Electronic", id: "Electronic" },
    { name: "Others", id: "Others" },
    { name: "Hobby", id: "Hobby" },
    { name: "Vehicle", id: "Vehicle" },
    { name: "House", id: "House" },
    { name: "Job", id: "Job" },
    { name: "Service", id: "Service" },
    { name: "Hobby", id: "Hobby" },
  ]

  const handleSubmit = () => {
    // Construct search query
    const query = `category=${category}&location=${location}&price=${price}`;

    // Perform fetch request with search query
    fetch(`http://example.com/search?${query}`)
      .then(response => response.json())
      .then(data => {
        // Handle response data
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
   <>
   <Stack.Screen
        options={{
          presentation: "modal",
          title: ' Search',
          headerTitle: ' Search',
          tabBarLabel: ' Search',  
          animation: "fade",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons size={26} name="close-outline" />
            </TouchableOpacity>
          ),
          // headerRight: () => (<TouchableOpacity onPress={()=>{router.back()}}><Ionicons size ={26} name='close-outline'/></TouchableOpacity>),
        }}
      />
    <View style={styles.container}>
      
    <SearchInput />
    <View>
        {/* Form Girdileri */}

        <Controller
          control={control}
          render={({ field }) => (
            <DropdownSelect
              // label="Gender"
             placeholder="Category ..."
              options={categories}
              optionLabel={"name"}
              optionValue={"id"}
              selectedValue={category}
              onValueChange={(itemValue: any) => select_category(itemValue)}
              dropdownErrorStyle={{
                borderColor: "red",
                borderWidth: category,
                borderStyle: "solid",
              }}
              dropdownErrorTextStyle={{ color: "red", fontWeight: "500" }}
              error={category ? "" : ""}
              primaryColor={"green"}
              modalControls={
                {
                  // modalProps: { onShow: () => logMovies() },
                }
              }
            />
          )}
          name="name"
          rules={{ required: "You must enter your name" }}
        />
        {errors.name && (
          <Text style={styles.errorText}>{errors.name.message}</Text>
        )}
      </View>

    <View>
        {/* Form Girdileri */}

        <Controller
          control={control}
          render={({ field }) => (
            <DropdownSelect
              // label="Gender"
             placeholder="City ..."
              options={Mikoa}
              optionLabel={"name"}
              optionValue={"id"}
              selectedValue={location}
              onValueChange={(itemValue: any) => setLocation(itemValue)}
              dropdownErrorStyle={{
                borderColor: "red",
                borderWidth: location,
                borderStyle: "solid",
              }}
              dropdownErrorTextStyle={{ color: "red", fontWeight: "500" }}
              error={location ? "" : ""}
              primaryColor={"green"}
              modalControls={
                {
                  // modalProps: { onShow: () => logMovies() },
                }
              }
            />
          )}
          name="name"
          rules={{ required: "You must enter your name" }}
        />
        {errors.name && (
          <Text style={styles.errorText}>{errors.name.message}</Text>
        )}
      </View>
    <PriceRangeComponent />
     
      <Button title="Search" onPress={handleSubmit} />
    </View>

    <Text style={{fontWeight:"500", fontSize:18, marginTop:10}}> Recomendations </Text>
    <View style={{ alignItems: 'center',}}>
    <View style={styles.card}>
      <Text style={styles.text}>
      😞 Sorry, there are no recomendations for you yet, Please keep scrolling so we can generate recomendations for you 
  </Text>
    </View>
          </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e4e4e4', // Yellow background color
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
  },
});

export default SearchPage;
