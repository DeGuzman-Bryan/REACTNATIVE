import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Import Screens
import HomeScreen from './Tabs/HomeScreen';
import SearchScreen from './Tabs/SearchScreen';
import ProfileScreen from './Tabs/ProfileScreen';
// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Tab.Navigator
       screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
           let iconName;

           if (route.name === 'Home') {
             iconName = focused ? 'home' : 'home-outline';
           } else if (route.name === 'Search') {
             iconName = focused ? 'search' : 'search-outline';
           } else if (route.name === 'Profile') {
             iconName = focused ? 'person' : 'person-outline';
           }

           return <Ionicons name={iconName} size={size} color={color} />;
         },
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: 'gray',
         tabBarStyle: { paddingBottom: 5, height: 60 },
       })}
     >
       <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Search" component={SearchScreen} />
       <Tab.Screen name="Profile" component={ProfileScreen} />
     </Tab.Navigator>
   </NavigationContainer>
 );
}
