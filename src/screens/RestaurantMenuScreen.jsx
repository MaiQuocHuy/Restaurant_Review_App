import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import DishItem from '../components/DishItem';
import CategoryListItem from '../components/CategoryListItem';
import {dataTypeDish} from '../utils/data';
import axios from 'axios';
import {useEffect} from 'react';

const RestaurantMenuScreen = ({
  navigation,
  route: {
    params: {restaurantId},
  },
}) => {
  console.log('RestaurantMenuScreen', restaurantId);
  const [textSearch, setTextSearch] = useState('');
  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState('all');
  const fetchDishes = async () => {
    const {data} = await axios.get(
      `http://10.0.2.2:8080/api/menu/restaurant/${restaurantId}/dishes/${activeItem}`,
    );
    if (data.success) {
      console.log('Dishes', data.dishes);
      setItems(data.dishes);
    }
  };
  useEffect(() => {
    fetchDishes();
  }, []);

  const handleChooseType = async value => {
    console.log('Choose', value);
    const {data} = await axios.get(
      `http://10.0.2.2:8080/api/menu/restaurant/${restaurantId}/dishes/${value}`,
    );
    if (data.success) {
      console.log('ChooseType', data.dishes);
      setItems(data.dishes);
    } 
  };
  return (
    <View classname="flex-1 bg-SECONDARY_WHITE">
      <StatusBar
        barStyle="light-content"
        className="bg-DEFAULT_GREY"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View className="flex h-12 rounded-lg mx-4 mt-5 flex-row items-center">
        <TouchableOpacity
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}>
          <Ionicons name="chevron-back-outline" size={30} color="#0E122B" />
        </TouchableOpacity>
        <Text className="text-lg w-full ml-32 text-DEFAULT_BLACK font-POPPINS_MEDIUM">
          Menu
        </Text>
      </View>
      <View className="h-12 rounded-lg mx-4 mt-5 justify-center items-center bg-LIGHT_GREY2">
        <View className="flex-row items-center gap-2 ml-2">
          <Ionicons name="search-outline" size={25} color="#C2C2CB" />
          <TextInput
            className="text-xl text-DEFAULT_BLACK flex-1"
            placeholderTextColor="#0E122B"
            placeholder="Search..."
            underlineColorAndroid="transparent"
            selectionColor="#0E122B"
            value={textSearch}
            onChangeText={text => setTextSearch(text)}
            onEndEditing={() => {
              console.log(textSearch);
            }}
          />
        </View>
      </View>
      <View className="m-1">
        <FlatList
          data={dataTypeDish}
          keyExtractor={item => item.value}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => <Separator width={15} />}
          ListFooterComponent={() => <Separator width={20} />}
          ItemSeparatorComponent={() => <Separator width={10} />}
          renderItem={({item}) => {
            return (
              <CategoryListItem
                {...item}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                handleChooseType={handleChooseType}
              />
            );
          }}
        />
      </View>
      <ScrollView>
        {/* <View className="flex-row flex-wrap"> */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flex: 1,
            alignItems: 'flex-start',
          }}>
          {items.map((item, index) => {
            console.log(index);
            return <DishItem key={index} {...item} />;
          })}
        </View>

        {/* </View> */}
        <Separator height={320} />
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default RestaurantMenuScreen;
