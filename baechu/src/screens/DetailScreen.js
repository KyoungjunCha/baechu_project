// HomeScreen.js

import React from 'react';
import { View, Button, TextInput, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
// import * as Sharing from 'expo-sharing';

const DetailScreen = () => {
  const [email, setEmail] = useState('');

  const handleFindPassword = async () => {
    try {
      const response = await fetch('http://192.168.0.11:3000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Email Sent', 'Check your email for the temporary password.');
      } else {
        Alert.alert('Error', 'Failed to send email. Please check your email address.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View>
      <Text>디테일 페이지입니다. 테스트 용입니다.</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Find Password" onPress={handleFindPassword} />
    </View>
  );
};

export default DetailScreen;