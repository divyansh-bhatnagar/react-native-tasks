import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Empty() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/list.png')}
        style={styles.image}
        resizeMode="contain"
       // blurRadius={3}
      />
      {/* <Text style={styles.text}>Add TODO's!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 120,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#674ea7',
  },
});
