import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Separator} from '../../components';
import SearchComponent from '../../components/SearchComponent';
import RestaurantMediumCard from '../../components/RestaurantMediumCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
const BookMarkedScreen = ({navigation}) => {
  return (
    <View className="flex-1 bg-SECONDARY_WHITE">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0A8791"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View className="w-full flex-row  pt-5 mx-3">
        <TouchableOpacity
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}>
          <Ionicons name="chevron-back-outline" size={30} color="#000000" />
        </TouchableOpacity>
        <Text className="text-lg w-full ml-28 text-DEFAULT_BLACK font-POPPINS_MEDIUM">
          Edit Profile
        </Text>
      </View>
      <SearchComponent />
      <ScrollView>
        <View className="w-full pb-4">
          <RestaurantMediumCard />
        </View>
        <View className="w-full pb-4">
          <RestaurantMediumCard />
        </View>
        <View className="w-full pb-4">
          <RestaurantMediumCard />
        </View>
        <View className="w-full pb-4">
          <RestaurantMediumCard />
        </View>
        <View className="w-full pb-4">
          <RestaurantMediumCard />
        </View>
        <View className="w-full pb-4">
          <RestaurantMediumCard />
        </View>
        <View className="w-full pb-4">
          <RestaurantMediumCard />
        </View>
        <View className="w-full pb-4">
          <RestaurantMediumCard />
        </View>
        <Separator height={60} />
      </ScrollView>
    </View>
  );
};

export default BookMarkedScreen;
