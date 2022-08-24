import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectedItem} from '../../src/store/actions';

const Result = () => {
  const selectedItemsArray = useSelector(state => state.reducer.selecteditems);
 // console.log('selectedItemsArray from result', JSON.stringify(selectedItemsArray, null, 2));

const renderData = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.titText}>{item.title}</Text>
      <Text style={styles.text}>{item.body}</Text>
    </View>
  );
}

  return (
    <View>
      <FlatList 
        data={selectedItemsArray}
        renderItem={renderData}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
  titText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop : 20,
  },
});
