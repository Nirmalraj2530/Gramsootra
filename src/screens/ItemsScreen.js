import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLORS} from '../constants/Themes';
import Images from '../constants/Images';
import {FlatList} from 'react-native-gesture-handler';
import {SALT, View_Products} from '../constants/Api';
import axios from 'axios';
import md5 from 'md5';
import AsyncStorage from '@react-native-async-storage/async-storage';
AsyncStorage;
const renderGridItem = ({item}) => (
  <TouchableOpacity style={{marginTop: 20}}>
    <Image
      source={{ uri: item.stockPhotos[0].image_url }}
      style={{
        height: 100,
        width: 160,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      }}
    />
    <View style={{padding: 10}}>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '500',
          color: COLORS.black1,
          lineHeight: 17,
        }}>
        {item.narration_name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '500',
          color: '#3E3E40',
          lineHeight: 19.92,
        }}>
        {item.price}
      </Text>
      {/* <View style={{flexDirection: 'row'}}>
        <View>
          <EvilIcons name="location" size={15} color={COLORS.blue} />
        </View>
        <View>
          <Text
            style={{
              width: 150,
              fontSize: 12,
              fontWeight: '500',
              color: '#00004D',
            }}>
            {item.location}
          </Text>
        </View>
      </View> */}
    </View>
  </TouchableOpacity>
);

const renderListItem = ({item}) => (
  <View style={{marginTop: 20}}>
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{uri: item.stockPhotos[0].image_url}}
        style={{
          height: 100,
          width: 100,
          borderRadius: 10,
        }}
      />
      <View style={{marginLeft: 10, flex: 1}}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            color: COLORS.black1,
            lineHeight: 17,
          }}>
          {item.narration_name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            color: '#3E3E40',
            lineHeight: 19.92,
          }}>
          {item.price}
        </Text>
        
      </View>
    </View>
  </View>
);

const ItemsScreen = ({navigation}) => {
  const [isGrid, setIsGrid] = useState(true);
  const [userId, setUserId] = useState('');
  const [viewStocks, setViewStocks] = useState([]);

  const viewStocksAPI = async () => {
    try {
      const auth_token = md5(SALT);
      const response = await axios.post(View_Products, {
        user_id: userId,
        search_term: '',
        min_price: '',
        max_price: '',
        category_id: [],
        order_by: '',
        sub_category_id: [],
        auth_token: auth_token,
      });
      const data = response.data.parameters.data;
      // console.log(data); 
      setViewStocks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserId = async () => {
      const userIdValue = await AsyncStorage.getItem('userId');
      setUserId(userIdValue);
      console.log('>>>>>', userIdValue);
    };
    getUserId();
  }, []);

  useEffect(() => {
    viewStocksAPI();
  }, [userId]);

  const nextpage = () => {
    navigation.navigate('SkillYarnScreen');
  };

  const toggleGrid = () => {
    setIsGrid(!isGrid);
  };

  return (
    <SafeAreaView style={styles.container}>
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
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="arrowleft" size={20} color={COLORS.black1} />
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
          <TouchableOpacity>
            <Ionicons name="filter" size={20} color={COLORS.black1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                paddingHorizontal: 10,
                color: COLORS.black1,
                fontSize: 16,
              }}>
              Filters
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              toggleGrid();
            }}>
            {isGrid ? (
              <Ionicons name="grid-outline" size={25} />
            ) : (
              <Ionicons name="list-outline" size={25} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={{fontSize: 16, fontWeight: '400'}}
            placeholder="Search For....."
          />
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Ionicons name="search-outline" size={25} color={COLORS.black1} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            nextpage();
          }}>
          <Text>Silk Yarn</Text>
        </TouchableOpacity>

        <Text>Silk Cocoons</Text>
        <Text>Silk Fabric</Text>
        <Text>Silk Waste</Text>
      </View>
      {isGrid ? (
        <FlatList
          data={viewStocks}
          renderItem={renderGridItem}
          key={'grid'}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      ) : (
        <FlatList
          data={viewStocks}
          renderItem={renderListItem}
          key={'list'}
          numColumns={1}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default ItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
});

// import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
// import React, {useState, useEffect } from 'react';
// import {SALT, View_Products} from '../constants/Api';
// import axios from 'axios';
// import md5 from 'md5';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ItemCard = ({ item }) => {
//   return (
//     <View style={styles.itemCard}>
//       <Image style={styles.itemImage} source={{ uri: item.stockPhotos[0].image_url }} />
//       <View style={styles.itemInfo}>
//         <Text style={styles.itemTitle}>{item.narration_name}</Text>
//         <Text style={styles.itemPrice}>${item.price}</Text>
//       </View>
//     </View>
//   )
// }

// const ItemsScreen = () => {
//   const [userId, setUserId] = useState('');
//   const [viewStocks, setViewStocks] = useState([]);

//   const viewStocksAPI = async () => {
//     try {
//       const auth_token = md5(SALT);
//       const response = await axios.post(View_Products, {
//         user_id: userId,
//         search_term: '',
//         min_price: '',
//         max_price: '',
//         category_id: [],
//         order_by: '',
//         sub_category_id: [],
//         auth_token: auth_token,
//       });
//       const data = response.data.parameters.data;
//       console.log(data);
//       setViewStocks( data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const getUserId = async () => {
//       const userIdValue = await AsyncStorage.getItem('userId');
//       setUserId(userIdValue);
//       console.log('>>>>>', userIdValue);
//     };
//     getUserId();
//   }, []);

//   useEffect(() => {
//     viewStocksAPI();
//   }, [userId]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={viewStocks}
//         renderItem={({ item }) => <ItemCard item={item} />}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   itemCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   itemImage: {
//     width: 80,
//     height: 80,
//     marginRight: 10,
//     borderRadius: 5,
//   },
//   itemInfo: {
//     flex: 1,
//   },
//   itemTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   itemPrice: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

// export default ItemsScreen;

// const styles = StyleSheet.create({});
