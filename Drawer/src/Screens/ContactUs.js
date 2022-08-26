import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, TextInput} from 'react-native-paper';

const ContactUs = () => {
  const navigation = useNavigation();

  const initialState = {
    FullName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [users, setUsers] = useState(initialState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>How can we help ? </Text>
      <ScrollView>
        <TextInput
          style={styles.input}
          name="FullName"
          label="FullName"
          mode="outlined"
          value={'Divyansh Bhatnagar'}
          onChange={() => {}}
        />

        <TextInput
          style={styles.input}
          name="email"
          label="Email"
          mode="outlined"
          keyboardType="email-address"
          onChange={() => {}}
          value={'divyansh.bhatnagar@bacancy.com'}
        />

        <TextInput
          style={styles.input}
          name="phone"
          label="Contact"
          mode="outlined"
          keyboardType="number-pad"
          onChange={() => {}}
          value={'+91 9409272958'}
        />

        <TextInput
          style={styles.input}
          name="message"
          label="Message"
          mode="outlined"
          numberOfLines={4}
          multiline={true}
          onChange={() => {}}
          value={"Hello I am Divyansh Bhatnagar,Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        />

        <Button style={styles.btn} mode="contained" onPress={() => {}}>
          INQUIRE NOW
        </Button>
      </ScrollView>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F58220',
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

  txt: {
    fontSize: 16,
  },
  lgtxt: {
    fontSize: 18,
    color: '#00aaff',
  },
});
