// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import {Dropdown} from 'react-native-element-dropdown';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import axios from 'axios';
// import md5 from 'md5';
// import { PincodeUrl, SALT } from './Api';

// const data = [{label: 'India', value:'1'}];
// const data1 = [{label: 'Tamilnadu', value: '1'}];
// const CustomDropDown = () => {
//   const [dropValue, setDropValue] = useState(null);
//   const [country, setCountry] = useState(null);
//   const [state, setState] = useState(null);
//   const [district, setDistrict] = useState(null);
//   const [city, setCity] = useState(null);
//   const [pincode, setPincode] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);
//   const handleSubmit = async () => {
//   const auth_token = md5(SALT + pincode);
//   const response = await axios.post(PincodeUrl, {
//       auth_token:auth_token,
//       postal_code: pincode,
//     });
//   if (response.data.success) {
//       setState(response.data.parameters.state);
//       setDistrict(response.data.parameters.district);
//       setCity(response.data.parameters.city);
//     }
//   };

//   return (
//     <SafeAreaView>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           Country <Text style={{color: 'red'}}></Text>
//         </Text>
//         <Dropdown
//           style={styles.dropdown}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={data}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your Country' : '...'}
//           value={country}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setCountry(item.value);
//             setIsFocus(false);
//           }}
//         />
//       </View>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           State <Text style={{color: 'red'}}></Text>
//         </Text>
//         <Dropdown
//           style={styles.dropdown}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={stateData}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your State' : '...'}
//           value={state}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setState(item.value);
//             setIsFocus(false);
//           }}
//         />
//       </View>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           District <Text style={{color: 'red'}}>*</Text>
//         </Text>
//         <Dropdown
//           style={styles.dropdown}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={districtData}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your District' : '...'}
//           value={district}
//           onFocus={() => setIsFocus(true)}
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your District' : '...'}
//           value={district}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setDistrict(item.value);
//             setIsFocus(false);
//           }}
//         />
//       </View>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           City <Text style={{color: 'red'}}>*</Text>
//         </Text>
//         <Dropdown
//           style={styles.dropdown}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={cityData}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your City' : '...'}
//           value={city}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setCity(item.value);
//             setIsFocus(false);
//           }}
//         />
//       </View>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           Pincode <Text style={{color: 'red'}}>*</Text>
//         </Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={text => setPincode(text)}
//           value={pincode}
//           keyboardType="numeric"
//           placeholder="Enter Your Pincode"
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//         />
//       </View>
//       <View style={{paddingVertical: 10}}>
//         <Button
//           title="Submit"
//           onPress={handleSubmit}
//           disabled={!country || !state || !district || !city || !pincode}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CustomDropDown;

// const styles = StyleSheet.create({
//   dropdown: {
//     height: 50,
//     borderColor: '#C6C6C6',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     marginTop: 5,
//   },

//   label: {
//     position: 'absolute',
//     backgroundColor: 'white',
//     left: 22,
//     top: 8,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 30,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// });

// import React, {useState} from 'react';
// import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
// import md5 from 'md5';
// import axios from 'axios';
// import {Dropdown} from 'react-native-element-dropdown';
// import {PincodeUrl, SALT} from './Api';
// import {COLORS} from './Themes';
// import {SafeAreaView} from 'react-native-safe-area-context';
// const data1 = [{label: 'Tamilnadu', value: '1'}];

// const data = [{label: 'Tamilnadu', value: '1'}];
// const CustomDropDown = () => {
//   const [pincode, setPincode] = useState('');

//   const [isFocus, setIsFocus] = useState(false);
//   const [dropValue, setDropValue] = useState(null);
//   const fetchData = async () => {
//     try {
//       if (!pincode || pincode.length !== 6) {
//         console.log(pincode);
//         alert('Please enter a valid 6-digit pincode.');
//         return;
//       }

//       const auth_token = md5(SALT + pincode);
//       console.log(auth_token);
//       const datas = {
//         auth_token: auth_token,
//         postal_code: pincode,
//       };
//       const response = await axios.post(PincodeUrl, datas);
//       console.log(response.data);
//       if (response.data.success) {
//         const data = response.data.parameters;
//         const countryName = data.country;
//         const stateName = data.state;

