import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Screen1 from './ScreenTab/Screen1';
import Screen2 from './ScreenTab/Screen2';
import React from 'react'
//Initialize Stack
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page1" component={Screen1} />
        <Stack.Screen name="Page2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}