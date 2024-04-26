import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreen from '../../screens/user/PostScreen';

const PostStack = createNativeStackNavigator();

const PostStackScreen = () => {
  return (
    <PostStack.Navigator screenOptions={{headerShown: false}}>
      <PostStack.Screen name="Post" component={PostScreen} />
    </PostStack.Navigator>
  );
};

export default PostStackScreen;
