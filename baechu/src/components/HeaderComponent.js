// HeaderComponent.js
import React from 'react';
import { View, Text } from 'react-native';

const HeaderComponent = ({ title }) => {
  return (
    <View style={{ height: 60, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
    </View>
  );
};

export default HeaderComponent;
