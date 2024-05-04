import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Separator} from '../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
const OverviewRestaurant = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#0A8791"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View className="justify-center items-center py-5">
        <Text className="text-xl font-POPPINS_SEMI_BOLD text-DEFAULT_BLACK">
          Overview
        </Text>
      </View>
      <View className="w-full px-5">
        <View className="flex-row justify-between  pb-2">
          <View className="gap-1">
            <Text className="text-base text-DEFAULT_BLACK font-POPPINS_MEDIUM">
              Overall rating
            </Text>
            <Text className="text-2xl font-POPPINS_SEMI_BOLD">4,8</Text>
            <View className="flex-row">
              <Ionicons name="star" size={16} color={'#FBA83C'} />
              <Ionicons name="star" size={16} color={'#C2C2CB'} />
              <Ionicons name="star" size={16} color={'#C2C2CB'} />
              <Ionicons name="star" size={16} color={'#C2C2CB'} />
              <Ionicons name="star" size={16} color={'#C2C2CB'} />
            </View>
          </View>
          <View className="flex">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-sm font-POPPINS_REGULAR">5</Text>
              <View className="h-3 w-48 bg-DEFAULT_YELLOW border-DEFAULT_WHITE border-2 rounded-lg"></View>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Text className="text-sm font-POPPINS_REGULAR">4</Text>
              <View className="h-3 w-48 bg-DEFAULT_YELLOW border-DEFAULT_WHITE border-2 rounded-lg"></View>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Text className="text-sm font-POPPINS_REGULAR">3</Text>
              <View className="h-3 w-48 bg-DEFAULT_YELLOW border-DEFAULT_WHITE border-2 rounded-lg"></View>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Text className="text-sm font-POPPINS_REGULAR">2</Text>
              <View className="h-3 w-48 bg-DEFAULT_YELLOW border-DEFAULT_WHITE border-2 rounded-lg"></View>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Text className="text-sm font-POPPINS_REGULAR pr-[3px]">1</Text>
              <View className="h-3 w-48 bg-DEFAULT_YELLOW border-DEFAULT_WHITE border-2 rounded-lg"></View>
            </View>
          </View>
        </View>
      </View>
      <View className="px-5 flex-row items-center justify-between">
        <Text className="py-4 text-lg text-DEFAULT_BLACK font-POPPINS_MEDIUM">
          Show recent reviews
        </Text>
        <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Ionicons name="filter" size={30} color={'#0A8791'} />
        </TouchableOpacity>
        {dropdownVisible && (
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              right: 20,
              top: 50,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#0A8791',
              zIndex: 10,
            }}>
            <Text className="text-base px-8 py-3 text-DEFAULT_BLACK border-b-2 font-POPPINS_MEDIUM">
              Month
            </Text>
            <Text className="text-base px-8 py-3 text-DEFAULT_BLACK font-POPPINS_MEDIUM">
              Week
            </Text>
          </View>
        )}
      </View>
      <ScrollView>
        <View className="mx-5 pt-5">
          <View className="w-full flex-row gap-4 ">
            <Image
              source={{
                uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
              }}
              className="w-[12vw] h-[6vh] rounded-full"
            />
            <View className="w-[80%]">
              <Text className="text-lg text-DEFAULT_BLACK font-POPPINS_MEDIUM ">
                MaiQuochUy
              </Text>
              <Text className="text-base text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                MaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUy
              </Text>
              <Text className="text-base text-DEFAULT_GREY font-POPPINS_REGULAR">
                2m ago
              </Text>
            </View>
          </View>
        </View>
        <View className="mx-5 pt-5">
          <View className="w-full flex-row gap-4 ">
            <Image
              source={{
                uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
              }}
              className="w-[12vw] h-[6vh] rounded-full"
            />
            <View className="w-[80%]">
              <Text className="text-lg text-DEFAULT_BLACK font-POPPINS_MEDIUM ">
                MaiQuochUy
              </Text>
              <Text className="text-base text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                MaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUy
              </Text>
              <Text className="text-base text-DEFAULT_GREY font-POPPINS_REGULAR">
                2m ago
              </Text>
            </View>
          </View>
        </View>
        <View className="mx-5 pt-5">
          <View className="w-full flex-row gap-4 ">
            <Image
              source={{
                uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
              }}
              className="w-[12vw] h-[6vh] rounded-full"
            />
            <View className="w-[80%]">
              <Text className="text-lg text-DEFAULT_BLACK font-POPPINS_MEDIUM ">
                MaiQuochUy
              </Text>
              <Text className="text-base text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                MaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUy
              </Text>
              <Text className="text-base text-DEFAULT_GREY font-POPPINS_REGULAR">
                2m ago
              </Text>
            </View>
          </View>
        </View>
        <View className="mx-5 pt-5">
          <View className="w-full flex-row gap-4 ">
            <Image
              source={{
                uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
              }}
              className="w-[12vw] h-[6vh] rounded-full"
            />
            <View className="w-[80%]">
              <Text className="text-lg text-DEFAULT_BLACK font-POPPINS_MEDIUM ">
                MaiQuochUy
              </Text>
              <Text className="text-base text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                MaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUy
              </Text>
              <Text className="text-base text-DEFAULT_GREY font-POPPINS_REGULAR">
                2m ago
              </Text>
            </View>
          </View>
        </View>
        <View className="mx-5 pt-5">
          <View className="w-full flex-row gap-4 ">
            <Image
              source={{
                uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
              }}
              className="w-[12vw] h-[6vh] rounded-full"
            />
            <View className="w-[80%]">
              <Text className="text-lg text-DEFAULT_BLACK font-POPPINS_MEDIUM ">
                MaiQuochUy
              </Text>
              <Text className="text-base text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                MaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUy
              </Text>
              <Text className="text-base text-DEFAULT_GREY font-POPPINS_REGULAR">
                2m ago
              </Text>
            </View>
          </View>
        </View>
        <View className="mx-5 pt-5">
          <View className="w-full flex-row gap-4 ">
            <Image
              source={{
                uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
              }}
              className="w-[12vw] h-[6vh] rounded-full"
            />
            <View className="w-[80%]">
              <Text className="text-lg text-DEFAULT_BLACK font-POPPINS_MEDIUM ">
                MaiQuochUy
              </Text>
              <Text className="text-base text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                MaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUy
              </Text>
              <Text className="text-base text-DEFAULT_GREY font-POPPINS_REGULAR">
                2m ago
              </Text>
            </View>
          </View>
        </View>
        <View className="mx-5 pt-5">
          <View className="w-full flex-row gap-4 ">
            <Image
              source={{
                uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
              }}
              className="w-[12vw] h-[6vh] rounded-full"
            />
            <View className="w-[80%]">
              <Text className="text-lg text-DEFAULT_BLACK font-POPPINS_MEDIUM ">
                MaiQuochUy
              </Text>
              <Text className="text-base text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                MaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUyMaiQuocHUy
              </Text>
              <Text className="text-base text-DEFAULT_GREY font-POPPINS_REGULAR">
                2m ago
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingBottom: 6,
  },
});
export default OverviewRestaurant;
