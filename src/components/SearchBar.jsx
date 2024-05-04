import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Images} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dialog from 'react-native-dialog';
import {useState} from 'react';

export default function SearchBar({
  visible,
  setVisible,
  nearByPlace,
  setNearByPlace,
}) {
  const showDialog = () => {
    setVisible(true);
    setNearByPlace(prev => !prev);
  };

  const handleCancelModal = () => {
    setVisible(false);
  };

  return (
    <View>
      <LinearGradient
        colors={['#fff', 'transparent']}
        style={{width: Dimensions.get('screen').width}}>
        <View classname="bg-DEFAULT_WHITE p-5">
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
              alignItems: 'center',
            }}>
            <Text classname="font-POPPINS_BOLD" style={{fontSize: 35}}>
              Search
            </Text>
            <TouchableOpacity onPress={() => showDialog()}>
              <MaterialCommunityIcons
                name="google-nearby"
                size={34}
                color="#000"
              />
            </TouchableOpacity>
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
              marginHorizontal: 20,

              paddingHorizontal: 10,
            }}>
            <Ionicons name="search" size={24} color="#C2C2CB" />
            <TextInput
              placeholder="Current Location"
              style={{backgroundColor: '#fff', width: '80%'}}
            />
          </View>
        </View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Notification</Dialog.Title>
          <Dialog.Description>
            You click get the restaurant near by place
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={() => handleCancelModal()} />
        </Dialog.Container>
      </LinearGradient>
    </View>
  );
}
