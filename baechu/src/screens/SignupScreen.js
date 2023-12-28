// SignupComponent.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity, Share } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';

const SignupComponent = () => {
    const navigation = useNavigation();
    const [nickname, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [gender, setGender] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://192.168.45.66:3000/signup', {
                email,
                nickname,
                password,
                year,
                month,
                day,
                gender,
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
            <Text>Email:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <Text>Username:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={(text) => setUsername(text)}
                value={nickname}
            />

            <Text>Password:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
            />
            
            <Text>생년월일:</Text>
            <View style={{ flexDirection: 'row' }}>
                {/* 년 선택 */}
                <TextInput
                style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={(text) => setYear(text)}
                value={year}
                placeholder="년"
                />

                {/* 월 선택 */}
                <TextInput
                style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={(text) => setMonth(text)}
                value={month}
                placeholder="월"
                />

                {/* 일 선택 */}
                <TextInput
                style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={(text) => setDay(text)}
                value={day}
                placeholder="일"
                />
            </View>

            <Text>Gender:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={(text) => setGender(text)}
                value={gender}
            />
            {/* 성별 선택 부분
            <Text>성별:</Text>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <CheckBox
                value={gender === 'male'}
                onValueChange={() => setGender('male')}
                />
                <Text>남성</Text>

                <CheckBox
                value={gender === 'female'}
                onValueChange={() => setGender('female')}
                />
                <Text>여성</Text>

                <CheckBox
                value={gender === 'other'}
                onValueChange={() => setGender('other')}
                />
                <Text>기타</Text>
            </View> */}

            <Button title="Sign Up" onPress={handleSignup} />

            <Text>{message}</Text>

            {/* <TouchableOpacity onPress={MyShareComponent}>
                <Text>Share</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default SignupComponent;
