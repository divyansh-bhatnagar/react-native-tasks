import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo, editTodo, toggleTodo} from '../src/store/action';

const Tasks = props => {
  //const [taskArray, setTaskArray] = useState([]);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  console.log('props', props.taskItem.task);
  return (
    <View style={styles.container}>
      <CheckBox
        value={props.taskItem.completed}
        onValueChange={() => {
          dispatch(toggleTodo(props.taskItem.id, !props.taskItem.completed));
        }}
      />
      <View style={styles.item}>
        <View style={styles.itemInnerView}>
          <Text style={[styles.txt, {textDecorationLine: props.taskItem.completed ? 'line-through' : 'none'}]}>{props.taskItem.task}</Text>
        </View>
      </View>
      <Feather
        name="edit"
        size={24}
        color="green"
        onPress={() => {
          props.setModalVisible(true);
          props.setEditId(props.taskItem.id);
        }}
      />
      <AntDesign
        name="delete"
        size={24}
        color="red"
        onPress={() => {
          dispatch(deleteTodo(props.taskItem.id));
        }}
      />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 260,
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
    borderBottomColor: '#E0B0FF',
    borderBottomWidth: 1,
    elevation: 5,
  },
  item: {
    width: 150,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    color: '#674ea7',
    fontSize: 15,
  },
  itemInnerView: {
    marginRight: 10,
    marginLeft: 10,
  },
});
