import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-paper';

const ProductRegistrationForm = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Camera permission denied');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
      maxNumberOfFiles: 4 - images.length,
    });

    if (!result.cancelled) {
      setImages(prevImages => [...prevImages, { uri: result.uri }]);
    }
  };

  const handleProductRegistration = () => {
    // Prepare product data
    const productData = {
      name: productName,
      description: productDescription,
      price: productPrice,
      images: images,
    };

    // POST request to localhost:80
    fetch('http://localhost:80', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product registration successful:', data);
        // Handle success, e.g., navigate to a success screen
      })
      .catch(error => {
        console.error('Error registering product:', error);
        // Handle error, e.g., display error message to the user
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product Name:</Text>
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
      />
      <Text style={styles.label}>Product Description:</Text>
      <TextInput
        style={styles.input}
        value={productDescription}
        onChangeText={setProductDescription}
      />
      <Text style={styles.label}>Product Price:</Text>
      <TextInput
        style={styles.input}
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
      />
      <Button
        title="Add Image from Camera"
        onPress={handleImageUpload}
      />
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image.uri }} style={styles.image} />
        ))}
      </View>
      <Button
        title="Register Product"
        onPress={handleProductRegistration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default ProductRegistrationForm;
