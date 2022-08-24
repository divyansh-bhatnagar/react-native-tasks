import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import baseUrl from '../Api/Data';
import axios from 'axios';

const FlatListComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    console.log('heyyyy');
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    console.log('res', response);
    const dataS = response.data;
    console.log('data:', dataS);
    setData(dataS);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderData = ({item}) => {
    return (
      <View style={styles.FLView}>
        <TouchableOpacity>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={baseUrl}
        renderItem={renderData}
        key={item => item.id}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  FLView: {
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 40,
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  contentContainer: {
    paddingBottom: 100,
  },
});
