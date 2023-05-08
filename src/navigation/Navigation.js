import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GramsootraCarousel from '../screens/OnboardingScreen';
import Splashscreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

import OtpScreen from '../screens/OtpScreen';
import DrawerNavigation from './DrawerNavigation';
import OnboardingScreen from '../screens/OnboardingScreen';
import CoustomDrawer from '../constants/CoustomDrawer';
import ProfileScreen from '../screens/ProfileScreen';
import CustomDropDown from '../constants/CustomDropDown';
import ItemsScreen from '../screens/ItemsScreen';
import SkillYarnScreen from '../screens/SkillYarnScreen';
import AddCategoriesScreen from '../screens/AddCategoriesScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splashscreen">
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="drawerNavigation" component={DrawerNavigation} />
     

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
