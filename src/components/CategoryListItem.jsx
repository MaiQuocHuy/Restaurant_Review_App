import {View, Text} from 'react-native';
import React from 'react';

const activeCategoryText = 'text-sm font-POPPINS_BOLD text-[#000]';
const inActiveCategoryText = 'text-sm font-POPPINS_SEMI_BOLD text-[#A3A3A3]';

const CategoryListItem = () => {
  return (
    <View className="bg-LIGHT_YELLOW px-4 h-[50px] justify-center">
      <Text className={activeCategoryText}>Burgur</Text>
    </View>
  );
};

export default CategoryListItem;
