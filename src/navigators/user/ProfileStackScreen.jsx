import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserProfileScreen} from '../../screens';

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="UserProfile" component={UserProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
