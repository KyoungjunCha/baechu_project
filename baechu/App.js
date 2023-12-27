import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import { firebase } from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = {
  // Firebase 프로젝트 설정 정보 입력
};

// Firebase 초기화
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    // FCM 토큰 얻기
    messaging().getToken().then(token => {
      console.log('FCM 토큰:', token);
    });

    // 푸시 알림 수신 이벤트 핸들러 등록
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('푸시 알림 수신:', remoteMessage);
      // 여기서 푸시 알림을 처리하는 코드 추가
    });

    // 앱이 백그라운드 또는 종료 상태에서 푸시 알림을 클릭했을 때 실행되는 이벤트 핸들러 등록
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('백그라운드 상태에서 푸시 알림 클릭:', remoteMessage);
      // 여기서 백그라운드 상태에서 푸시 알림을 처리하는 코드 추가
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
