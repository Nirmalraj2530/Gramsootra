import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Images from './Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from './StoreData';

const CoustomDrawer = ({navigation}) => {
  const onsubmit = async () => {
    await AsyncStorage.removeItem(login);
    navigation.replace('OnboardingScreen');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 0.1,
          backgroundColor: '#0070C0',
          borderTopLeftRadius: 20,
          padding: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}>
          <Image source={Images.ProfileImage} style={{height: 70, width: 70}} />
        </TouchableOpacity>

        <Text style={{fontSize: 20, color: 'white'}}>Scarlet Witch</Text>
      </View>
      <View
        style={{
          flex: 0.8,
          backgroundColor: 'white',
          paddingHorizontal: 20,
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', paddingVertical: 10}}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <View>
            <Ionicons name="md-home-outline" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', paddingVertical: 10}}
          onPress={() => {
            navigation.navigate('AddCategoriesScreen');
          }}>
          <View>
            <Ionicons name="md-information-circle-outline" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>
              Buy from Market
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}}>
          <View>
            <Ionicons name="md-person-circle-outline" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>My Sellers</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}}>
          <View>
            <Ionicons name="md-information-circle-outline" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>My Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}}>
          <View>
            <Ionicons name="md-calendar-outline" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>
              Sell in Market
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}}>
          <View>
            <AntDesign name="message1" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>
              My Sale Orders
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}}>
          <View>
            <Ionicons name="md-wallet-outline" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>
              Process Order
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}}>
          <View>
            <Ionicons name="book-outline" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>
              Process receiver
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}}>
          <View>
            <AntDesign name="shoppingcart" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>
              Warehouse stock
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}}>
          <View>
            <AntDesign name="tagso" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>Market Stock</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}}>
          <View>
            <AntDesign name="tagso" size={25} />
          </View>
          <View>
            <Text style={{marginLeft: 10, color: '#00004D'}}>
              Processing Stock
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.1}}>
        <TouchableOpacity
          onPress={() => {
            onsubmit();
          }}>
          <Text style={{textAlign: 'right',marginRight:30}}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CoustomDrawer;

const styles = StyleSheet.create({});
