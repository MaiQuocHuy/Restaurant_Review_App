import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Dimensions} from 'react-native';
import {useRef} from 'react';

const RestaurantScreen = ({
  navigation,
  route: {
    params: {restaurantId},
  },
}) => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ]);
  //state active
  const [activeSection, setActiveSection] = useState('Menu');
  //ref
  const menuRef = useRef();
  const reviewsRef = useRef();
  const detailsRef = useRef();
  const scrollViewRef = useRef();
  // scrollToPosition
  const [detailsY, setDetailsY] = useState(0);
  const [menuY, setMenuY] = useState(0);
  const [reviewsY, setReviewsY] = useState(0);

  const handleScroll = event => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (menuRef.current) {
      try {
        menuRef.current.measure((x, y, width, height, pageX, pageY) => {
          if (scrollY >= pageY && scrollY < pageY + height) {
            console.log('Menu', x, y);
            setActiveSection('Menu');
          }
        });
      } catch (error) {
        console.error(error);
      }
    }

    if (reviewsRef.current) {
      reviewsRef.current.measure((x, y, width, height, pageX, pageY) => {
        if (scrollY >= pageY && scrollY < pageY + height) {
          console.log('Reviews', x, y);
          setActiveSection('Reviews');
        }
      });
    }

    if (detailsRef.current) {
      detailsRef.current.measure((x, y, width, height, pageX, pageY) => {
        if (scrollY >= pageY && scrollY < pageY + height) {
          console.log('Details', x, y);
          setActiveSection('Details');
        }
      });
    }
  };

  return (
    <SafeAreaView className="flex flex-1 justify-center">
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <Image
        source={{
          uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
        }}
        className="absolute top-0 h-full w-full"
      />
      <View className="flex flex-row justify-between items-center h-[13%] pt-12 px-4">
        <TouchableOpacity
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}>
          <Ionicons name="chevron-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <View>
          <Ionicons name="share-outline" size={30} color="#fff" />
        </View>
      </View>
      <ScrollView onScroll={handleScroll} ref={scrollViewRef}>
        <View className="flex justify-center flex-1">
          <Separator height={200} />
          <View className="bg-DEFAULT_WHITE rounded-t-3xl">
            <View className="flex flex-row items-center justify-between mx-6 mt-4">
              <Text className="text-2xl font-POPPINS_SEMI_BOLD text-DEFAULT_BLACK">
                MCdocs
              </Text>
              <Ionicons name={'bookmark'} color="#FBA83C" size={24} />
            </View>
            <View className="flex-row">
              <Text className="ml-6 mr-2 mt-1 text-base font-POPPINS_SEMI_BOLD text-DEFAULT_GREY">
                Vietnamese • Asian • Healthy
              </Text>
              <Text className="mt-1 text-base font-POPPINS_SEMI_BOLD text-DEFAULT_GREEN">
                (Working)
              </Text>
            </View>
            <View className="flex flex-row items-center mx-6 mt-2">
              <FontAwesome name="star" size={18} color="#FBA83C" />
              <Text className="ml-1 text-sm font-POPPINS_BOLD text-DEFAULT_BLACK">
                4.2
              </Text>
              <Text className="ml-1 text-sm font-POPPINS_BOLD text-DEFAULT_BLACK">
                (455 Reviews)
              </Text>
            </View>
            <View className="flex flex-row items-center justify-between mx-6 mt-2">
              <View className="flex flex-row items-center">
                <FontAwesome name={'dollar'} color="#000" size={16} />
                <Text className="ml-1 text-sm font-POPPINS_MEDIUM text-DEFAULT_BLACK">
                  50 - 100
                </Text>
              </View>
              <View className="flex flex-row items-center">
                <Ionicons name={'location-sharp'} color="#000" size={16} />
                <Text className="ml-1 text-sm font-POPPINS_MEDIUM text-DEFAULT_BLACK">
                  1000 km
                </Text>
              </View>
              <View className="bg-light-yellow justify-center items-center px-2 py-1 rounded-lg">
                <Text className="text-sm font-POPPINS_MEDIUM text-DEFAULT_BLACK">
                  Asian
                </Text>
              </View>
            </View>
            <View className="flex flex-row pl-4 space-x-4 border-b-2 border-b-DEFAULT_GREY my-2">
              <TouchableOpacity
                onPress={() => {
                  scrollViewRef.current.scrollTo({
                    x: 0,
                    y: menuY,
                    animated: true,
                  });
                }}>
                <View className="p-2">
                  <Text
                    className="text-base font-POPPINS_MEDIUM"
                    style={
                      activeSection === 'Menu' ? styles.activeText : styles.text
                    }>
                    Menu
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  scrollViewRef.current.scrollTo({
                    x: 0,
                    y: reviewsY,
                    animated: true,
                  })
                }>
                <View className="p-2">
                  <Text
                    className="text-base font-POPPINS_MEDIUM"
                    style={
                      activeSection === 'Reviews'
                        ? styles.activeText
                        : styles.text
                    }>
                    Reviews
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  scrollViewRef.current.scrollTo({
                    x: 0,
                    y: detailsY,
                    animated: true,
                  })
                }>
                <View className="p-2">
                  <Text
                    className="text-base font-POPPINS_MEDIUM"
                    style={
                      activeSection === 'Details'
                        ? styles.activeText
                        : styles.text
                    }>
                    Details
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* Menu */}
            <View
              className="flex my-4 gap-2 px-6 pt-2"
              onLayout={event => {
                console.log('MenuY', event.nativeEvent.layout.y);
                setMenuY(event.nativeEvent.layout.y);
              }}
              ref={menuRef}
              collapsable={false}>
              <Text className="text-xl text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                Menu
              </Text>
              <TouchableOpacity
                className="bg-DEFAULT_GREEN border border-SECONDARY_WHITE justify-center items-center py-2"
                onPress={() =>
                  navigation.navigate('RestaurantMenu', {
                    restaurantId: restaurantId,
                  })
                }>
                <Text className="text-lg text-DEFAULT_WHITE font-POPPINS_REGULAR uppercase">
                  See full menu
                </Text>
              </TouchableOpacity>
            </View>

            {/* Reviews */}
            <View
              className="flex flex-col my-4 gap-2 px-6 pt-2 justify-between"
              onLayout={event => setReviewsY(event.nativeEvent.layout.y)}
              ref={reviewsRef}
              collapsable={false}>
              <Text className="text-xl text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                Reviews
              </Text>
              <View className="flex-row justify-between  pb-2">
                <View className="gap-1">
                  <Text className="text-base font-POPPINS_MEDIUM">
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
                    <Text className="text-sm font-POPPINS_REGULAR pr-[3px]">
                      1
                    </Text>
                    <View className="h-3 w-48 bg-DEFAULT_YELLOW border-DEFAULT_WHITE border-2 rounded-lg"></View>
                  </View>
                </View>
              </View>
              {/* Comment */}
              <View className="w-full pr-2 pt-4 pb-2 border-b-2 border-b-DEFAULT_GREY">
                <View className="flex-row items-center">
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
                <View className="py-2">
                  <Text
                    className="text-base font-POPPINS_REGULAR"
                    numberOfLines={4}
                    ellipsizeMode="tail">
                    verall ratingverall ratingverall ratingverall ratingverall
                    ratingverall ratingverall ratingverall ratingverall
                    ratingverall rating verall ratingverall
                  </Text>
                </View>
              </View>
              <View className="w-full pr-2 pt-4 pb-2 border-b-2 border-b-DEFAULT_GREY">
                <View className="flex-row items-center">
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
                <View className="py-2">
                  <Text
                    className="text-base font-POPPINS_REGULAR"
                    numberOfLines={4}
                    ellipsizeMode="tail">
                    verall ratingverall ratingverall ratingverall ratingverall
                    ratingverall ratingverall ratingverall ratingverall
                    ratingverall rating verall ratingverall
                  </Text>
                </View>
              </View>
              <View className="w-full pr-2 pt-4 pb-2 border-b-2 border-b-DEFAULT_GREY">
                <View className="flex-row items-center">
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
                <View className="py-2">
                  <Text
                    className="text-base font-POPPINS_REGULAR"
                    numberOfLines={4}
                    ellipsizeMode="tail">
                    verall ratingverall ratingverall ratingverall ratingverall
                    ratingverall ratingverall ratingverall ratingverall
                    ratingverall rating verall ratingverall
                  </Text>
                </View>
              </View>
              <View className="pt-2 w-full">
                <TouchableOpacity
                  className="bg-DEFAULT_GREEN border border-SECONDARY_WHITE justify-center items-center py-2"
                  onPress={
                    () =>
                      navigation.navigate('RestaurantReview', {
                        restaurantId: restaurantId,
                      })
                    // navigation.navigate('Test')
                  }>
                  <Text className="text-lg text-DEFAULT_WHITE font-POPPINS_REGULAR uppercase">
                    See all reviews
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Details */}
            <View
              className="flex flex-col my-4 gap-2 px-6 pt-2"
              collapsable={false}
              onLayout={event => {
                console.log('DetailsY', event.nativeEvent.layout.y);
                setDetailsY(event.nativeEvent.layout.y);
              }}
              ref={detailsRef}>
              <Text className="text-xl text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                Details
              </Text>
              <Text className="text-base font-POPPINS_MEDIUM">Address</Text>
              <View className="flex-row space-x-1">
                <Ionicons name="location" size={20} color={'#0E122B'} />
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  className="text-base font-POPPINS_MEDIUM">
                  Ha my, Dong b dien ban, Quang nam, Viet nam
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.8}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={{
                    width: Dimensions.get('screen').width * 0.89,
                    height: Dimensions.get('screen').height * 0.1,
                  }}
                  className="rounded-xl"
                  region={{
                    latitude: 16.054406,
                    longitude: 108.202164,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}></MapView>
              </TouchableOpacity>
              <Text className="text-base font-POPPINS_MEDIUM">
                Additional information
              </Text>
              <View className="flex-row space-x-1">
                <MaterialIcons name="description" size={20} color={'#0E122B'} />
                <View>
                  <Text className="text-base font-POPPINS_SEMI_BOLD">
                    Description
                  </Text>
                  <Text className="text-base font-POPPINS_REGULAR text-DEFAULT_BLACK">
                    At seems like you're building a screen for a restaurant app
                    in React Native
                  </Text>
                </View>
              </View>

              <View className="flex-row space-x-1">
                <FontAwesome name="phone" size={20} color={'#0E122B'} />
                <View>
                  <Text className="text-base font-POPPINS_SEMI_BOLD">
                    Phone
                  </Text>
                  <Text className="text-base font-POPPINS_REGULAR text-DEFAULT_RED">
                    0235 123 456
                  </Text>
                </View>
              </View>
              <View className="flex-row space-x-1">
                <MaterialIcons
                  name="dinner-dining"
                  size={20}
                  color={'#0E122B'}
                />
                <View>
                  <Text className="text-base font-POPPINS_SEMI_BOLD">
                    Cuisine
                  </Text>
                  <Text className="text-base font-POPPINS_REGULAR text-DEFAULT_BLACK">
                    Vietnamese, Asian
                  </Text>
                </View>
              </View>
              <View className="flex-row space-x-1">
                <Ionicons name="time-outline" size={20} color={'#0E122B'} />
                <View>
                  <Text className="text-base font-POPPINS_SEMI_BOLD">
                    Hours of operation
                  </Text>
                  {/* Active */}
                  <Text className="text-base font-POPPINS_REGULAR text-DEFAULT_BLACK">
                    08:00 am - 22:00 pm
                  </Text>
                  {/* Off */}
                </View>
              </View>
              <Separator height={60} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activeText: {
    color: '#FBA83C',
    borderBottomColor: '#FBA83C',
    borderBottomWidth: 3,
  },
  text: {
    color: '#C2C2CB',
  },
});

export default RestaurantScreen;
