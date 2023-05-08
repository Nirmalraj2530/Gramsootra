import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CoustomDrawer from '../constants/CoustomDrawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ItemsScreen from '../screens/ItemsScreen';
import AddCategoriesScreen from '../screens/AddCategoriesScreen';

const Drawer = createDrawerNavigator();
const openDrawer = () => {
  navigation.openDrawer();
};
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => <CoustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeScreen">
        {props => <HomeScreen {...props} openDrawer={openDrawer} />}
      </Drawer.Screen>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="ItemsScreen" component={ItemsScreen} />

      <Drawer.Screen
        name="AddCategoriesScreen"
        component={AddCategoriesScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
