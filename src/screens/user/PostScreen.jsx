import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'react-native';
import {Separator} from '../../components';
import MoreInfo from '../../components/MoreInfo';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';

const PostScreen = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const isFocused = useIsFocused();

  const fetchPosts = async () => {
    try {
      const {data} = await axios.get('http://10.0.2.2:8080/api/posts/show');
      console.log('Posts', data.posts);
      if (data.success) {
        setPosts(data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isFocused) fetchPosts();
  }, [isFocused]);
  return (
    <View className="flex-1 bg-SECONDARY_WHITE">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0A8791"
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View className="flex-row justify-between items-center mx-5 py-5 border-b-2 border-DEFAULT_GREY">
        <Text className="text-xl font-POPPINS_MEDIUM text-DEFAULT_BLACK">
          Post Screen
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <AntDesign name="pluscircleo" size={28} color="#0A8791" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {posts &&
          posts.length > 0 &&
          posts.map((item, index) => (
            <View className="mx-5 pt-5 space-y-4" key={index}>
              <View className="flex-1 flex-row gap-4 ">
                <Image
                  source={{
                    uri: 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
                  }}
                  className="w-[15vw] h-[8vh] rounded-lg"
                />
                <View className="w-full">
                  <Text className="text-lg text-DEFAULT_BLACK font-POPPINS_MEDIUM ">
                    {item.postedBy[0].name}
                  </Text>
                  <Text className="text-base text-DEFAULT_GREY font-POPPINS_REGULAR">
                    {moment(item.createdAt).fromNow()}
                  </Text>
                </View>
              </View>
              <View className="flex-1">
                <Text className="text-xl font-POPPINS_MEDIUM text-DEFAULT_BLACK">
                  {item.title}
                </Text>
              </View>
              <View className="flex-1">
                {/* <MoreInfo text={item.content} linesToTruncate={3} /> */}
                <Text className="text-base font-POPPINS_REGULAR text-DEFAULT_BLACK">
                  {item.content}
                </Text>
              </View>
              <View className="flex-1">
                <Image
                  source={{
                    uri: item.image.url,
                  }}
                  className="w-full h-[24vh] rounded-lg"
                />
              </View>
              <View className="flex-1 flex-row space-x-8 items-center">
                <View className="flex-row items-center space-x-2">
                  <Ionicons name="heart-outline" size={28} color="#0A8791" />
                  <Text className="text-base font-POPPINS_REGULAR text-DEFAULT_GREEN">
                    {item.countLike}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('PostComment', {
                      postId: item._id,
                    })
                  }>
                  <View className="flex-row items-center space-x-2">
                    <Ionicons
                      name="chatbubble-outline"
                      size={28}
                      color="#0A8791"
                    />
                    <Text className="text-base font-POPPINS_REGULAR text-DEFAULT_GREEN">
                      {item.countComment}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Ionicons />
            </View>
          ))}

        <Separator height={60} />
      </ScrollView>
    </View>
  );
};

export default PostScreen;
