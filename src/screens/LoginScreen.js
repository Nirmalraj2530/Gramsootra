import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants/Themes';
import Images from '../constants/Images';
import Feather from 'react-native-vector-icons/Feather';

import axios from 'axios';
import md5 from 'md5';
import DeviceInfo, {getIpAddress, getUniqueId} from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginUrl, SALT} from '../constants/Api';
import LoaderModal from '../constants/LoaderModal';
import {login} from '../constants/StoreData';

const LoginScreen = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setshowpassword] = useState(true);
  const [loading, SetLoading] = useState(false);

  const uniqueID = getUniqueId();
  console.log(uniqueID);
  const ip_address = getIpAddress();
  console.log('>>>', ip_address);

  const numberRegex = /^[6789]\d{9}$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/;

  const onloginApi = async () => {
    if (number === '' || password === '') {
      Alert.alert('Please fill in all fields');
      return;
    }

    if (!numberRegex.test(number)) {
      Alert.alert('Please enter a valid mobile number');
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert('Please enter a valid password');
      return;
    }

    const auth_token = md5(SALT + number + password);
    const data = {
      mobile_number: number,
      password: password,
      auth_token: auth_token,
    };
    SetLoading(true);

    try {
      const response = await axios.post(LoginUrl, data);
      SetLoading(false);

      if (response.data.success) {
        storeData(number);
        Alert.alert('Success', 'Logged in successfully', [
          {
            text: 'OK',
            onPress: () => {
              navigation.replace('drawerNavigation');
            },
          },
        ]);
      } else {
        Alert.alert(response.data.message);
      }
    } catch (error) {
      console.log('Error', error);
      SetLoading(false);
      Alert.alert('Error', 'Failed to log in');
    }
  };

  const storeData = async value => {
    console.log('>>>>>>' + value);
    try {
      await AsyncStorage.setItem(login, value);
    } catch (error) {
      console.log(error);
    }
  };

  const Signupnavigate = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoaderModal loading={loading} />
      <View style={{marginTop: 100}}>
        <Image source={Images.SplashScreenLogo} style={styles.gramLogo} />
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{color: COLORS.black1, fontSize: 25, fontWeight: 'bold'}}>
          Hi, Wecome Back! 👋
        </Text>
        <Text>Hello again, you’ve been missed!</Text>
      </View>
      <View style={{marginTop: 70}}>
        <Text style={{color: '#00004D', fontWeight: '600'}}>
          Mobile Number <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          placeholder="Please Enter Your Mobile Number"
          value={number}
          keyboardType={'numeric'}
          maxLength={10}
          onChangeText={value => {
            setNumber(value);
          }}
          style={styles.text_input}
        />
      </View>
      <View style={{paddingVertical: 20}}>
        <Text style={{color: '#00004D', fontWeight: '600'}}>
          Password <Text style={{color: 'red'}}>*</Text>
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder="Enter your Password"
            secureTextEntry={showpassword}
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
            style={styles.text_inputpassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setshowpassword(prev => !prev)}>
            <Feather
              name={showpassword ? 'eye-off' : 'eye'}
              size={25}
              color="#292739"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={{color: 'red', textAlign: 'right'}}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginbutton}
        onPress={() => {
          onloginApi();
        }}>
        <Text style={{color: COLORS.white, fontSize: 17}}>Login</Text>
      </TouchableOpacity>

      <View style={styles.Registertext}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            Signupnavigate();
          }}>
          <Text style={{color: COLORS.blue}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  gramLogo: {
    height: 80,
    width: 80,
  },
  text_input: {
    borderWidth: 0.5,
    borderColor: '#C6C6C6',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  loginbutton: {
    marginTop: 40,
    backgroundColor: COLORS.blue,
    height: 50,

    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Registertext: {
    marginTop: 100,
    alignSelf: 'center',

    flexDirection: 'row',
  },
  text_inputpassword: {
    borderWidth: 0.5,
    borderColor: '#C6C6C6',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
  },
  eyeIcon: {
    top: 22,
    right: 40,
    height: 30,
    width: 30,
  },
});
