import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomDrawer from '../../components/CustomDrawer';
import {
  ManageMenuDishScreen,
  ManagePostScreen,
  ManageRestaurantProfileScreen,
} from '../../screens';
import MenuDishStackScreen from './MenuDishStackScreen';

const Drawer = createDrawerNavigator();

const AdminStackScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#0A8791',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Manage Profile Restaurant"
        component={ManageRestaurantProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mana MenuDish Restaurant"
        component={MenuDishStackScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="menu-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Manage Post Restaurant"
        component={ManagePostScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AdminStackScreen;
