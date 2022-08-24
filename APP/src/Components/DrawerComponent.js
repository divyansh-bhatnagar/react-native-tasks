import {
  View,
  Text,
  ImageBackground,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Result from '../Screen/Result';
import Home from '../Screen/Home';
import ProfileUpdate from '../Screen/ProfileUpdate';
import {logout} from '../Store/action';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import ImagePicker from 'react-native-image-crop-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImageComponent from './ImageComponent';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import defaultuserlogo from '../../assets/images/defaultlogo.jpg';

const Drawer = createDrawerNavigator();

export const CustomDrawerContent = props => {
  const navigation = useNavigation();

  const {currentUserInfo} = props;
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(currentUserInfo.image);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (currentUserInfo) {
      setAvatar(currentUserInfo.image);
    }
  }, [currentUserInfo]);

  const onHandleLogout = async () => {
    dispatch(logout());
    await AsyncStorage.removeItem('currentuser');
  };

  const onHandleDelete = async () => {
    setAvatar(null);
    try{
      const strigifiedArray = await AsyncStorage.getItem('users');
      const usersArray = JSON.parse(strigifiedArray);
      const updatedUsersArray = usersArray.map(userDetail => {
        if (userDetail.id === currentUserInfo.id) {
          return {...userDetail, image: null};
        } else {
          return userDetail;
        }
      });
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsersArray));
      console.log('updatedUsersArray: ', updatedUsersArray);
    }catch(error) {
      console.log(error)
    }
  }

  const onImageHandler = async img => {
    const imgdata = img.path;
    setAvatar(imgdata);
    try {
      //await AsyncStorage.setItem('users', JSON.stringify(avatar));
      const strigifiedArray = await AsyncStorage.getItem('users');
      const usersArray = JSON.parse(strigifiedArray);
      const updatedUsersArray = usersArray.map(userDetail => {
        if (userDetail.id === currentUserInfo.id) {
          return {...userDetail, image: imgdata};
        } else {
          return userDetail;
        }
      });
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsersArray));
      console.log('updatedUsersArray: ', updatedUsersArray);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log('Image:', avatar);
  console.log('current user info:', currentUserInfo);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '8200d6'}}>
        <View style={styles.img}>
          <Image source={{uri: avatar}} style={styles.imgView} />
        </View>
        <View>
          <ImageComponent
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            onImageHandler={onImageHandler}
          />
        </View>

        <View>
          <Entypo
            name="camera"
            size={35}
            color="#DEDEDE"
            onPress={() => setModalVisible(true)}
            style={styles.icon}
          />
          <AntDesign name="delete" size={24} color="black" onPress={onHandleDelete} />
        </View>
        <Text style={styles.text}>
          {/* {usersData.name} */}
          {currentUserInfo?.firstName + ' ' + currentUserInfo?.lastName}
        </Text>
        {/* </ImageBackground> */}
        <DrawerItemList {...props} />
        <DrawerItem label="Log Out" onPress={onHandleLogout} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    resizeMode: 'contain',
  },
  imgView: {
    borderColor: 'black',
    height: 100,
    borderRadius: 100,
    borderWidth: 1,
    width: 100,
    resizeMode: 'contain',
  },
  icon: {
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

const DrawerComponent = props => {
  const [currentUserInfo, setCurrentUserInfo] = useState({});

  const findUser = (users, currentuser) => {
    // console.log('users', users);
    // console.log('currentuser', currentuser);
    const data = users.find(user => user.email === currentuser.email);
    setCurrentUserInfo(data);
  };

  // console.log('currentUserInfo', currentUserInfo);

  useEffect(() => {
    const getUserInfo = async () => {
      const stringifiedUsers = await AsyncStorage.getItem('users');
      const users = JSON.parse(stringifiedUsers);
      console.log('users', users);
      const stringifiedCurrentUsers = await AsyncStorage.getItem('currentuser');
      const currentuser = JSON.parse(stringifiedCurrentUsers);
      if (users.length > 0 && currentuser) {
        findUser(users, currentuser);
      }
    };
    getUserInfo();
  }, []);

  return (
    <Drawer.Navigator
      //screenOptions={{headerShown: false}}
      useLegacyImplementation
      initialRouteName="Home"
      drawerContent={props => (
        <CustomDrawerContent {...props} currentUserInfo={currentUserInfo} />
      )}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Profile-Update"
        component={ProfileUpdate}
        initialParams={currentUserInfo}
      />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
