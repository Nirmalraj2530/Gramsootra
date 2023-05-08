import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/Themes';
import Images from '../constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Image
              source={Images.ProfileImage}
              style={{height: 50, width: 50}}
            />
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

        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Ionicons name="md-notifications-outline" size={25} />

          <AntDesign name="shoppingcart" size={25} />
        </TouchableOpacity>
      </View>
      {/* BUY */}

      <View>
        <Text
          style={{
            marginTop: 20,
            color: COLORS.black1,
            fontSize: 24,
            fontWeight: '700',
            lineHeight: 28,
          }}>
          Buy
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
         onPress={() => {
          navigation.navigate('ItemsScreen');
        }}
          style={{
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.14)',
            height: 96,
            width: 94,
            borderRadius: 5,
            paddingVertical: 10,
            marginTop: 25,
          }}>
          <Image
            source={Images.BuyCartimage1}
            style={{
              height: 35,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: '#00004D',
              fontSize: 13,
              paddingHorizontal: 10,
              marginTop: 10,
            }}>
            Buy from Market
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.14)',
            height: 96,
            width: 94,
            borderRadius: 5,
            paddingVertical: 10,
            marginTop: 25,
          }}>
          <Image
            source={Images.BuySellerImage2}
            style={{
              height: 35,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: '#00004D',
              fontSize: 13,
              paddingHorizontal: 10,
              marginTop: 10,
              width: '70%',
            }}>
            My Sellers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.14)',
            height: 96,
            width: 94,
            borderRadius: 5,
            paddingVertical: 10,
            marginTop: 25,
          }}>
          <Image
            source={Images.BuyShopping3}
            style={{
              height: 35,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: '#00004D',
              fontSize: 13,
              paddingHorizontal: 10,
              marginTop: 10,
              width: '70%',
            }}>
            My Orders
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            marginTop: 20,
            color: COLORS.black1,
            fontSize: 24,
            fontWeight: '700',
            lineHeight: 28,
          }}>
          Sell
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '64%',
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.14)',
            height: 96,
            width: 94,
            borderRadius: 5,
            paddingVertical: 10,
            marginRight: 18,
            marginTop: 25,
          }}>
          <Image
            source={Images.SellProfits1}
            style={{
              height: 35,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: '#00004D',
              fontSize: 13,
              paddingHorizontal: 10,
              marginTop: 10,
            }}>
            Sell in Market
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.14)',
            height: 96,
            width: 94,
            borderRadius: 5,
            paddingVertical: 10,
            marginTop: 25,
          }}>
          <Image
            source={Images.SellOrder2}
            style={{
              height: 35,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: '#00004D',
              fontSize: 13,
              paddingHorizontal: 10,
              marginTop: 10,
            }}>
            My Sale Orders
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            marginTop: 20,
            color: COLORS.black1,
            fontSize: 24,
            fontWeight: '700',
            lineHeight: 28,
          }}>
          Process
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '64%',
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.14)',
            height: 96,
            width: 94,
            borderRadius: 5,
            paddingVertical: 10,

            marginTop: 25,
          }}>
          <Image
            source={Images.ProcessOrder1}
            style={{
              height: 35,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: '#00004D',
              fontSize: 13,
              paddingHorizontal: 10,
              marginTop: 10,
            }}>
            Process Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.14)',
            height: 96,
            width: 94,
            borderRadius: 5,
            paddingVertical: 10,
            marginTop: 25,
          }}>
          <Image
            source={Images.ProcessIncome2}
            style={{
              height: 35,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: '#00004D',
              fontSize: 13,
              paddingHorizontal: 10,
              marginTop: 10,
            }}>
            Process receive
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            marginTop: 20,
            color: COLORS.black1,
            fontSize: 24,
            fontWeight: '700',
            lineHeight: 28,
          }}>
          Stock
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.14)',
            height: 96,
            width: 94,
            borderRadius: 5,
            paddingVertical: 10,
            marginTop: 25,
          }}>
          <Image
            source={Images.BuyCartimage1}
            style={{
              height: 35,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: '#00004D',
              fontSize: 13,
              paddingHorizontal: 10,
              marginTop: 10,
            }}>
            Warehouse stock
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.14)',
            height: 96,
            width: 94,
            borderRadius: 5,
            paddingVertical: 10,
            marginTop: 25,
          }}>
          <Image
            source={Images.StockMarketPlace2}
            style={{
              height: 35,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: '#00004D',
              fontSize: 13,
              paddingHorizontal: 10,
              marginTop: 10,
            }}>
            Market Stock
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.14)',
            height: 96,
            width: 94,
            borderRadius: 5,
            paddingVertical: 10,
            marginTop: 25,
          }}>
          <Image
            source={Images.Stockprocess3}
            style={{
              height: 35,
              width: 35,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: '#00004D',
              fontSize: 13,
              paddingHorizontal: 10,
              marginTop: 10,
            }}>
            Buy from Market
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
});
