import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';

const AboutUs = () => {
  const [name, setName] = useState('Divyansh Bhatnagar');
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
            <Text
              style={{
                color: 'purple',
                textAlign: 'center',
                fontSize: 18,
                marginTop: 15,
                marginBottom: 15,
              }}>
              Our story
            </Text>
            <Text>
              We are working with our products and services. We will continue to
              provide services to you android applications.
            </Text>
          </View>
          <View>
            <Image
              style={styles.reviewimg}
              source={require('../../assets/images/review.png')}
              resizeMode="center"
            />
            <TextInput
              style={styles.input}
              label="Name"
              mode="outlined"
              value={name}
              onChange={(name) => setName(name)}
            />
            <Button
              style={styles.btn}
              mode="contained"
              onPress={() => navigation.navigate('About1', {name: name})}>
              Pass to Aboutsus1
            </Button>
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
    backgroundColor: 'white',
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
  input: {
    marginTop: 20,
    //marginBottom: 20,
    alignSelf: 'center',
    width: 250,
  },
  btn: {
    alignSelf: 'center',
    marginTop: 20,
    width: 250,
  },
});
