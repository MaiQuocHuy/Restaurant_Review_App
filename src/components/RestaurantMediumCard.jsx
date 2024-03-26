import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Images} from '../constants';
import {Display} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RestaurantMediumCard() {
  return (
    // <View className="flex-row items-center mx-4 shadow-sm rounded-lg bg-DEFAULT_WHITE mt-2">
    //     <View>
    //         <Image
    //             source={{
    //                 uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
    //             }}
    //             className="h-[20vw] w-[20vw] rounded-lg m-1"
    //         />
    //     </View>
    //     <View className="flex-1 mx-2">
    //         <View className="flex-row items-center justify-between">
    //             <Text className="text-sm font-POPPINS_BOLD text-DEFAULT_BLACK mb-1">Burgur</Text>
    //             <View className="flex-row items-center">
    //                 <FontAwesome name="star" size={14} color="#FBA83C" />
    //                 <Text className="ml-[5px] text-sm font-POPPINS_BOLD text-DEFAULT_BLACK">4</Text>
    //                 <Text className="text-sm font-POPPINS_MEDIUM text-DEFAULT_BLACK">({10})</Text>
    //             </View>
    //         </View>
    //         <Text className="text-sm font-POPPINS_MEDIUM text-DEFAULT_GREY mb-2">noddles</Text>
    //         <View className="flex-row items-center justify-between">
    //             <View className="flex-row items-center">
    //                 <Image source={Images.DELIVERY_TIME} className="h-4 w-4" />
    //                 <Text className="text-sm font-POPPINS_BOLD text-DEFAULT_BLACK">10</Text>
    //             </View>
    //             <View className="flex-row items-center">
    //                 <Image source={Images.DELIVER} className="h-4 w-4" />
    //                 <Text className="text-sm font-POPPINS_BOLD text-DEFAULT_BLACK">200m</Text>
    //             </View>
    //         </View>
    //     </View>
    // </View>
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
          }}
          style={styles.posterStyle}
        />
      </View>
      <View style={styles.labelContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText} className="font-POPPINS_BOLD">
            SLkdad
          </Text>
        </View>
        <Text style={styles.tagsText} className="font-POPPINS_MEDIUM">
          Burogr
        </Text>
        <Ionicons
          name="bookmark"
          color="#FBA83C"
          size={24}
          style={{
            position: 'absolute',
            top: -2,
            right: 10,
            zIndex: 10,
          }}
        />
        <View style={styles.deliveryDetailsContainer}>
          <View style={styles.rowAndCenter}>
            <FontAwesome name="star" size={14} color="#FBA83C" />
            <Text style={styles.ratingText} className="font-POPPINS_BOLD">
              4.2
            </Text>
            <Text style={styles.reviewsText} className="font-POPPINS_MEDIUM">
              ({233})
            </Text>
          </View>
          <View style={styles.rowAndCenter}>
            <Image
              source={Images.DELIVERY_TIME}
              style={styles.deliveryDetailsIcon}
            />
            <Text
              style={styles.deliveryDetailsText}
              className="font-POPPINS_SEMI_BOLD">
              20 min
            </Text>
          </View>
          <View style={styles.rowAndCenter}>
            <Image style={styles.deliveryDetailsIcon} />
            <Text
              style={styles.deliveryDetailsText}
              className="font-POPPINS_SEMI_BOLD">
              150m
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    elevation: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  posterStyle: {
    width: Display.setWidth(20),
    height: Display.setWidth(20),
    borderRadius: 10,
    margin: 5,
  },
  labelContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliveryDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    // fontFamily: POPPINS_BOLD,
    color: '#000000',
    marginBottom: 5,
  },
  tagsText: {
    fontSize: 11,
    lineHeight: 11 * 1.4,
    // fontFamily: POPPINS_MEDIUM,
    color: '#C2C2CB',
    marginBottom: 7,
  },
  deliveryDetailsText: {
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    // fontFamily: POPPINS_SEMI_BOLD,
    color: '#000000',
  },
  deliveryDetailsIcon: {
    height: 16,
    width: 16,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 10,
    lineHeight: 10 * 1.4,
    // fontFamily: POPPINS_BOLD,
    color: '#000000',
  },
  reviewsText: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    // fontFamily: POPPINS_MEDIUM,
    color: '#000000',
  },
});
