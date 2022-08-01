import {
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

const RenderData = [
  {
    id: 1,
    title: 'Add to playlist',
  },
  {
    id: 2,
    title: 'Add to queue',
  },
  {
    id: 3,
    title: 'View album',
  },
  {
    id: 4,
    title: 'Create ringtone',
  },
  {
    id: 5,
    title: 'Sleep timer',
  },
  {
    id: 6,
    title: 'Share',
  },
  {
    id: 7,
    title: 'Report',
  },

];

const ModalComponent = props => {
  return (
    <View style={styles.centeredView}>
      <Modal
        //style={styles.modalView}
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}>
          <TouchableOpacity
          style={styles.close}
          onPress={() => {
            props.setModalVisible(false);
          }}>
            <Octicons name="dash" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.modalView}>
          <View style={styles.modal}>
            <FlatList
            data={RenderData}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({item}) => {
                return (
                  <View style={styles.flatData}>
                    <TouchableOpacity style={styles.touchStyle} onPress={() => {}}>
                      <Text style={styles.itemText}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
      justifyContent: 'center',
      alignItems: 'center',
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'black',
    height: '80%',
    width: '90%',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal: {
    borderColor: '#000',
    borderWidth: 1,
    height: '100%',
    width: '100%',
    margin: 15,
    marginTop: 20,
    backgroundColor: 'black',
    padding: 20,
  },
  close: {
    // borderColor: '#fff',
    // borderWidth: 1,
    height: 20,
    width: 350,
    right: 0,
    marginTop: 50,
    paddingRight: 10,
    position: 'relative',
  },
  icon: {
    textAlign: 'center',
  },
  flatData: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 100,
    // width: 200,
    padding: 10,
  },
  itemText: {
    fontSize: 25,
    color: 'white',
  },
  separator: {
    borderWidth: 0.5,
    borderColor: '#393E46',
  },
  touchStyle: {
    borderColor: '#000',
    borderWidth: 1,
  },
});
