import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MainModal = props => {
  return (
    <View style={styles.centeredView}>
      <Modal
        style={{height: 350, width: 350}}
        transparent={true}
        animationType="slide"
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setModalVisible(!props.modalVisible);
        }}>
        <View style={styles.modalView}>
          <AntDesign
            name="close"
            size={24}
            color="#2196F3"
            style={styles.buttonClose}
            onPress={() => props.setModalVisible(false)}
          />
          <View style={styles.modal}>
            <View style={styles.txtInp}>
              <TextInput style={styles.modalInput} placeholder="Enter Quote" />
              <TextInput style={styles.modalInput} placeholder="Enter Author" />
            </View>
            <View style={styles.modalButton}>
              <TouchableOpacity
                onPress={() => {
                  props.setModalVisible(false);
                }}>
                <Text style={styles.modalButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MainModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 15,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: 'black',
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
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  txtInp: {
    position: 'relative',
    marginBottom: 10,
    marginVertical: 10,
  },
  modalInput: {
    width: 250,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonText: {
    fontSize: 15,
    color: 'white',
  },
});
