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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const ModalComponent = props => {
  return (
    <View style={styles.centeredView}>
      <Modal
        style={styles.modalVView}
        animationType="slide"
        //transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}>
        <View style={styles.modalView}>
          <View style={styles.modal}>
            <FlatList
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={() => {
                return (
                  <View style={styles.flatData}>
                    <TouchableOpacity>
                      <Text style={styles.itemText}>Add to playlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.itemText}>Add to queue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.itemText}>View album</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.itemText}>Create ringtone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.itemText}>Sleep timer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.itemText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.itemText}>Report</Text>
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
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalVView: {
    height: 250,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 15,
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  modal: {
    margin: 15,
    marginTop: 20,
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  flatData: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    //padding: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});
