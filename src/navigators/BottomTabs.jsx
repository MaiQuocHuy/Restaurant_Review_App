import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SearchScreen, UserProfileScreen} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Display} from '../utils';

export default function BottomTabs() {
  const BottomTabs = createBottomTabNavigator();
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: Display.setHeight(8),
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#0A8791',
        tabBarInactiveTintColor: '#A3A3A3',
      }}
      op>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" size={23} color={color} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="search-outline" size={23} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" size={23} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
