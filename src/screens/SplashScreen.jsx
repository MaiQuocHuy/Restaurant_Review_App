import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../constants';
import {Display} from '../utils';

const SplashScreen = ({navigation}) => {
  // Navigation to Signin screen after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeTabs');
    }, 2000);
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
