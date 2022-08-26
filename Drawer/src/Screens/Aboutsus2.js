import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Aboutsus2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Hey From About 2</Text>
      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => navigation.navigate('About3')}>
        AboutUs 3
      </Button>
    </View>
  );
};

export default Aboutsus2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
