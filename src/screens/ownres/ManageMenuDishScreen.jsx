import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropdownComponent from '../../components/DropdownComponent';
import {SearchBar, Separator} from '../../components';
import SearchComponent from '../../components/SearchComponent';
import DishItem from '../../components/DishItem';
import {dataTypeDish} from '../../utils/data';
import CategoryListItem from '../../components/CategoryListItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import DishItemAdmin from '../../components/DishItemAdmin';

const ManageMenuDishScreen = ({navigation}) => {
  const [nameDish, setNameDish] = useState();
  const [typeDish, setTypeDish] = useState();
  const [priceDish, setPriceDish] = useState();

  const [activeItem, setActiveItem] = useState('all');
  const isFocused = useIsFocused();

  const [items, setItems] = useState([]);
  // Get dishes
  const fetchDishes = async () => {
    const {data} = await axios.get(
      `http://10.0.2.2:8080/api/dishes/${activeItem}`,
    );
    if (data.success) {
      console.log('Dishes', data.dishes);
      setItems(data.dishes);
    }
  };
  // Get dish
  useEffect(() => {
    if (isFocused) {
      console.log('Fetch dishes', isFocused);
      fetchDishes();
    }
  }, [isFocused]);

  const handleEdit = idDish => {
    navigation.navigate('AddDish', {idDish});
  };

  const handleDelete = async idDish => {
    const {data} = await axios.delete(
      `http://10.0.2.2:8080/api/menu/delete/dish/${idDish}`,
    );
    if (data.success) {
      console.log('Delete', idDish);
      fetchDishes();
    }
  };

  const handleChooseType = async value => {
    console.log('Choose', value);
    const {data} = await axios.get(`http://10.0.2.2:8080/api/dishes/${value}`);
    if (data.success) {
      console.log(data.dishes);
      setItems(data.dishes);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#0A8791"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.headerText}>Menu Dish</Text>
          {/* create a button plus at the right screen on the top */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddDish');
            }}
            activeOpacity={0.4}>
            <View
              style={{
                position: 'absolute',
                right: -120,
                top: 0,
              }}>
              <AntDesign name="pluscircleo" size={32} color="#0E122B" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <SearchComponent />
      <View>
        <FlatList
          data={dataTypeDish}
          keyExtractor={item => item.label}
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
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}}>
        <View className="flex-1 flex flex-row flex-wrap">
          {items.map((item, index) => {
            console.log(item);
            return (
              <DishItemAdmin
                item={item}
                index={index}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                key={item._id}
              />
            );
          })}
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
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#0E122B',
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
  scrollcontainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  itemContainer: {
    width: '50%', // 50% -> 2 columns | 33% -> 3 columns | 25% -> 4 columns
    height: '100px',
  },
  item: {
    padding: '8px',
    margin: '8px',
    backgroundColor: '#EEEEEE',
    height: 'calc(100% - 8px)',
  },
});

export default ManageMenuDishScreen;
