import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../../../Component/Onboarding/Onboarding';
import Onboarding2 from '../../../Component/Onboarding/Onboarding2';

const Stack = createNativeStackNavigator();
const OnboardinScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Onboarding2" component={Onboarding2} />
        </Stack.Navigator>
    )
}

export default OnboardinScreen