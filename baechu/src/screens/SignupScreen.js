// SignupComponent.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Share } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';


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

    const MyShareComponent = async () => {
        const shareOptions = {
            message: 'My password',
            url: 'https://192.168.0.11:3000'
        }

        try {
            await Sharing.shareAsync(shareOptions);
        } catch (error) {
            console.error('Error sharing:', error.message);
        }
    };

    return (
        <View>
            {/* <HeaderComponent title="SignUp" /> */}
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

            {/* <TouchableOpacity onPress={MyShareComponent}>
                <Text>Share</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default SignupComponent;
