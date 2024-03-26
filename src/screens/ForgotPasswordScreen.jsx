import React from 'react';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function ForgotPasswordScreen({navigation}) {
  return (
    <View className="flex flex-col h-screen bg-DEFAULT_WHITE space-y-4">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#C2C2CB"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View className="flex flex-row items-center px-4 py-2">
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text className="text-xl font-POPPINS_MEDIUM w-[82vw] text-center text-DEFAULT_BLACK">
          Forgot Password
        </Text>
      </View>
      <Text className="text-xl font-POPPINS_MEDIUM text-DEFAULT_BLACK  mt-12 mb-2 mx-5">
        Forgot Password
      </Text>
      <Text className="text-base font-POPPINS_MEDIUM text-DEFAULT_BLACK mt-2 mb-2 mx-5">
        Enter your email, so that we can help you to recover your password.
      </Text>
      <View className="bg-LIGHT_GREY px-[10px] mx-[20px] rounded-lg border border-LIGHT_GREY2 justify-center my-[6px]">
        <View className="flex-row items-center">
          <Feather name="mail" size={22} color="#C2C2CB" className="mr-2" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#C2C2CB"
            selectionColor="#C2C2CB"
            className="w-full text-base focus:outline-none"
          />
        </View>
      </View>
      <TouchableOpacity className="bg-DEFAULT_GREEN rounded-lg mx-5 h-[6vh] justify-center items-center mt-5">
        <Text className="text-lg text-DEFAULT_WHITE font-POPPINS_MEDIUM">
          Reset Password
        </Text>
      </TouchableOpacity>
    </View>
  );
}
