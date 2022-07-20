import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import ModalComponent from '../../components/ModalComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FlatListComponent from '../../components/FlatlistComponent';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editId, setEditId] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        TODO <Text style={styles.innerTXT}>List</Text>
      </Text>

      <TouchableOpacity
        style={styles.addList}
        onPress={() => {
          setModalVisible(true)
        }}>
        <AntDesign name="plus" size={26} color="white" />
      </TouchableOpacity>

      <View style={styles.items}>
        {/* This is where the task is go! */}
        <FlatListComponent setModalVisible={setModalVisible} setEditId={setEditId} editId={editId}/>
      </View>

      {/* Modal */}
    
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTask}>
        <ModalComponent
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          setEditId={setEditId}
          editId={editId}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#dfd5e8',
    marginLeft: 20,
    marginTop: 20,
  },
  innerTXT: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#674ea7',
  },
  addList: {
    borderColor: '#dfd5e8',
    padding: 16,
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#674ea7',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
