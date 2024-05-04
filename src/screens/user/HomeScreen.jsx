import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Separator} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CategoryMenuItem from '../../components/CategoryMenuItem';
import RestaurantCard from '../../components/RestaurantCard';
import RestaurantMediumCard from '../../components/RestaurantMediumCard';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';

export default function HomeScreen({navigation}) {
  // const [activeCategory, setActiveCategory] = useState();
  const [activeSortItem, setActiveSortItem] = useState('asianrestaurant');
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsType, setRestaurantsType] = useState([]);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  const isFocused = useIsFocused();

  const fetchRestaurnats = async () => {
    const {data} = await axios.get('http://10.0.2.2:8080/api/restaurant/show');
    if (data.success) {
      setRestaurants(data.restaurants);
      // console.log('Restaurants', data);
    }
  };

  const handleActiveSortItem = async activeItem => {
    console.log(activeItem);
    try {
      const {data} = await axios.get(
        `http://10.0.2.2:8080/api/search/restaurant/type/${activeItem}`,
      );
      console.log('Selected Type', data);
      setRestaurantsType(data.restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfile = async () => {
    const {data} = await axios.get(`http://10.0.2.2:8080/api/me`);
    console.log('Profile', data);
    if (data.success) setUser(data.user);
  };

  useEffect(() => {
    if (isFocused) {
      fetchRestaurnats();
      fetchProfile();
    }
  }, [isFocused]);

  useEffect(() => {
    if (activeSortItem) {
      handleActiveSortItem(activeSortItem);
    }
  }, [activeSortItem]);

  return (
    <View classname="flex-1 bg-SECONDARY_WHITE">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0A8791"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      {/* BackgroundContainer */}
      <View className=" bg-DEFAULT_GREEN h-[2000px] absolute -top-[1770px] w-[2000px] rounded-full self-center z-999" />
      {/* HeaderContainer */}
      <View className="justify-evenly mx-6 pt-10 pb-4">
        <View className="flex-row items-center">
          <Ionicons name="location-outline" size={30} color="#fff" />
          <View className="w-full ml-2">
            <Text className="text-DEFAULT_WHITE text-lg font-POPPINS_MEDIUM">
              Address of you
            </Text>

            <Text
              className="text-DEFAULT_YELLOW w-[60%] text-base font-POPPINS_MEDIUM"
              numberOfLines={1}
              ellipsizeMode="tail">
              {user?.address || 'Add Address'}
            </Text>
          </View>
          {/* <MaterialIcons name="keyboard-arrow-down" size={30} color="#FBA83C" /> */}
        </View>
        <View className="absolute right-1 top-0 rounded-full w-26 h-26 items-center justify-center mt-7">
          <Image
            className="w-14 h-14 rounded-full"
            source={require('../../assets/images/user_avatar.jpg')}
          />
        </View>
      </View>
      <ScrollView className="p-2 -z-5">
        <View className="flex-1">
          <View className="w-full">
            <View className="flex-row items-center justify-between mx-5 mb-1">
              <Text className="text-DEFAULT_BLACK text-lg font-POPPINS_MEDIUM">
                Top Rating Restaurant
              </Text>
            </View>
            <FlatList
              data={restaurants}
              keyExtractor={item => item?._id}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={() => <Separator width={20} />}
              ListFooterComponent={() => <Separator width={20} />}
              ItemSeparatorComponent={() => <Separator width={10} />}
              renderItem={({item}) => (
                <RestaurantCard
                  key={item?._id}
                  {...item}
                  navigate={restaurantId =>
                    navigation.navigate('Restaurant', {restaurantId})
                  }
                />
              )}
            />
          </View>
          <View className="flex-row justify-evenly items-center mt-2 shadow-sm px-4">
            <TouchableOpacity
              className={`flex-1 ease-linear justify-center items-center border-b ${
                activeSortItem === 'asianrestaurant'
                  ? 'border-b-DEFAULT_YELLOW'
                  : 'border-b-SECONDARY_WHITE'
              }`}
              activeOpacity={0.8}
              onPress={() => {
                // handleActiveSortItem('asian');
                setActiveSortItem('asianrestaurant');
              }}>
              <Text className="text-DEFAULT_BLACK text-sm font-POPPINS_SEMI_BOLD">
                Asian
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 ease-linear justify-center items-center border-b ${
                activeSortItem === 'europeanrestaurant'
                  ? 'border-b-DEFAULT_YELLOW'
                  : 'border-b-SECONDARY_WHITE'
              }`}
              activeOpacity={0.8}
              onPress={() => {
                // handleActiveSortItem('european');
                setActiveSortItem('europeanrestaurant');
              }}>
              <Text className="text-DEFAULT_BLACK text-sm font-POPPINS_SEMI_BOLD">
                European
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 ease-linear justify-center items-center border-b ${
                activeSortItem === 'americanrestaurant'
                  ? 'border-b-DEFAULT_YELLOW'
                  : 'border-b-SECONDARY_WHITE'
              }`}
              activeOpacity={0.8}
              onPress={() => {
                // handleActiveSortItem('american');
                setActiveSortItem('americanrestaurant');
              }}>
              <Text className="text-DEFAULT_BLACK text-sm font-POPPINS_SEMI_BOLD">
                American
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 ease-linear justify-center items-center border-b ${
                activeSortItem === 'africanrestaurant'
                  ? 'border-b-DEFAULT_YELLOW'
                  : 'border-b-SECONDARY_WHITE'
              }`}
              activeOpacity={0.8}
              onPress={() => {
                // handleActiveSortItem('african');
                setActiveSortItem('africanrestaurant');
              }}>
              <Text className="text-DEFAULT_BLACK text-sm font-POPPINS_SEMI_BOLD">
                African
              </Text>
            </TouchableOpacity>
          </View>
          {restaurantsType.length > 0 &&
            restaurantsType.map((item, index) => (
              <RestaurantMediumCard
                key={index}
                {...item}
                navigate={restaurantId =>
                  navigation.navigate('Restaurant', {restaurantId})
                }
              />
            ))}

          <Separator height={250} />
        </View>
      </ScrollView>
    </View>
  );
}
