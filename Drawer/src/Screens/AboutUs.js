import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>#Nothing</Text>
        <View style={styles.midContainer}>
          <Image
            source={require('../../assets/images/auLogo.jpg')}
            style={styles.img}
          />
          <Text style={styles.body}>
            <Text style={{color: '#F58220'}}>Agile</Text>, A Process Delivering
            Values and Successful Products
          </Text>
          <View>
            <Text style={{color: 'purple', textAlign: 'center', fontSize: 18, marginTop: 15, marginBottom: 15}}>Our story</Text>
            <Text>
              We are working with our products and services. We will continue to
              provide services to you android applications.
            </Text>
          </View>
          <View>
            <Image style={styles.reviewimg} source={require('../../assets/images/review.png')} resizeMode='center' />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  midContainer: {},
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  img: {
    alignSelf: 'center',
    width: 400,
    height: 200,
  },
  body: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Roboto-Italic',
    marginBottom: 10,
  },
  reviewimg: {
    marginTop: -50,
    alignSelf: 'center',
    width: 350,
    height: 200,
    resizeMode: 'fit',
  },
});
