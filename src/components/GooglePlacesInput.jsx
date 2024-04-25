import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {StyleSheet, View} from 'react-native';

import {LogBox} from 'react-native';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // Ignore log notification by message
const GooglePlacesInput = ({setStreetAddress, isFocusStreetAddress, value}) => {
  console.log('GooglePlacesInput', value);
  return (
    <GooglePlacesAutocomplete
      disableScroll={true}
      placeholder="Search address..."
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log('Data:', data);
        setStreetAddress(data.description);
        console.log('Details:', details);
      }}
      textInputProps={{
        onChange: newText => {
          console.log(newText);
          setStreetAddress(newText);
        },
        value: value,
      }}
      returnKeyType={'default'}
      fetchDetails={true}
      styles={{
        textInputContainer: {
          width: '100%',
          backgroundColor: 'white',
        },
        textInput: isFocusStreetAddress
          ? {
              height: 46,
              color: '#0E122B',
              fontSize: 20,
              borderWidth: 1,
              borderColor: '#0A8791',
            }
          : {
              height: 46,
              color: '#0E122B',
              fontSize: 20,
              borderWidth: 1,
              borderColor: '#C2C2CB',
            },
        predefinedPlacesDescription: {
          color: '#000',
        },
      }}
      query={{
        key: 'AIzaSyCFgrivo6_Va0_t8BS8Mi2rfuFCC9cduQg',
        language: 'en',
      }}
      onFail={error => console.error(error)}
    />
  );
};

// const textInpuStyle = StyleSheet.create({
//   container: {
//     backgroundColor: '#C2C2CB',
//     paddingTop: '6%',
//     width: '100%',
//     alignSelf: 'center',
//   },
//   textInput: {
//     backgroundColor: '#0A8791',
//     fontSize: 22,
//   },
// });

export default GooglePlacesInput;
