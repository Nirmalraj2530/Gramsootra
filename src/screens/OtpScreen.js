import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {COLORS} from '../constants/Themes';
import axios from 'axios';
import md5 from 'md5';
import {SALT, VerifyOtp} from '../constants/Api';
import LoaderModal from '../constants/LoaderModal';

import {useRoute} from '@react-navigation/native';

const OtpScreen = ({navigation}) => {
  const route = useRoute();
  const user_id = route.params.userId;
  console.log('userid>>', user_id);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);

  const refs = useRef([]);

  const handleChangeText = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value.length === 1 && index < refs.current.length - 1) {
      refs.current[index + 1].focus();
    }
  };

  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join('');

    if (enteredOtp === '') {
      Alert.alert('Please enter a valid OTP');
      return;
    }

    const auth_token = md5(SALT + enteredOtp);
    const data = {
      user_id: user_id,
      otp: enteredOtp,
      auth_token: auth_token,
    };
    console.log(data);
    setLoading(true);

    try {
      const response = await axios.post(VerifyOtp, data);
      console.log(response.data);
      if (response.data.success) {
        Alert.alert('Success', 'OTP verified successfully', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('LoginScreen');
            },
          },
        ]);
      } else {
        Alert.alert('Incorrect OTP', 'Please enter a valid OTP');
      }
    } catch (error) {
      console.log('Error', error);
      Alert.alert('Error', 'Failed to verify OTP');
    }

    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoaderModal loading={loading} />

      <View style={styles.Textcontainer}>
        <Text style={{fontSize: 30, color: COLORS.black1, fontWeight: '600'}}>
          OTP Verification
        </Text>
        <Text style={{fontSize: 13}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi, mi,
          ornare aliquet.
        </Text>
      </View>
      <View style={styles.otpContainer}>
        <TextInput
          key={0}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={otp[0]}
          onChangeText={text => handleChangeText(0, text)}
          ref={ref => (refs.current[0] = ref)}
          autoFocus={true}
        />
        <TextInput
          key={1}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={otp[1]}
          onChangeText={text => handleChangeText(1, text)}
          ref={ref => (refs.current[1] = ref)}
        />
        <TextInput
          key={2}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={otp[2]}
          onChangeText={text => handleChangeText(2, text)}
          ref={ref => (refs.current[2] = ref)}
        />
        <TextInput
          key={3}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={otp[3]}
          onChangeText={text => handleChangeText(3, text)}
          ref={ref => (refs.current[3] = ref)}
        />
      </View>
      <View>
        <Text style={{color: 'red', textAlign: 'right', paddingVertical: 10}}>
          Resend OTP
        </Text>
      </View>
      <TouchableOpacity style={styles.loginbutton} onPress={handleVerifyOtp}>
        <Text style={{color: COLORS.white, fontSize: 17}}>Verify OTP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OtpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  Textcontainer: {
    marginTop: 80,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 150,
  },
  otpInput: {
    borderBottomWidth: 0.5,
    width: '20%',
    textAlign: 'center',
    fontSize: 20,
  },
  loginbutton: {
    marginTop: 150,
    backgroundColor: COLORS.blue,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
