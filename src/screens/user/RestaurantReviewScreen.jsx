import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Separator} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheetModel from '../../components/BottomSheetModel';

const RestaurantReviewScreen = ({
  navigation,
  route: {
    params: {restaurantId},
  },
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = (rating, content) => {
    console.log('Rating, content', rating, content);
  };

  return (
    <View classname="flex-1 bg-SECONDARY_WHITE">
      <StatusBar
        barStyle="light-content"
        className="bg-DEFAULT_GREY"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <TouchableOpacity
        className="absolute z-10 bg-DEFAULT_YELLOW flex items-center justify-center rounded-full w-16 h-16 right-6 top-[720px] shadow-2xl"
        onPress={handleModal}>
        <AntDesign name="plus" color={'#fff'} size={30} />
      </TouchableOpacity>
      <View className="flex h-12 rounded-lg mx-4 mt-5 flex-row items-center">
        <TouchableOpacity
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}>
          <Ionicons name="chevron-back-outline" size={30} color="#0E122B" />
        </TouchableOpacity>
        <Text className="text-lg w-full ml-32 text-DEFAULT_BLACK font-POPPINS_MEDIUM">
          Reviews
        </Text>
      </View>
      {/* Comments */}
      <ScrollView>
        <View className="flex-1">
          <View className="w-full pr-2 pt-4 pb-2 border-b-2 border-b-DEFAULT_GREY">
            <View className="flex-row items-center px-3">
              <Image
                source={{
                  uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
                }}
                className="h-14 w-14 rounded-full"
              />
              <View className="flex-1 ml-4">
                <Text className="text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                  Mai Quoc Huy
                </Text>
                <Text className="text-DEFAULT_GREY font-POPPINS_REGULAR">
                  17 May, 2020
                </Text>
              </View>
              <View className="flex-row">
                <Ionicons name="star" size={20} color={'#FBA83C'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
              </View>
            </View>
            <View className="py-2 px-3">
              <Text
                className="text-base font-POPPINS_REGULAR"
                numberOfLines={4}
                ellipsizeMode="tail">
                verall ratingverall ratingverall ratingverall ratingverall
                ratingverall ratingverall ratingverall ratingverall ratingverall
                rating verall ratingverall ratingverall ratingverall
                ratingverall ratingverall ratingverall rating verall
                ratingverallrall ratingverall ratingverall ratingverall
                ratingverall ratingverall rating verall ratingverall
              </Text>
            </View>
          </View>
          <View className="w-full pr-2 pt-4 pb-2 border-b-2 border-b-DEFAULT_GREY">
            <View className="flex-row items-center px-3">
              <Image
                source={{
                  uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
                }}
                className="h-14 w-14 rounded-full"
              />
              <View className="flex-1 ml-4">
                <Text className="text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                  Mai Quoc Huy
                </Text>
                <Text className="text-DEFAULT_GREY font-POPPINS_REGULAR">
                  17 May, 2020
                </Text>
              </View>
              <View className="flex-row">
                <Ionicons name="star" size={20} color={'#FBA83C'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
              </View>
            </View>
            <View className="py-2 px-3">
              <Text
                className="text-base font-POPPINS_REGULAR"
                numberOfLines={4}
                ellipsizeMode="tail">
                verall ratingverall ratingverall ratingverall ratingverall
                ratingverall ratingverall ratingverall ratingverall ratingverall
                rating verall ratingverall
              </Text>
            </View>
          </View>
          <View className="w-full pr-2 pt-4 pb-2 border-b-2 border-b-DEFAULT_GREY">
            <View className="flex-row items-center px-3">
              <Image
                source={{
                  uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
                }}
                className="h-14 w-14 rounded-full"
              />
              <View className="flex-1 ml-4">
                <Text className="text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                  Mai Quoc Huy
                </Text>
                <Text className="text-DEFAULT_GREY font-POPPINS_REGULAR">
                  17 May, 2020
                </Text>
              </View>
              <View className="flex-row">
                <Ionicons name="star" size={20} color={'#FBA83C'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
              </View>
            </View>
            <View className="py-2 px-3">
              <Text
                className="text-base font-POPPINS_REGULAR"
                numberOfLines={4}
                ellipsizeMode="tail">
                verall ratingverall ratingverall ratingverall ratingverall
                ratingverall ratingverall ratingverall ratingverall ratingverall
                rating verall ratingverall
              </Text>
            </View>
          </View>
          <View className="w-full pr-2 pt-4 pb-2 border-b-2 border-b-DEFAULT_GREY">
            <View className="flex-row items-center px-3">
              <Image
                source={{
                  uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
                }}
                className="h-14 w-14 rounded-full"
              />
              <View className="flex-1 ml-4">
                <Text className="text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                  Mai Quoc Huy
                </Text>
                <Text className="text-DEFAULT_GREY font-POPPINS_REGULAR">
                  17 May, 2020
                </Text>
              </View>
              <View className="flex-row">
                <Ionicons name="star" size={20} color={'#FBA83C'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
              </View>
            </View>
            <View className="py-2 px-3">
              <Text
                className="text-base font-POPPINS_REGULAR"
                numberOfLines={4}
                ellipsizeMode="tail">
                verall ratingverall ratingverall ratingverall ratingverall
                ratingverall ratingverall ratingverall ratingverall ratingverall
                rating verall ratingverall
              </Text>
            </View>
          </View>
          <View className="w-full pr-2 pt-4 pb-2 border-b-2 border-b-DEFAULT_GREY">
            <View className="flex-row items-center px-3">
              <Image
                source={{
                  uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
                }}
                className="h-14 w-14 rounded-full"
              />
              <View className="flex-1 ml-4">
                <Text className="text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                  Mai Quoc Huy
                </Text>
                <Text className="text-DEFAULT_GREY font-POPPINS_REGULAR">
                  17 May, 2020
                </Text>
              </View>
              <View className="flex-row">
                <Ionicons name="star" size={20} color={'#FBA83C'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
              </View>
            </View>
            <View className="py-2 px-3">
              <Text
                className="text-base font-POPPINS_REGULAR"
                numberOfLines={4}
                ellipsizeMode="tail">
                verall ratingverall ratingverall ratingverall ratingverall
                ratingverall ratingverall ratingverall ratingverall ratingverall
                rating verall ratingverall
              </Text>
            </View>
          </View>
          <View className="w-full pr-2 pt-4 pb-2 border-b-2 border-b-DEFAULT_GREY">
            <View className="flex-row items-center px-3">
              <Image
                source={{
                  uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
                }}
                className="h-14 w-14 rounded-full"
              />
              <View className="flex-1 ml-4">
                <Text className="text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                  Mai Quoc Huy
                </Text>
                <Text className="text-DEFAULT_GREY font-POPPINS_REGULAR">
                  17 May, 2020
                </Text>
              </View>
              <View className="flex-row">
                <Ionicons name="star" size={20} color={'#FBA83C'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
                <Ionicons name="star" size={20} color={'#C2C2CB'} />
              </View>
            </View>
            <View className="py-2 px-3">
              <Text
                className="text-base font-POPPINS_REGULAR"
                numberOfLines={4}
                ellipsizeMode="tail">
                verall ratingverall ratingverall ratingverall ratingverall
                ratingverall ratingverall ratingverall ratingverall ratingverall
                rating verall ratingverall ratingverall ratingverall
                ratingverall ratingverall ratingverall rating verall
                ratingverallrall ratingverall ratingverall ratingverall
                ratingverall ratingverall rating verall ratingverall
              </Text>
            </View>
          </View>
          <Separator height={200} />
        </View>
      </ScrollView>

      {modalVisible == true && (
        <BottomSheetModel
          handleModal={handleModal}
          handleSubmit={handleSubmit}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      {/* </View> */}
    </View>
  );
};
export default RestaurantReviewScreen;
