import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Aboutus1 = ({route}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text>Hey From About 1</Text>
        <Text style={styles.text}>{route.params.name}</Text>
        <Button
          style={styles.btn}
          mode="contained"
          onPress={() => navigation.navigate('About2')}>
          AboutUs 2
        </Button>
      </View>
    </View>
  );
};

export default Aboutus1;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: 20,
  },
  text: {
    margin: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
