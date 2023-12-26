// HomeScreen.js

import React from 'react';
import { View, Button, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';
// import * as Sharing from 'expo-sharing';


const HomeScreen = () => {
  const navigation = useNavigation();

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  }

  const Find = () => {
    navigation.navigate('Find')
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          '메시지 공유 테스트',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };



  return (
    <View>
      {/* <HeaderComponent title="Home"/> */}
      <Button title="Sign Up" onPress={goToSignup} />
      <Button title="Login" onPress={goToLogin} />
      <Button title="Share" onPress={onShare} />
      <Button title="Find" onPress={Find}/>
      {/* <Button title="find Pass Word" onPress={findPassword}/> */}
    </View>

  );
};


export default HomeScreen;
