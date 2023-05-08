import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants/Themes';
import Images from '../constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Dropdown} from 'react-native-element-dropdown';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import md5 from 'md5';
import { PincodeUrl, SALT } from '../constants/Api';



const data = [{label: 'India', value: '1'}];

const ProfileScreen = ({navigation}) => {
  const [dropValue, setDropValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [username, setUsername] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
 

  const [image, setImage] = useState();

  const onPress = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
        Alert.alert('camera Permission Denied');
      }
    } else {
      console.log('nothing');
    }
  };
  const options = {
    title: 'pink an image',
    storageOption: {
      path: 'images',
      skipBackup: true,
    },
  };
  const onCamera = () => {
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else {
        const source = {uri: response.uri};
        setImage(response.assets[0].uri);
        console.log(response.assets[0].uri);
      }
    });
  };

  const onLaunchGallery = () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('user canceled image picker');
      } else if (response.error) {
        console.log('image picker is Error:', response.error);
      } else {
        const source = {uri: response.uri};
        setImage(response.assets[0].uri);
      }
    });
  };

  const handlePincodeChange = async value => {
    setPincode(value);
    if (value.length === 6) {
      await fetchCityList(value);
    } else {
      setState('');
      setDistrict('');
      setCityList([]);
      setSelectedCity(null);
    }
  };

  const handleStateChange = value => {
    setState(value);
  };

  const handleDistrictChange = value => {
    setDistrict(value);
  };

  const fetchCityList = async pincode => {
    try {
      const authToken = md5(SALT + pincode);
      const response = await axios.post(PincodeUrl, {
        auth_token: authToken,
        postal_code: pincode,
      });
      console.log(response.data);
      if (response.data.success) {
        const {
          parameters: {district},
          parameters: {state},
          parameters: {city},
        } = response.data;

        setState(state);
        setDistrict(district);
        setCityList(city.map(({city}) => ({label: city, value: city})));
        setSelectedCity(city[0].city);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const handleCitySelect = item => {
    setSelectedCity(item.value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity  onPress={()=>{navigation.goBack()}}>
              <AntDesign name="arrowleft" size={25} color={COLORS.black1} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  paddingHorizontal: 10,
                  color: COLORS.black1,
                  fontSize: 16,
                }}>
                Gramsootra
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <Ionicons name="md-notifications-outline" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="shoppingcart" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ProfileImageIconContainer}>
          <TouchableOpacity>
            <TouchableOpacity  onPress={() => {
              onPress();
              Alert.alert('Alert', 'access camera', [
                {
                  text: 'Upload Photo',
                  onPress: () => onLaunchGallery(),
                  style: 'cancel',
                },
                {
                  text: 'Take Photo',
                  onPress: () => onCamera(),
                },
              ]);
            }}>
            <Image style={styles.ProfileImage} source={{uri: image}} />
          </TouchableOpacity></TouchableOpacity>
          <TouchableOpacity style={styles.cameraIconbg}>
            <Entypo
              size={25}
              name="camera"
              color={COLORS.white}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            Username <Text style={{color: 'red'}}>*</Text>
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
            Phone Number <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            placeholder="Please Enter Your Mobile Number"
            style={styles.text_input}
            maxLength={10}
            value={number}
            keyboardType={'numeric'}
            onChangeText={value => setNumber(value)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            Email <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            placeholder="Please Enter Your Email"
            style={styles.text_input}
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            House No <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            placeholder="Please Enter Your Confirm Password"
            style={styles.text_input}
            value={address}
            onChangeText={value => setAddress(value)}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            country <Text style={{color: 'red'}}>*</Text>
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
            placeholder={!isFocus ? 'Select Your Country' : '...'}
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
            Pincode <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
          placeholder="Enter the pincode"
          style={styles.text_input}
          value={pincode}
          onChangeText={handlePincodeChange}
          keyboardType="numeric"
        />

        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            State <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
          placeholder="Enter the state"
          style={styles.text_input}
          value={state}
          onChangeText={handleStateChange}
        />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            District <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
          placeholder="Enter the district"
          style={styles.text_input}
          value={district}
          onChangeText={handleDistrictChange}
        />

        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#00004D', fontWeight: '600'}}>
            City /Village <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={cityList}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Your City' : '...'}
              value={selectedCity}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={handleCitySelect}
            />
        </View>
        <TouchableOpacity style={styles.Submitbutton}>
          <Text style={{color: COLORS.white, fontSize: 17}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  ProfileImage: {
    backgroundColor: '#D8D8D8',
    height: 142,
    width: 142,
    borderRadius: 150,
  },
  cameraIconbg: {
    height: 50,
    backgroundColor: '#080040',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    position: 'absolute',
    top: 90,
    right: 90,
  },
  ProfileImageIconContainer: {
    marginTop: 80,
    width: '100%',
    alignSelf: 'center',

    alignItems: 'center',
  },
  text_input: {
    borderWidth: 0.5,
    borderColor: '#C6C6C6',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  dropdown: {
    height: 50,
    borderColor: '#C6C6C6',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
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
    fontSize: 16,
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
  Submitbutton: {
    marginTop: 40,
    backgroundColor: COLORS.blue,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
