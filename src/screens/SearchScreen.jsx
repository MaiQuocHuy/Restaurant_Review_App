import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import SearchBar from '../components/SearchBar';

export default function SearchScreen() {
  const [userLocation, setUserLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'This app needs access to your location to function properly.',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          Geolocation.getCurrentPosition(info => {
            console.log('Info', info);
            setUserLocation(info);
          });
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    })();
  }, []);
  useEffect(() => {
    if (userLocation != null) {
      console.log('User-Location', userLocation);
      setMapRegion({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  }, [userLocation]);

  return (
    <View className="justify-center items-center flex-1">
      <View className="absolute z-20 top-10">
        <SearchBar />
      </View>
      {userLocation != null && (
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          style={{
            width: Dimensions.get('screen').width * 1,
            height: Dimensions.get('screen').height * 1,
          }}
          region={mapRegion}>
          <Marker
            coordinate={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
            }}
          />
        </MapView>
      )}
    </View>
  );
}
