import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PrizeScreen from '../screens/PrizeScreen/PrizeScreen';

const Stack = createNativeStackNavigator();

const RouteStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen 
            name="welcomescreen" 
            component={WelcomeScreen} 
            options={{
                headerShown: false,
              }}
            />
            
            <Stack.Screen 
            name="homescreen" 
            component={HomeScreen} 
            options={{
                headerShown: false,
              }}
            />
            
            <Stack.Screen 
            name="prizescreen" 
            component={PrizeScreen} 
            options={{
                headerShown: false,
              }}
            />

          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouteStack