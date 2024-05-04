import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../constants';
import {Display} from '../utils';
import {getDataWithExpiration} from '../helpers/asyncStorage';
import axios from 'axios';

const SplashScreen = ({navigation}) => {
  const checkRoleWithToken = async idToken => {
    try {
      const {data} = await axios.post(
        'http://10.0.2.2:8080/api/login-with-token',
        {
          id: idToken,
        },
      );

      if (data.role === 'ownrestaurant') {
        navigation.navigate('Ownres');
      } else {
        navigation.navigate('HomeTabs');
      }
    } catch (error) {
      setTimeout(() => {
        navigation.replace('Signin');
      }, 2000);
    }
  };

  useEffect(() => {
    getDataWithExpiration('token')
      .then(token => {
        if (token) {
          console.log('Token: ', token);
          checkRoleWithToken(token);
        } else {
          setTimeout(() => {
            navigation.replace('Signin');
          }, 2000);
        }
      })
      .catch(error => {
        setTimeout(() => {
          navigation.replace('Signin');
        }, 2000);
      });
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-[#0A8791]">
      <StatusBar
        barStyle="light-content"
        className="bg-[#0A8791]"
        translucent
      />
      <Image source={Images.PLATE} resizeMethod="resize" style={styles.image} />
      <Text className="text-DEFAULT_WHITE text-3xl font-POPPINS_LIGHT">
        Review Restaurant App
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Display.setHeight(30),
    height: Display.setWidth(60),
  },
});

export default SplashScreen;
