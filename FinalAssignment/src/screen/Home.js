import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import baseUrl from '../Api/Data';
import FlatListComponent from '../component/FlatListComponent';

const Home = () => {

  return (
    <View style={styles.container}>
     <FlatListComponent />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})