import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Aboutus3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Hey From About 3</Text>
      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => navigation.navigate('About')}>
        AboutUs
      </Button>
    </View>
  );
};

export default Aboutus3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
