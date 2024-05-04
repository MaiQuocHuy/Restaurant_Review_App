import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Separator} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';
import Dialog from 'react-native-dialog';
import axios from 'axios';

const CreatePostScreen = ({navigation}) => {
  const [comment, setComment] = useState('');
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancelModal = () => {
    setVisible(false);
  };

  const handleDeleteModal = () => {
    setVisible(false);
    setPhoto(null);
  };

  const handleSubmit = async () => {
    console.log('Davao');
    console.log(photo);
    try {
      const formdata = new FormData();
      formdata.append('title', title);
      formdata.append('content', comment);
      formdata.append('image', {
        uri: photo.uri,
        name: photo.name,
        type: photo.type,
      });
      const {data} = await axios.post(
        'http://10.0.2.2:8080/api/post/create',
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('data', data);
      if (data.success) {
        setPhoto(null);
        setTitle('');
        setComment('');
        navigation.goBack();
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleChoosePhoto = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      console.log('uri', res[0]); // res.uri is the URI of the selected file
      const image = res[0];
      setPhoto(image);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        return;
      } else {
        throw err;
      }
    }
  };
  return (
    <View className="flex-1 bg-DEFAULT_WHITE">
      <StatusBar barStyle="light-content" backgroundColor="#fff" translucent />
      <Separator height={StatusBar.currentHeight} />
      <View className="px-5 flex-row items-center justify-between py-3 border-b-2 border-b-LIGHT_GREY">
        <TouchableOpacity
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}>
          <Ionicons name="chevron-back-outline" size={30} color="#000000" />
        </TouchableOpacity>
        <Text className="text-xl pl-5 text-DEFAULT_BLACK font-POPPINS_MEDIUM">
          Post
        </Text>
        <TouchableOpacity onPress={handleSubmit}>
          <Text
            className={`text-lg ${
              comment != '' && title != '' && photo
                ? 'text-DEFAULT_GREEN'
                : 'text-DEFAULT_GREY'
            } font-POPPINS_MEDIUM`}>
            Publish
          </Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView> */}
      <View className="flex-row w-full px-5 pt-2 pb-3">
        <TouchableOpacity onPress={handleChoosePhoto}>
          <FontAwesome name="image" size={34} color="#0A8791" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="w-full px-2 ">
          <View className="w-full">
            <TextInput
              multiline={true}
              placeholder="Add title"
              className="text-xl  font-POPPINS_REGULAR text-DEFAULT_BLACK px-2 py-4"
              placeholderTextColor={'#C2C2CB'}
              onChangeText={text => setTitle(text)}
            />
          </View>
          <View className="w-full h-auto">
            <TextInput
              multiline={true}
              placeholder="What's on your mind?"
              className="text-lg  font-POPPINS_REGULAR text-DEFAULT_BLACK px-2 py-4"
              placeholderTextColor={'#C2C2CB'}
              onChangeText={text => setComment(text)}
            />
          </View>
          {photo && (
            <TouchableOpacity onLongPress={() => showDialog()}>
              <View className="w-full items-center justify-center">
                <Image
                  source={{
                    uri: photo.uri,
                  }}
                  className="w-[96%] h-[40vh] rounded-lg "
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
        <Separator height={20} />
      </ScrollView>
      {/* </ScrollView> */}
      <Dialog.Container visible={visible}>
        <Dialog.Title>Delete photo</Dialog.Title>

        <Dialog.Button label="Cancel" onPress={() => handleCancelModal()} />
        <Dialog.Button label="Delete" onPress={() => handleDeleteModal()} />
      </Dialog.Container>
    </View>
  );
};

export default CreatePostScreen;
