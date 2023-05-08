import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLORS} from '../constants/Themes';
import Images from '../constants/Images';

const SkillYarnScreen = ({navigation}) => {
  const nextpage = () => {
    navigation.navigate('SkillYarnScreen');
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
          <TouchableOpacity onPress={()=>{
            navigation.goBack('ItemsScreen')
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
          <TouchableOpacity>
            <Image
              source={Images.FilterviewIcon}
              style={{height: 15, width: 25}}
            />
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
          
      <View style={{marginTop: 20,flexDirection:'row'}}>
        <Image
          source={Images.ItemsImage}
          style={{
            height: 100,
            width: 100,
            borderRadius: 10,
          }}
        />
        <View style={{padding:10}}> 
          <Text>Red Tassar Silk Fabric</Text>
          <Text>₹500/m </Text>
          <View style={{flexDirection: 'row'}}>
            <EvilIcons name="location" size={15} color={COLORS.blue} />
            <View>
              <Text style={{width: 150}}>Saraikela Kharsawan, Jharkhand</Text>
            </View>
          </View>
        </View>
      </View>
 
      <View style={{marginTop: 20,flexDirection:'row'}}>
        <Image
          source={Images.ItemsImage}
          style={{
            height: 100,
            width: 100,
            borderRadius: 10,
          }}
        />
        <View style={{padding:10}}> 
          <Text>Red Tassar Silk Fabric</Text>
          <Text>₹500/m </Text>
          <View style={{flexDirection: 'row'}}>
            <EvilIcons name="location" size={15} color={COLORS.blue} />
            <View>
              <Text style={{width: 150}}>Saraikela Kharsawan, Jharkhand</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 20,flexDirection:'row'}}>
        <Image
          source={Images.ItemsImage}
          style={{
            height: 100,
            width: 100,
            borderRadius: 10,
          }}
        />
        <View style={{padding:10}}> 
          <Text>Red Tassar Silk Fabric</Text>
          <Text>₹500/m </Text>
          <View style={{flexDirection: 'row'}}>
            <EvilIcons name="location" size={15} color={COLORS.blue} />
            <View>
              <Text style={{width: 150}}>Saraikela Kharsawan, Jharkhand</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 20,flexDirection:'row'}}>
        <Image
          source={Images.ItemsImage}
          style={{
            height: 100,
            width: 100,
            borderRadius: 10,
          }}
        />
        <View style={{padding:10}}> 
          <Text>Red Tassar Silk Fabric</Text>
          <Text>₹500/m </Text>
          <View style={{flexDirection: 'row'}}>
            <EvilIcons name="location" size={15} color={COLORS.blue} />
            <View>
              <Text style={{width: 150}}>Saraikela Kharsawan, Jharkhand</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 20,flexDirection:'row'}}>
        <Image
          source={Images.ItemsImage}
          style={{
            height: 100,
            width: 100,
            borderRadius: 10,
          }}
        />
        <View style={{padding:10}}> 
          <Text>Red Tassar Silk Fabric</Text>
          <Text>₹500/m </Text>
          <View style={{flexDirection: 'row'}}>
            <EvilIcons name="location" size={15} color={COLORS.blue} />
            <View>
              <Text style={{width: 150}}>Saraikela Kharsawan, Jharkhand</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SkillYarnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
});
