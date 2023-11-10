import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/Navigation/Stack/HomeStack/HomeScreen';
import Tabbar from './src/Navigation/Tabbar/Tabbar';
import { store } from './src/Store/store';
import OnboardinScreen from './src/Navigation/Stack/OnboardingStack/OnboardinScreen';
import LoginScreen from './src/Navigation/Stack/LoginStack/LoginScreen';
import RegisterScreen from './src/Navigation/Stack/RegisterStack/RegisterScreen';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardinScreen" component={OnboardinScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Tabbar" component={Tabbar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BigApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default BigApp;