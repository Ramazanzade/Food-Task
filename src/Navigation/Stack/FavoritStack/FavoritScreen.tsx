import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorit from '../../../Component/Favorit/Favorit';
const Stack = createNativeStackNavigator();
const FavoritScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Favorit" component={Favorit} />
        </Stack.Navigator>
    )
}

export default FavoritScreen