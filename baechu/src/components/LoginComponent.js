import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.0.11:8082/login', {
        username,
        password,
      });

      // 로그인 성공 시
      console.log("Login successful:", response.data);
      setMessage(response.data.message);
    } catch (error) {
      // 에러 처리
      console.error('Error logging in:', error.message);
      setMessage('Login failed'); // 에러 메시지 출력
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

export default LoginComponent;
