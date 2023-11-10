import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Basket from '../../../Component/Basket/Basket';
const Stack = createNativeStackNavigator();
const BasketScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Basket" component={Basket} />
        </Stack.Navigator>
    )
}

export default BasketScreen