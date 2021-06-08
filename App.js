import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from "./Screen/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TeamDetails from './Screen/TeamDetails';

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TeamDetails" component={TeamDetails} />
      
      </Stack.Navigator>
    </NavigationContainer>
   
    </SafeAreaProvider>
  );
}

