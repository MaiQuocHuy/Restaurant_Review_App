import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Images} from '../constants';
import {Display} from '../utils';

const SplashScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#0A8791]">
      <StatusBar
        barStyle="light-content"
        className="bg-[#0A8791]"
        translucent
      />
      <Image
        source={Images.PLATE}
        resizeMethod="contain"
        style={styles.image}
      />
      <Text className="text-DEFAULT_WHITE text-3xl font-POPPINS_LIGHT">
        Review App
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
