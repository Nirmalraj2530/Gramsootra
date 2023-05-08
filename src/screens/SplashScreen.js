import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Images from '../constants/Images';

import {login} from '../constants/StoreData';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Splashscreen = ({navigation}) => {
  const getItem = async () => {
    const Login = await AsyncStorage.getItem(login);
    if (Login) {
      setTimeout(() => {
        navigation.replace('drawerNavigation');
      }, 1000);
    } else {
      setTimeout(() => {
        navigation.replace('OnboardingScreen');
      }, 1000);
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.SplashScreenLogo} style={styles.splashimage} />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  splashimage: {
    height: 200,
    width: 200,
  },
});
