import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

export default function Modal () {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    // Simulate form submission
    console.log('Submitted Data:', data);
    setSubmittedData(data);
  };

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
          <SafeAreaView>
      <View >
        {/* Form Girdileri */}
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Your Name"
            />
          )}
          name="name"
          rules={{ required: 'You must enter your name' }}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Email"
            />
          )}
          name="email"
          rules={{ required: 'You must enter your email', pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email address' } }}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Please summarise your issue"
            />
          )}
          name="name"
          rules={{ required: 'Please specify your issue' }}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

        {/* Submit Butonu */}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />

        {/* Gönderilen Veriler */}
        {submittedData && (
          <View style={styles.submittedContainer}>
            <Text style={styles.submittedTitle}>Submitted Data:</Text>
            <Text>Your Name: {submittedData.name}</Text>
            <Text>Your Email: {submittedData.email}</Text>
            <Text>Please summarise the issue: {submittedData.issue}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
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
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
