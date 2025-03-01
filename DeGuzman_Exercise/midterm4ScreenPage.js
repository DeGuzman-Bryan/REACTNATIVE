import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import ScreenPage1 from './screens/ScreenPage1';
import ScreenPage2 from './screens/ScreenPage2';
import React from 'react'
//Initialize Stack
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page1" component={ScreenPage1} />
        <Stack.Screen name="Page2" component={ScreenPage2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
