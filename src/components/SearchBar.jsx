import {View, Text, Dimensions, Image, TextInput} from 'react-native';
import React from 'react';
import {Images} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View>
      <View
        classname="bg-DEFAULT_WHITE p-5 "
        style={{width: Dimensions.get('screen').width}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text classname="font-POPPINS_BOLD" style={{fontSize: 35}}>
            Search
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            marginTop: 5,
            flexDirection: 'row',
            padding: 2,
            gap: 5,
            elevation: 0.7,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 5,
            marginHorizontal: 10,
          }}>
          <Ionicons name="search" size={24} color="#C2C2CB" />
          <TextInput
            placeholder="Current Location"
            style={{backgroundColor: '#fff', width: '80%'}}
          />
        </View>

        <View
          style={{
            display: 'flex',
            marginTop: 5,
            flexDirection: 'row',
            padding: 2,
            gap: 5,
            elevation: 0.7,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 5,
            marginHorizontal: 10,
            marginTop: 10,
          }}>
          <Ionicons name="search" size={24} color="#C2C2CB" />
          <TextInput
            placeholder="Destination Location"
            style={{backgroundColor: '#fff', width: '80%'}}
          />
        </View>
      </View>
    </View>
  );
}
