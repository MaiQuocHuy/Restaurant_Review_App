import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropdownComponent from '../../components/DropdownComponent';
import {Separator} from '../../components';
import {dataTypeDish} from '../../utils/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

const AddDishScreen = ({navigation, route}) => {
  const idDish = route.params ? route.params.idDish : null;
  console.log('IdDish', idDish);
  const [nameDish, setNameDish] = useState();
  const [typeDish, setTypeDish] = useState();
  const [priceDish, setPriceDish] = useState();
  const [imageSource, setImageSource] = useState(null);
  const [photo, setPhoto] = useState(null);

  //
  const [textButton, setTextButton] = useState('Submit');
  //focus
  const [isFocusName, setIsFocusName] = useState(false);
  const [isFocusType, setIsFocusType] = useState(false);
  const [isFocusPrice, setIsFocusPrice] = useState(false);
  const [isFocusPhoto, setIsFocusPhoto] = useState(false);

  // fetchData If Edit
  const fetchData = async () => {
    const {data} = await axios.get(`http://10.0.2.2:8080/api/dish/${idDish}`);
    if (data.success) {
      console.log('Data', data);
      const item = data.menuItem;
      console.log('Item', item);
      setNameDish(item.nameDish);
      setTypeDish(item.typeDish);
      setPriceDish(item.priceDish);
      setImageSource({uri: item.image.url});
      setPhoto(item.image);
    }
  };

  const resetTest = async () => {
    setNameDish('');
    setTypeDish('');
    setPriceDish('');
    setImageSource(null);
    setPhoto(null);
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      console.log(response);
      if (response.assets.length > 0) {
        setImageSource({uri: response.assets[0].uri});
        setPhoto(response);
      }
    });
  };

  const handleSubmit = async () => {
    if (textButton === 'Update') {
      console.log('Update');
      const formData = new FormData();
      formData.append('nameDish', nameDish);
      formData.append('typeDish', typeDish);
      formData.append('priceDish', priceDish);
      formData.append('image', {
        uri: photo.url,
        type: 'image/*',
        name: Math.random().toString(36).substring(2, 8),
      });
      const {data} = await axios.put(
        `http://10.0.2.2:8080/api/menu/update/dish/${idDish}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (data.success) {
        console.log('Update', data);
        resetTest();
        navigation.navigate('MenuDish');
      }
    } else {
      console.log('Submit');
      console.log('Name Dish', nameDish);
      console.log('Type Dish', typeDish);
      console.log('Price Dish', priceDish);
      console.log('Photo', photo);
      const formData = new FormData();
      formData.append('nameDish', nameDish);
      formData.append('typeDish', typeDish);
      formData.append('priceDish', priceDish);
      formData.append('image', {
        uri: photo.assets[0].uri,
        type: photo.assets[0].type,
        name: photo.assets[0].fileName,
      });
      const {data} = await axios.post(
        'http://10.0.2.2:8080/api/menu/create',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (data.success) {
        console.log('Create Dish', data);
        resetTest();
        navigation.navigate('MenuDish');
      }
    }
  };

  const renderLabel = title => {
    console.log('Label', title);
    return <Text style={styles.label}>{title}</Text>;
  };

  useEffect(() => {
    if (idDish) {
      fetchData();
      setTextButton('Update');
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#0A8791"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View className="flex-row items-center py-4 px-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-POPPINS_MEDIUM w-[80%] text-center text-DEFAULT_BLACK">
          MenuDish
        </Text>
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Name Dish (*)</Text>
          {isFocusName && renderLabel('Name dish (*)')}
          <TextInput
            style={styles.inputText}
            placeholder="Name Restaurant..."
            placeholderTextColor="#C2C2CB"
            autoCapitalize="none"
            onFocus={() => setIsFocusName(true)}
            onBlur={() => setIsFocusName(false)}
            onChangeText={text => {
              setNameDish(text);
            }}
            value={nameDish}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Type Dish (*)</Text>
          {isFocusType && renderLabel('Type dish (*)')}
          <DropdownComponent
            data={dataTypeDish}
            title={'Type Dish'}
            value={typeDish}
            setValue={setTypeDish}
            isFocus={isFocusType}
            setIsFocus={setIsFocusType}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Price Dish (*)</Text>
          {isFocusPrice && renderLabel('Price dish (*)')}
          <TextInput
            style={styles.inputText}
            placeholder="Price Dish..."
            placeholderTextColor="#C2C2CB"
            autoCapitalize="none"
            keyboardType="number-pad"
            onFocus={() => setIsFocusPrice(true)}
            onBlur={() => setIsFocusPrice(false)}
            onChangeText={text => {
              setPriceDish(text);
            }}
            value={priceDish && priceDish.toString()}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Photo Restaurant</Text>
          <TouchableOpacity onPress={handleChoosePhoto}>
            <Text style={styles.inputFile}>Choose Photo</Text>
          </TouchableOpacity>
          {imageSource && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image source={imageSource} style={{width: 100, height: 100}} />
            </View>
          )}
        </View>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#8200d6',
              padding: 4,
              margin: 4,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={styles.button}>{textButton}</Text>
          </View>
        </TouchableOpacity>
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
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#0E122B',
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 34,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#0A8791',
  },
  input: {
    borderRadius: 10,
    padding: 10,
    margin: 6,
  },
  inputTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#0E122B',
  },
  inputText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#0E122B',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C2C2CB',
    padding: 10,
  },
  inputFile: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#0E122B',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C2C2CB',
    padding: 10,
  },
  buttonTime: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#0E122B',
    paddingVertical: 5,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#8200d6',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 6,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
});
export default AddDishScreen;
