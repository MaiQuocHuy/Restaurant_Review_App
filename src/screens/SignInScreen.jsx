import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import Separator from '../components/Separator';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ToggleButton from '../components/ToggleButton';

export default function SignInScreen({navigation}) {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-DEFAULT_WHITE">
      <StatusBar
        barStyle="light-content"
        className="bg-DEFAULT_GREY"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View className="flex-row items-center py-4 px-4">
        {/* <Ionicons
          name="chevron-back-outline"
          size={30}
          color={'#000'}
          onPress={() => navigation.goBack()}
        /> */}
        <Text className="text-xl font-POPPINS_MEDIUM w-[100%] text-center text-DEFAULT_BLACK">
          Sign in
        </Text>
      </View>
      <Text className="text-xl font-POPPINS_MEDIUM text-DEFAULT_BLACK  mt-12 mb-2 mx-5">
        Welcome
      </Text>
      <Text className="text-base font-POPPINS_MEDIUM text-DEFAULT_BLACK mt-2 mb-5 mx-5">
        Enter your username and password, and enjoy app
      </Text>
      <View className="bg-LIGHT_GREY px-2 mx-5 rounded-lg border border-LIGHT_GREY2 justify-center">
        <View className="flex-row items-center">
          <Feather name="user" size={22} color="#C2C2CB" className="mr-3" />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#C2C2CB"
            selectionColor="#C2C2CB"
            className="text-xl text-DEFAULT_BLACK p-3 flex-1"
            onChangeText={text => setUsername(text)}
          />
        </View>
      </View>
      <Separator height={15} />
      <View className="bg-LIGHT_GREY px-2 mx-5 rounded-lg border border-LIGHT_GREY2 justify-center">
        <View className="flex-row items-center">
          <Feather name="lock" size={22} color="#C2C2CB" className="mr-3" />
          <TextInput
            placeholder="Password"
            secureTextEntry={isPasswordShow ? false : true}
            placeholderTextColor="#C2C2CB"
            selectionColor="#C2C2CB"
            className="text-xl text-DEFAULT_BLACK p-3 flex-1"
            onChangeText={text => setPassword(text)}
          />
          <Feather
            name={isPasswordShow ? 'eye' : 'eye-off'}
            size={22}
            color="#C2C2CB"
            className="mr-3"
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
        </View>
      </View>
      {/* <Text className="text-base text-DEFAULT_RED font-POPPINS_MEDIUM text-center pt-4 pb-0">
        Error Message{' '}
      </Text> */}
      <View className="flex-row items-start justify-between pr-6 pt-4 pl-6">
        <View className="flex-row items-center space-x-1">
          <ToggleButton size={0.5} />
          <Text className="text-sm text-DEFAULT_GREY font-POPPINS_MEDIUM">
            Remember me
          </Text>
        </View>
        <Text
          className="text-sm text-DEFAULT_GREEN font-POPPINS_BOLD"
          onPress={() => navigation.navigate('Forgot')}>
          Forgot Password
        </Text>
      </View>
      <TouchableOpacity className="bg-DEFAULT_GREEN border border-SECONDARY_WHITE rounded-xl mx-5 justify-center items-center mt-5">
        <Text className="ml-[5px] py-2 text-lg text-DEFAULT_WHITE font-POPPINS_MEDIUM">
          Sign in
        </Text>
      </TouchableOpacity>

      <View className="flex space-x-5 justify-center flex-row items-center mt-4">
        <Text className="text-sm text-DEFAULT_BLACK font-POPPINS_MEDIUM">
          Don't have an account?
        </Text>
        <Text
          className="text-sm text-DEFAULT_GREEN font-POPPINS_MEDIUM ml-2"
          onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Text>
      </View>
    </View>
  );
}
