import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useRef} from 'react';
import {Separator} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommentInput from '../../components/CommentInput';
import {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';

const PostCommentScreen = ({
  navigation,
  route: {
    params: {postId},
  },
}) => {
  const [isFocusComment, setIsFocusComment] = useState(false);
  const [comment, setComment] = useState('');
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  const resetInput = () => {
    setComment('');
  };
  const handleSubmit = async () => {
    console.log('Comment', comment);
    const {data} = await axios.put(
      `http://10.0.2.2:8080/api/comment/post/${postId}`,
      {
        comment,
      },
    );
    console.log('Data', data);
    if (data.success) {
      fetchCommentsInPost();
    }
    resetInput('');
  };

  const fetchCommentsInPost = async () => {
    try {
      const {data} = await axios.get(`http://10.0.2.2:8080/api/post/${postId}`);
      console.log('Comments', data.post.comments);
      // console.log('Postby', data.post);
      setPost(data.post.comments);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfile = async () => {
    const {data} = await axios.get(`http://10.0.2.2:8080/api/me`);
    console.log('Profile', data);
    if (data.success) setUser(data.user);
  };

  useEffect(() => {
    fetchCommentsInPost();
    fetchProfile();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" translucent />
      <Separator height={StatusBar.currentHeight} />
      <View className="flex h-12 rounded-lg mx-4 mt-5 flex-row items-center">
        <TouchableOpacity
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}>
          <Ionicons name="chevron-back-outline" size={30} color="#0E122B" />
        </TouchableOpacity>
        <Text className="text-lg w-full ml-28 text-DEFAULT_BLACK font-POPPINS_MEDIUM">
          Comments
        </Text>
      </View>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        style={{width: '100%'}}
        extraScrollHeight={190}>
        <CommentInput
          setIsFocusComment={setIsFocusComment}
          isFocusComment={isFocusComment}
          comment={comment}
          setComment={setComment}
          handleSubmit={handleSubmit}
          user={user}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {post &&
            post.length > 0 &&
            post.map((item, index) => (
              <View className="mx-5 pt-5" key={index}>
                <View className="w-full flex-row gap-4 ">
                  <Image
                    source={{
                      uri:
                        item?.postedBy?.image?.url ||
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png',
                    }}
                    className="w-[12vw] h-[6vh] rounded-full"
                  />
                  <View className="w-[80%]">
                    <Text className="text-lg text-DEFAULT_BLACK font-POPPINS_MEDIUM ">
                      {item.postedBy.name}
                    </Text>
                    <Text className="text-base text-DEFAULT_BLACK font-POPPINS_MEDIUM">
                      {item.text}
                    </Text>
                    <Text className="text-base text-DEFAULT_GREY font-POPPINS_REGULAR">
                      {moment(item.createdAt).fromNow()}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
        </ScrollView>
        <Separator height={130} />
      </KeyboardAwareScrollView>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

export default PostCommentScreen;
