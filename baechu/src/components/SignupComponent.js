// // LoginComponent.js (프론트엔드 코드)

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import axios from 'axios';

// const LoginComponent = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://192.168.0.11:8082/login', {
//         username,
//         password,
//       });
//       // 로그인 성공 시
//       console.log("Login successful:", response.data);
//       setMessage(response.data.message);
//     } catch (error) {
//       // 에러 처리
//       console.error('Error logging in:', error.message);
//       setMessage('Login failed');
//     }
//   };

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://192.168.0.11:8082/register', {
//         username,
//         password,
//       });
//       // 회원가입 성공 시
//       console.log("Registration successful:", response.data);
//       setMessage(response.data.message);
//     } catch (error) {
//       // 에러 처리
//       console.error('Error registering:', error.message);
//       setMessage('Registration failed');
//     }
//   };

//   return (
//     <View>
//       <Text>Username:</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
//         onChangeText={(text) => setUsername(text)}
//         value={username}
//       />

//       <Text>Password:</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//         secureTextEntry
//       />

//       <Button title="Login" onPress={handleLogin} />
//       <Button title="Register" onPress={handleRegister} />

//       <Text>{message}</Text>
//     </View>
//   );
// };

// export default LoginComponent;
