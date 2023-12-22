// HomeScreen.js

import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const goToLogin = () =>{
    navigation.navigate('Login');
  }

  return (
    <View>
      <Button title="Sign Up" onPress={goToSignup} />    
      <Button title="Login" onPress={goToLogin} />
    </View>
    
  );
};

export default HomeScreen;
