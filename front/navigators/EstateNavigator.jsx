import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Details from '../pages/EstateDetails';
import New from '../pages/EstateNew';
import Modify from '../pages/EstateModify';

const Stack = createNativeStackNavigator();

export default function EstateNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Accueil" component={Home} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Nouveau" component={New} />
                <Stack.Screen name="Modifier" component={Modify} />
            </Stack.Navigator>
            {/* <StatusBar style="auto" /> */}
        </NavigationContainer>
    );
}
