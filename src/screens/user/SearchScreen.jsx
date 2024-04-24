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
import SearchBar from '../../components/SearchBar';
import Mapbox from '@rnmapbox/maps';

const AccessToken =
  'pk.eyJ1IjoibWFpaHV5bWFwMTIzIiwiYSI6ImNsdmR0ZTloazAybDcyaXBweGp0ZmQ0eDYifQ.Umosc-ZzdKZOI6CKCCs8rA';

Mapbox.setAccessToken(AccessToken);

// MapBoxGL.setConnected(true);
// MapBoxGL.setTelemetryEnabled(false);
// MapBoxGL.setWellKnownTileServer('Mapbox');

export default function SearchScreen() {
  const [userLocation, setUserLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(0);
  const [circleRadius, setCircleRadius] = useState(400);

  useEffect(() => {
    // Adjust the circle radius based on the zoom level
    setCircleRadius(400 / Math.pow(2, zoomLevel));
  }, [zoomLevel]);
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

  // Example usage
  // const address =
  //   '470 Đ. Trần Đại Nghĩa, Khu đô thị, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam';
  // getCoordinatesFromAddress(address).then(coordinates => {
  //   if (coordinates) {
  //     console.log('Coordinates:', coordinates);
  //     // Do something with the coordinates
  //   } else {
  //     console.log('No coordinates found.');
  //   }
  // });

  return (
    <View className="justify-center items-center flex-1">
      <View className="absolute z-20 top-10">
        <SearchBar />
      </View>
      <View
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}>
        {userLocation && (
          <Mapbox.MapView style={{flex: 1}}>
            <Mapbox.Camera
              zoomLevel={16}
              centerCoordinate={[
                userLocation?.coords?.longitude,
                userLocation?.coords?.latitude,
              ]}
            />
            {/* <Mapbox.PointAnnotation
              coordinate={[
                userLocation?.coords?.longitude,
                userLocation?.coords?.latitude,
              ]}
              id="1"
            /> */}

            <Mapbox.UserLocation visible animated />
          </Mapbox.MapView>
        )}
      </View>
    </View>
  );
}
