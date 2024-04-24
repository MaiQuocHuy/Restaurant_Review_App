import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const PostStack = createNativeStackNavigator();

const PostStackScreen = () => {
  return (
    <PostStack.Navigator screenOptions={{headerShown: false}}>
      <PostStack.Screen name="UserProfile" component={UserProfileScreen} />
    </PostStack.Navigator>
  );
};

export default PostStackScreen;
