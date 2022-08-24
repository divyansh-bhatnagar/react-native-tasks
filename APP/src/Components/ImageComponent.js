import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo';

const ImageComponent = (props) => {
 // const [modalVisible, setModalVisible] = useState(false);
 const [image, setImage] = useState('');

 const {setModalVisible, modalVisible, onImageHandler} = props;

 // const fileSelected = images => {};

 const onHandleUpdateFromCamera = () => {
  ImageCropPicker.openCamera({
    width: 300,
    height: 300,
    cropping: true,
    freeStyleCropEnabled: true,
  })
    .then((img) => {
      setImage(img);
      onImageHandler(img);
    //  console.log(img);
    })
    .catch(error => {
      console.log('error: ', error);
    });
};

  const onHandleUpdateFromGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      freeStyleCropEnabled: true,
    })
      .then(img => {
        setImage(img);
        onImageHandler(img);
      //  console.log(img);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  };
  return (
    <View style={styles.modal}>
      <Modal style={styles.modalContainer} visible={modalVisible}>
      <Entypo name="cross" size={35} color="black" onPress={() => setModalVisible(false)} style={styles.cancel}/>
      <View>
        <TouchableOpacity style={styles.tp} onPress={onHandleUpdateFromCamera}>
        <Entypo name="camera" size={24} color="black" />
          <Text style={styles.text}>Take a picture</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.cfg}
          onPress={onHandleUpdateFromGallery}>
            <Entypo name="folder-images" size={24} color="black" />
          <Text style={styles.text}>choose From Gallery</Text>
        </TouchableOpacity>
      </View>
      </Modal>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
   modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 500,
    width: 300,
   },
   cancel: {
    alignSelf: 'flex-end',
   },
  tp: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#D3D3D3',
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  cfg: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#D3D3D3',
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
});
