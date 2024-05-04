import {View, Text, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const RestaurantItemSearch = ({item}) => {
  //   console.log('Item', item);
  return (
    <View className="w-36 bg-DEFAULT_WHITE rounded-lg p-2 m-1 shadow-sm">
      <Image
        source={{
          uri: item.image.url,
        }}
        className="w-32 h-20 rounded-lg"
      />
      <Text numberOfLines={2} className="font-POPPINS_BOLD text-lg mt-1">
        {item.name}
      </Text>
      <Text
        numberOfLines={2}
        className="font-POPPINS_REGULAR text-sm mt-1 text-DEFAULT_GREY">
        {item.address}
      </Text>
      <View className="flex-row items-center gap-1 mt-1 -mb-1">
        <AntDesign name="star" size={20} color="#FBA83C" />
        <Text>4</Text>
      </View>
    </View>
  );
};

export default RestaurantItemSearch;