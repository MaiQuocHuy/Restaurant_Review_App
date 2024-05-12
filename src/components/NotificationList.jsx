import {View, Text} from 'react-native';
import React from 'react';
import NotificationItem from './NotificationItem';

const NotificationList = ({notification}) => {
  console.log('NotificationsList', notification);
  return (
    <View className="w-full ">
      {notification &&
        notification.length > 0 &&
        notification.map((item, index) => {
          console.log('Item', item);
          return (
            <NotificationItem
              key={index}
              {...item}
              isLastItem={index === notification.length - 1}
            />
          );
        })}
    </View>
  );
};

export default NotificationList;
