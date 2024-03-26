import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function RestaurantCard() {
  return (
    <TouchableOpacity
      className="flex-1 justify-center bg-DEFAULT_WHITE rounded-xl shadow-lg mb-5"
      activeOpacity={0.8}>
      <Ionicons
        name="bookmark"
        color="#FBA83C"
        size={24}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 10,
        }}
      />
      <Image
        source={{
          uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
        }}
        style={{
          width: 1920 * 0.15,
          height: 1080 * 0.15,
          borderRadius: 10,
          margin: 5,
        }}
      />
      <Text className="ml-[8px] text-sm font-POPPINS_SEMI_BOLD text-DEFAULT_BLACK">
        Noddles
      </Text>
      <Text className="ml-2 text-sm font-POPPINS_MEDIUM text-DEFAULT_GREY mb-1">
        Burger Denh Food
      </Text>
      <View className="flex-row items-center mx-2 mb-2 justify-between">
        <View className="flex-row items-center">
          <FontAwesome name="star" size={14} color="#FBA83C" />
          <Text className="ml-[5px] text-sm font-POPPINS_BOLD text-DEFAULT_BLACK">
            4
          </Text>
          <Text className="text-sm font-POPPINS_MEDIUM text-DEFAULT_BLACK">
            ({10})
          </Text>
        </View>
        <View className="flex-row items-center">
          <View className="flex-row items-center px-2 py-1 bg-LIGHT_YELLOW rounded-xl mx-1">
            <Ionicons name="location-outline" color="#FBA83C" size={15} />
            <Text className="text-sm pl-1 font-POPPINS_BOLD text-DEFAULT_YELLOW">
              200m
            </Text>
          </View>
          <View className="flex-row items-center px-2 py-1 bg-LIGHT_YELLOW rounded-xl mx-1">
            <Ionicons name="timer-outline" color="#FBA83C" size={15} />
            <Text className="text-sm pl-1 font-POPPINS_BOLD text-DEFAULT_YELLOW">
              20
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
