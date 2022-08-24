import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatListComponent from '../Components/FlatListComponent'
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
     <FlatListComponent />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})