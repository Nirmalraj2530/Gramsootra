import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../constants/Themes';
import MultiSelect from 'react-native-multiple-select';
import {Add_Categories, SALT, View_Categories} from '../constants/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import md5 from 'md5';

const AddCategoriesScreen = () => {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [userId, setUserId] = useState('');
  const [addCategories, setAddCategories] = useState([]);

  const multiSelectRef = useRef();
  const onSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = md5(SALT);
        const response = await axios.post(View_Categories, {
          auth_token: authToken,
        });
        setCategories(response.data.parameters);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const items = categories.map(category => ({
    id: category.id,
    name: category.category_name,
  }));

  const addCategorie = async () => {
    try {
      const auth_token = md5(SALT + userId);
      const response = await axios.post(Add_Categories, {
        auth_token: auth_token,
        categories: selectedItems,
        user_id: userId,
      });
      setAddCategories(response.data.parameters); 
      console.log(selectedItems)
      navigation.navigate('', { selectedItems: selectedItems });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserId = async () => {
      const userIdValue = await AsyncStorage.getItem('userId');
      setUserId(userIdValue);
      console.log('>>>>>', userId);
    };
    getUserId();
  }, [userId]);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 10}}>
      <View style={{marginTop: 40}}>
        <Text
          style={{color: '#00004D', fontWeight: '600', paddingVertical: 10}}>
          Item Category <Text style={{color: 'red'}}>*</Text>
        </Text>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={multiSelectRef}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={text => console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="red"
          tagBorderColor="#CCC"
          tagTextColor="black"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="green"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="#0070C0"
          submitButtonText="Submit"
          styleDropdownMenu={{
            borderWidth: 1,
            borderColor: '#C6C6C6',
            height: 41,
          }}
        />
        {multiSelectRef.current?.getSelectedItemsExt(selectedItems)}
        <View
          style={{
            height: '45%',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={styles.Submitbutton}
            onPress={() => {
              addCategorie();
            }}>
            <Text style={{color: COLORS.white, fontSize: 17}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCategoriesScreen;

const styles = StyleSheet.create({
  Submitbutton: {
    marginTop: 40,
    backgroundColor: COLORS.blue,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
