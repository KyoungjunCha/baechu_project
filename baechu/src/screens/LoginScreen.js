// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.45.66:3000/login', {
        username,
        password,
      });

      console.log("Login successful:", response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error logging in:', error.message);
      setMessage('Login failed');
    }
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <Text>Password:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
      <Text>{message}</Text>
    </View>
  );
};

export default LoginScreen;
