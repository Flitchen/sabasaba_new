import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Validate form fields
    if (!name.trim() || !email.trim() || !phoneNumber.trim() || !feedback.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Submit feedback (you can replace this with your own submission logic)
    const formData = { name, email, phoneNumber, feedback };
    console.log('Feedback submitted:', formData);

    // Clear form fields
    setName('');
    setEmail('');
    setPhoneNumber('');
    setFeedback('');

    // Show confirmation message
    Alert.alert('Success', 'Thank you for your feedback!');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        multiline
        placeholder="Enter your feedback"
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Submit Feedback" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
});

export default FeedbackForm;
