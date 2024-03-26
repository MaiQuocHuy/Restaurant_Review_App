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
import React, {useState} from 'react';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CATEGORIES, Images} from '../constants';
import CategoryMenuItem from '../components/CategoryMenuItem';
import RestaurantCard from '../components/RestaurantCard';
import RestaurantMediumCard from '../components/RestaurantMediumCard';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState();
  const [activeSortItem, setActiveSortItem] = useState('recent');
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ]);

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
      <View className=" justify-evenly mx-6">
        <View className="flex-row items-center mt-10">
          <Ionicons name="location-outline" size={20} color="#fff" />
          <Text className="text-DEFAULT_WHITE ml-2 text-sm font-POPPINS_MEDIUM">
            Current Location
          </Text>
          <Text className="text-DEFAULT_YELLOW ml-2 text-lg font-POPPINS_MEDIUM">
            HOME
          </Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#FBA83C" />
        </View>
        <View className="absolute right-1 top-0 rounded-full w-26 h-26 items-center justify-center mt-7">
          <Image
            className="w-10 h-10 rounded-full"
            source={require('../assets/images/user_avatar.jpg')}
          />
        </View>
        <View className="flex-row justify-evenly mt-5">
          {CATEGORIES.map(({name, logo}) => (
            <CategoryMenuItem
              key={name}
              name={name}
              logo={logo}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </View>
      </View>
      <ScrollView className="p-2 -z-5 mt-5 ">
        <View className="flex-1">
          <View className="mt-7">
            <View className="flex-row items-center justify-between mx-5 mb-1">
              <Text className="text-DEFAULT_BLACK text-lg font-POPPINS_MEDIUM">
                Top Rated
              </Text>
              <Text className="text-DEFAULT_YELLOW text-sm font-POPPINS_MEDIUM">
                See All
              </Text>
            </View>
            <FlatList
              data={restaurants}
              keyExtractor={item => item?.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={() => <Separator width={20} />}
              ListFooterComponent={() => <Separator width={20} />}
              ItemSeparatorComponent={() => <Separator width={10} />}
              renderItem={({item}) => <RestaurantCard />}
            />
          </View>
          <View className="flex-row justify-evenly items-center mt-2 shadow-sm px-6">
            <TouchableOpacity
              className={`flex-1 ease-linear justify-center items-center border-b ${
                activeSortItem === 'recent'
                  ? 'border-b-DEFAULT_YELLOW'
                  : 'border-b-SECONDARY_WHITE'
              }`}
              activeOpacity={0.8}
              onPress={() => setActiveSortItem('recent')}>
              <Text className="text-DEFAULT_BLACK text-sm font-POPPINS_SEMI_BOLD">
                Recent
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 ease-linear justify-center items-center border-b ${
                activeSortItem === 'favorite'
                  ? 'border-b-DEFAULT_YELLOW'
                  : 'border-b-SECONDARY_WHITE'
              }`}
              activeOpacity={0.8}
              onPress={() => setActiveSortItem('favorite')}>
              <Text className="text-DEFAULT_BLACK text-sm font-POPPINS_SEMI_BOLD">
                Favorite
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 ease-linear justify-center items-center border-b ${
                activeSortItem === 'rating'
                  ? 'border-b-DEFAULT_YELLOW'
                  : 'border-b-SECONDARY_WHITE'
              }`}
              activeOpacity={0.8}
              onPress={() => setActiveSortItem('rating')}>
              <Text className="text-DEFAULT_BLACK text-sm font-POPPINS_SEMI_BOLD">
                Rating
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 ease-linear justify-center items-center border-b ${
                activeSortItem === 'popular'
                  ? 'border-b-DEFAULT_YELLOW'
                  : 'border-b-SECONDARY_WHITE'
              }`}
              activeOpacity={0.8}
              onPress={() => setActiveSortItem('popular')}>
              <Text className="text-DEFAULT_BLACK text-sm font-POPPINS_SEMI_BOLD">
                Popular
              </Text>
            </TouchableOpacity>
          </View>

          <RestaurantMediumCard />
          <RestaurantMediumCard />
          <RestaurantMediumCard />
          <RestaurantMediumCard />
          <RestaurantMediumCard />

          <Separator height={200} />
        </View>
      </ScrollView>
    </View>
  );
}