//       }
//     } catch (error) {
//       console.log('Error:', error.message);
//       alert('Failed to fetch data. Please try again later.');
//     }
//   };

//   return (
//     <SafeAreaView>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           country <Text style={{color: 'red'}}>*</Text>
//         </Text>
//         <Dropdown
//           style={styles.dropdown}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={data1}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your Country' : '...'}
//           value={dropValue}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setDropValue(item.value);
//             setIsFocus(false);
//           }}
//         />
//       </View>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           State <Text style={{color: 'red'}}>*</Text>
//         </Text>
//         <Dropdown
//           style={styles.dropdown}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={data1}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your Country' : '...'}
//           value={dropValue}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setDropValue(item.value);
//             setIsFocus(false);
//           }}
//         />
//       </View>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           District <Text style={{color: 'red'}}>*</Text>
//         </Text>
//         <Dropdown
//           style={styles.dropdown}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={data}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your Country' : '...'}
//           value={dropValue}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setDropValue(item.value);
//             setIsFocus(false);
//           }}
//         />
//       </View>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           City / Village <Text style={{color: 'red'}}>*</Text>
//         </Text>
//         <Dropdown
//           style={styles.dropdown}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={data}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your Country' : '...'}
//           value={dropValue}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setDropValue(item.value);
//             setIsFocus(false);
//           }}
//         />
//       </View>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           Pincode <Text style={{color: 'red'}}>*</Text>
//         </Text>
//         <Dropdown
//           style={styles.dropdown}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={data}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your Country' : '...'}
//           value={dropValue}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setDropValue(item.value);
//             setIsFocus(false);
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CustomDropDown;

// const styles = StyleSheet.create({
//   dropdown: {
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//   },
//   dropdown: {
//     height: 50,
//     borderColor: '#C6C6C6',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     marginTop: 5,
//   },

//   label: {
//     position: 'absolute',
//     backgroundColor: 'white',
//     left: 22,
//     top: 8,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 30,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
//   Submitbutton: {
//     marginTop: 40,
//     backgroundColor: COLORS.blue,
//     height: 50,
//     borderRadius: 4,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import md5 from 'md5';
// import axios from 'axios';
// import {Dropdown} from 'react-native-element-dropdown';
// import {PincodeUrl, SALT} from './Api';
// import {COLORS} from './Themes';
// import {SafeAreaView} from 'react-native-safe-area-context';

// const CustomDropDown = () => {
//   const [pincode, setPincode] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isFocus, setIsFocus] = useState(false);
//   const [stateList, setStateList] = useState([]);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedDistrict, setSelectedDistrict] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);

//   const fetchData = async () => {
//     try {
//       if (!pincode || pincode.length !== 6) {
//         alert('Please enter a valid 6-digit pincode.');
//         return;
//       }

//       setIsLoading(true);

//       const auth_token = md5(SALT + pincode);
//       const datas = {
//         auth_token: auth_token,
//         postal_code: pincode,
//       };
//       const response = await axios.post(PincodeUrl, datas);

//       if (response.data.success) {
//         const data = response.data.parameters;
//         const state = data.state;
//         const districtList = data.district.map(item => ({
//           label: item.district,
//           value: item.district,
//         }));
//         const cityList = data.city.map(item => ({
//           label: item.city,
//           value: item.city,
//         }));

//         setStateList(districtList);
//         setSelectedState(state);
//         setSelectedDistrict(null);
//         setSelectedCity(null);
//       } else {
//         alert('Invalid Pincode');
//       }
//     } catch (error) {
//       console.log('Error:', error.message);
//       alert('Failed to fetch data. Please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (selectedState) {
//       fetchData();
//     }
//   }, [selectedState]);

//   return (
//     <SafeAreaView>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>
//           Pincode <Text style={{color: 'red'}}>*</Text>
//         </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Pincode"
//           value={pincode}
//           keyboardType="numeric"
//           onChangeText={text => setPincode(text)}
//         />
//       </View>
//       <View style={{paddingVertical: 10}}>
//         <Text style={{color: '#00004D', fontWeight: '600'}}>State</Text>
//         <Dropdown
//           style={styles.dropdown}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={stateList}
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select Your State' : '...'}
//           value={selectedState}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setSelectedState(item.value);
//             setSelectedDistrict(null);
//             setSelectedCity(null);
//           }}
//         />
//       </View>
//       {isLoading ? (
//         <ActivityIndicator size="large" color={COLORS.primary} />
//       )

