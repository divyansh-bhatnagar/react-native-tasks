import {StyleSheet, Text, View, Modal, ScrollView} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UpdateUserModal = (props) => {
 // console.log('props', props.currentUserInfo);
  return (
    <View>
      <Modal>
        <View style={styles.icon}>
          <Ionicons name="close" size={24} color="black" />
        </View>
        <ScrollView>
          <Text>UpdateUserModal</Text>

          <View style={styles.flTxt}>
            <TextInput
              style={styles.inputF}
              label="First-Name"
              mode="outlined"
            />
            <TextInput
              style={styles.inputL}
              label="Last-Name"
              mode="outlined"
            />
          </View>
          <TextInput
            style={styles.input}
            label="Address"
            mode="outlined"
            numberOfLines={5}
            multiline={true}
          />
          <TextInput
            style={styles.input}
            label="Contact"
            mode="outlined"
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            label="Email"
            mode="outlined"
            keyboardType="email-address"
          />
          <Button style={styles.btn} mode="contained" onPress={() => {}}>
            Update
          </Button>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default UpdateUserModal;

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginTop: 20,
  },
  flTxt: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inputF: {
    marginTop: 20,
    //marginBottom: 20,
    alignSelf: 'center',
    width: 150,
  },
  inputL: {
    marginTop: 20,
    //marginBottom: 20,
    alignSelf: 'center',
    width: 150,
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
