/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import {ContactStackNavigator} from './MainNavigator';
import {primary_color} from '../../libs/colors';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: primary_color},
        headerBackgroundContainerStyle: {},
        headerTintColor: 'white',
        headerShown: false,
      }}>
      <Drawer.Screen
        name="HomeDrawer"
        component={BottomTabNavigator}
        options={{headerTitle: ''}}
      />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}
