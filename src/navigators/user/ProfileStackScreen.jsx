import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserProfileScreen} from '../../screens';
import EditProfile from '../../screens/user/EditProfile';
import {useLayoutEffect} from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Display} from '../../utils';
import BookMarked from '../../screens/user/BookMarkedScreen';
import BookMarkedScreen from '../../screens/user/BookMarkedScreen';

const ProfileStack = createNativeStackNavigator();

const originalTabBarStyle = {
  position: 'absolute',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  height: Display.setHeight(8),
  backgroundColor: '#fff',
  borderTopWidth: 0,
};

const ProfileStackScreen = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'EditProfile') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarStyle: originalTabBarStyle,
      });
    }
  }, [navigation, route]);

  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="UserProfile" component={UserProfileScreen} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="Bookmarked" component={BookMarkedScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
