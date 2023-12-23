// SignupComponent.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignupComponent = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://192.168.0.11:3000/signup', {
                username,
                password,
            });

            console.log('Signup successful:', response.data);
            setMessage(response.data.message);
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error signing up:', error.message);
            setMessage('Signup failed');
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

            <Button title="Sign Up" onPress={handleSignup} />

            <Text>{message}</Text>
        </View>
    );
};

export default SignupComponent;