// : (
// <>
// {selectedState && (
// <>
// <View style={{paddingVertical: 10}}>
// <Text style={{color: '#00004D', fontWeight: '600'}}>
// District
// </Text>
// <Dropdown
// style={styles.dropdown}
// placeholderStyle={styles.placeholderStyle}
// selectedTextStyle={styles.selectedTextStyle}
// inputSearchStyle={styles.inputSearchStyle}
// iconStyle={styles.iconStyle}
// data={stateList}
// maxHeight={300}
// labelField="label"
// valueField="value"
// placeholder={!isFocus ? 'Select Your District' : '...'}
// value={selectedDistrict}
// onFocus={() => setIsFocus(true)}
// onBlur={() => setIsFocus(false)}
// onChange={item => {
// setSelectedDistrict(item.value);
// setSelectedCity(null);
// }}
// />
// </View>
// <View style={{paddingVertical: 10}}>
// <Text style={{color: '#00004D', fontWeight: '600'}}>City</Text>
// <Dropdown
// style={styles.dropdown}
// placeholderStyle={styles.placeholderStyle}
// selectedTextStyle={styles.selectedTextStyle}
// inputSearchStyle={styles.inputSearchStyle}
// iconStyle={styles.iconStyle}
// data={cityList}
// maxHeight={300}
// labelField="label"
// valueField="value"
// placeholder={!isFocus ? 'Select Your City' : '...'}
// value={selectedCity}
// onFocus={() => setIsFocus(true)}
// onBlur={() => setIsFocus(false)}
// onChange={item => setSelectedCity(item.value)}
// />
// </View>
// </>
// )}
// <View style={{paddingVertical: 10}}>
// <Button
// title="Submit"
// disabled={!selectedCity}
// onPress={() => alert('Form submitted successfully!')}
// />
// </View>
// </>
// )}
// </SafeAreaView>
// );
// };

// const styles = StyleSheet.create({
// input: {
// height: 40,
// marginVertical: 12,
// borderWidth: 1,
// padding: 10,
// borderColor: COLORS.gray,
// borderRadius: 5,
// },
// dropdown: {
// borderWidth: 1,
// borderColor: COLORS.gray,
// borderRadius: 5,
// },
// placeholderStyle: {
// color: COLORS.gray,
// fontWeight: '400',
// },
// selectedTextStyle: {
// color: COLORS.primary,
// fontWeight: '600',
// },
// inputSearchStyle: {
// borderBottomWidth: 1,
// borderBottomColor: COLORS.gray,
// borderRadius: 5,
// },
// iconStyle: {
// tintColor: COLORS.primary,
// },
// });

// export default CustomDropDown;

import {Dropdown} from 'react-native-element-dropdown';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import axios from 'axios';
import md5 from 'md5';
import {PincodeUrl, SALT} from './Api';
import {COLORS} from './Themes';

const CustomDropDown = () => {
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Enter the pincode"
          style={styles.textInput}
          value={pincode}
          onChangeText={handlePincodeChange}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Enter the state"
          style={styles.textInput}
          value={state}
          onChangeText={handleStateChange}
        />

        <TextInput
          placeholder="Enter the district"
          style={styles.textInput}
          value={district}
          onChangeText={handleDistrictChange}
        />

          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownLabel}>City</Text>
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
          <TouchableOpacity style={styles.Submitbutton} onPress={()=>{handlePincodeChange()}}>
            <Text style={{color: COLORS.white, fontSize: 17}}>Submit</Text>
          </TouchableOpacity>
      
      </View>
    </SafeAreaView>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    margin: 10,
    fontSize: 16,
  },
  placeDetailsContainer: {
    margin: 10,
  },
  placeDetailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdownContainer: {
    margin: 10,
  },
  dropdownLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginTop: 5,
  },
  placeholderStyle: {
    color: '#999',
    fontSize: 16,
  },
  selectedTextStyle: {
    color: '#000',
    fontSize: 16,
  },
  inputSearchStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
  },
  iconStyle: {
    width: 0,
    height: 0,
  },
  submitButton: {
    backgroundColor: '#2196f3',
    borderRadius: 4,
    padding: 10,
    margin: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
