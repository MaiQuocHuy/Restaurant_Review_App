import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Separator, ToggleButton} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {removeTokenInStorage} from '../../helpers';
export default function UserProfile({navigation}) {
  const handleSignOut = async () => {
    // sign out logic here
    const {data} = await axios.get('http://10.0.2.2:8080/api/logout');
    console.log(data);
    if (data.success) {
      await removeTokenInStorage('token');
      navigation.navigate('Signin');
    }
    // console.log(data);
  };
  return (
    <View className="flex-1 bg-DEFAULT_WHITE px-4 space-y-3">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#C2C2CB"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View className="flex-row items-center pt-4 pb-6">
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color="#000"
          onPress={() => navigation.goBack()}
        />
        <Text className="text-xl font-POPPINS_MEDIUM w-[80%] text-center text-DEFAULT_BLACK">
          Profile
        </Text>
      </View>
      <View className="w-full flex-row gap-3 mb-6">
        <Image
          className="w-16 h-16 rounded-full"
          source={{
            uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
          }}
        />
        <View className="flex-1 gap-1">
          <Text className="text-lg font-POPPINS_MEDIUM text- decoration-DEFAULT_BLACK">
            Maihuymap
          </Text>
          <Text className="text-base font-POPPINS_REGULAR text-DEFAULT_GREY">
            maiquochuy@gmail.com
          </Text>
        </View>
      </View>
      <View className="bg-DEFAULT_GREEN justify-center items-center p-2 rounded-lg mb-6">
        <Text className="text-DEFAULT_WHITE font-POPPINS_MEDIUM text-lg">
          Edit Profile
        </Text>
      </View>
      <View className="pl-2 pr-6 flex-row mb-6">
        <View className="flex-row w-full items-center">
          <Entypo size={24} color="#0A8791" name="location" />
          <Text className="text-xl text-DEFAULT_BLACK font-POPPINS_MEDIUM px-4">
            My Address
          </Text>
        </View>
        <Ionicons size={28} color="#0E122B" name="chevron-forward" />
      </View>
      <View className="pl-2 pr-14 flex-row mb-6">
        <View className="flex-row w-full items-center">
          <Ionicons size={26} color="#0A8791" name="notifications" />
          <Text className="text-xl text-DEFAULT_BLACK font-POPPINS_MEDIUM px-4">
            Notifcations
          </Text>
        </View>
        <ToggleButton size={0.7} />
      </View>
      <View className="pl-2 pr-6 flex-row mb-6">
        <View className="flex-row w-full items-center">
          <MaterialIcons size={24} color="#0A8791" name="verified-user" />
          <Text className="text-xl text-DEFAULT_BLACK font-POPPINS_MEDIUM px-4">
            Vertification
          </Text>
        </View>
        <Ionicons size={28} color="#0E122B" name="chevron-forward" />
      </View>
      <View className="pl-3 pr-6 flex-row mb-6">
        <View className="flex-row w-full items-center">
          <FontAwesome size={26} color="#0A8791" name="bookmark" />
          <Text className="text-xl text-DEFAULT_BLACK font-POPPINS_MEDIUM px-4">
            BookMarked
          </Text>
        </View>
        <Ionicons size={28} color="#0E122B" name="chevron-forward" />
      </View>
      <TouchableOpacity onPress={handleSignOut}>
        <View className="pl-3 pr-6 flex-row mb-6">
          <View className="flex-row w-full items-center">
            <MaterialIcons size={20} color="#0A8791" name="logout" />
            <Text className="text-xl text-DEFAULT_BLACK font-POPPINS_MEDIUM px-4">
              Logout
            </Text>
          </View>
          <Ionicons size={28} color="#0E122B" name="chevron-forward" />
        </View>
      </TouchableOpacity>
      <View className="bg-LIGHT_GREEN flex-row justify-center py-6 px-3 rounded-lg mb-6">
        <FontAwesome5 name="robot" size={22} color="#FBA83C" />
        <Text
          className="pl-2 text-DEFAULT_YELLOW font-POPPINS_SEMI_BOLD "
          style={{fontSize: 20}}>
          How can we help you!
        </Text>
      </View>
    </View>
  );
}
