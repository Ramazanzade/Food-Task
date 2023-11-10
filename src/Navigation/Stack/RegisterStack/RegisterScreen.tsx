import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../../Component/Register/Register';
const Stack = createNativeStackNavigator();
const RegisterScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default RegisterScreen