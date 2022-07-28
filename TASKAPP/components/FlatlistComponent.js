import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import Empty from './Empty';
import Tasks from './Task';
import {useSelector, useDispatch} from 'react-redux';

const FlatlistComponent = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.reducer.todos);

  console.log('todos from flatlistcomponent', todos);

  const renderList = ({item}) => {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}  behavior={Platform.OS === "ios" ? "padding" : "height"}>
       
        <Tasks taskItem={item} setModalVisible={props.setModalVisible} setEditId={props.setEditId} editId={props.editId}/>
        
      </View>
    );
  };
  return (
    <View>
      <FlatList
        ListEmptyComponent={<Empty />}
        data={todos}
        renderItem={renderList}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export default FlatlistComponent;

const styles = StyleSheet.create({});
