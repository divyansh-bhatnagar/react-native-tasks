import {
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, editTodo} from '../src/store/action';

const ModalComponent = props => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.reducer.todos);
  const [task, setTask] = useState('');
  //console.log('task:', task);

  const todosData = {
    task: task,
    id: props.editId,
  };

  useEffect(() => {
    if (props.editId) {
      setTask(todos.find(item => item.id === props.editId).task);
    }
  }, [todos, props.editId]);

  return (
    <View style={styles.centeredView}>
      <Modal
        style={styles.modalVView}
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(false);
        }}>
        <View style={styles.modalView}>
          <AntDesign
            name="close"
            size={24}
            color="#674ea7"
            style={styles.buttonClose}
            onPress={() => props.setModalVisible(false)}
          />
          <View style={styles.modal}>
            <View style={styles.imgView}>
              <Image
                source={require('../assets/image/listModal.jpg')}
                blurRadius={3}
                style={styles.img}
              />
            </View>
            <Text style={styles.HeadTxt}>TODO</Text>
            {/* Write a task */}
            <TextInput
              disabled={task.length > 0 ? true : false}
              placeholder="Here write Task"
              style={styles.modalInput}
              value={task} //for see the realtime changes.
              onChangeText={text => {
                //grab the text and then we set the tasks to be that text.
                setTask(text);
              }}
            />
            <View style={styles.icon}>
              {props.editId ? (
                <TouchableOpacity style={styles.addList}>
                  <Feather
                    name="edit"
                    size={26}
                    color="white"
                    onPress={() => {
                      dispatch(editTodo(todosData));
                      props.setModalVisible(false);
                      setTask('');
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.addList}>
                  <AntDesign
                    name="plus"
                    size={26}
                    color="white"
                    onPress={() => {
                      dispatch(addTodo(task));
                      props.setModalVisible(false);
                      setTask('');
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalVView: {
    height: 250,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  addList: {
    backgroundColor: '#674ea7',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 10,
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
  HeadTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#674ea7',
    marginTop: 10,
    marginBottom: 20,
  },
  TextInput: {
    marginBottom: 10,
    marginVertical: 10,
  },
  modalInput: {
    width: 250,
    borderColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
