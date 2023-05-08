import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants/Themes';
import Images from '../constants/Images';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import md5 from 'md5';
import {RegisterUrl, SALT, SendOtpUrl} from '../constants/Api';
import LoaderModal from '../constants/LoaderModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [{label: 'Individual', value: '1'}];

const RegisterScreen = ({navigation}) => {
  const [dropValue, setDropValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [loading, SetLoading] = useState(false);

  const [username, setUsername] = useState();

  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();

  const nameRegex = /^[a-zA-Z\s]*$/; // allows only alphabets and spaces
  const numberRegex = /^[6-9]\d{9}$/; // allows only numbers
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/; // requires at least one digit, lowercase and uppercase letter, and special character. Password length should be at least 8 characters.

  const registerUser = async () => {
    console.log('data is ', username, number, password, dropValue);

    if (username === '' || number === '' || password == '' || dropValue == '') {
      Alert.alert('please fill all fields');
      return;
    }

    if (!nameRegex.test(username)) {
      Alert.alert('Name should contain only alphabets and spaces');
      return;
    }

    if (!numberRegex.test(number)) {
      Alert.alert('Invalid phone number');
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert('Password should be at least 8 characters ');
      return;
    }

    if (password !== confirmPass) {
      Alert.alert('Passwords do not match');
      return;
    }

    const auth_token = md5(SALT + username + number + password);
    console.log(auth_token);
    const data = {
      address: '',
      auth_token: auth_token,
      confirm_password: confirmPass,
      email_id: '',
      mobile_number: number,
      name: username,
      password: password,
      qr_code: '6864342434',
      user_address: {},
      user_type: 'INDIVIDUAL',
    };
    console.log('fixed data1 is', data);
    SetLoading(true);

    try {
      const response = await axios.post(RegisterUrl, data);
      SetLoading(false);

      if (response.data.success) {
        Alert.alert('Success', 'Registered successfully', [
          {
            text: 'OK',
            onPress: () => {
              sendOtp();
            },
          },
        ]);
      } else {
        Alert.alert(response.data.message);
        console.log('message', response.data);
      }
    } catch (error) {
      console.log('>>>ERrrrrrr', error);
      SetLoading(false);
    }
  };

  const sendOtp = async () => {
    if (number === '') {
      Alert.alert('Please enter a valid mobile number');
      return;
    }
    const AuthToken = md5(SALT + number);
    const data = {
      auth_token: AuthToken,
      mobile_number: number,
    };
    console.log('fixed data1 is', data);
    SetLoading(true);

    try {
      const response = await axios.post(SendOtpUrl, data);
      console.log(response.data);
      SetLoading(false);

      if (response.data.success) {
        const userId = response.data.parameters.user_id;
        await AsyncStorage.setItem('userId', userId);
        console.log('>>>userId',userId)
        Alert.alert('Success', 'OTP successfully sent', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('OtpScreen', {
                userId:userId,
              });
            },
          },
        ]);
      } else {
        Alert.alert(response.data.message);
        console.log('message', response.data);
      }
    } catch (error) {
      console.log('>>>ERrrrrrr', error);
      SetLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoaderModal loading={loading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 100}}>
          <Image source={Images.SplashScreenLogo} style={styles.gramLogo} />
        </View>
        <View style={{marginTop: 15}}>
          <Text
            style={{color: COLORS.black1, fontSize: 25, fontWeight: 'bold'}}>
            Create an account 👋
          </Text>
          <Text>Connect with your friends today!</Text>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            Mobile Number <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            placeholder="Please Enter Your Mobile Number"
            maxLength={10}
            style={styles.text_input}
            value={number}
            keyboardType={'numeric'}
            onChangeText={value => setNumber(value)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            Name <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            placeholder="Please Enter Your Name"
            style={styles.text_input}
            value={username}
            onChangeText={value => setUsername(value)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            Select User <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select User' : '...'}
            value={dropValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setDropValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            Password <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            placeholder="Please Enter Your Password"
            style={styles.text_input}
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            Confirm Password <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            placeholder="Please Enter Your Confirm Password"
            style={styles.text_input}
            value={confirmPass}
            onChangeText={value => setConfirmPass(value)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginbutton}
          onPress={() => {
            registerUser();
          }}>
          <Text style={{color: COLORS.white, fontSize: 17}}>
            Create Account
          </Text>
        </TouchableOpacity>

        <View style={styles.Registertext}>
          <Text>Already have an account ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text style={{color: COLORS.blue}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
    paddingHorizontal: 10,
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

  dropdown: {
    height: 50,
    borderColor: '#C6C6C6',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 15,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 30,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
