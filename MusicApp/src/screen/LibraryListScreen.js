import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {categoryData} from '../../Data/CategoryData';

const LibraryListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={categoryData}
        //keyExtractor={item => item.value}
        renderItem={({item}) => {
          return (
            <View style={styles.dataView}>
              <TouchableOpacity>
                <View>
                  <Image style={styles.img} source={{uri: item.Image}} />
                  <Text style={styles.txt}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default LibraryListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  dataView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 15,
    borderColor: '#000',
    borderWidth: 1,
  },
  img: {
    height: 130,
    width: 130,
    borderRadius: 5,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'CormorantGaramond-MediumItalic'
  },
});
