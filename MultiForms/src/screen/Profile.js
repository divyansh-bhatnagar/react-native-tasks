import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import RadioButtonRN from 'radio-buttons-react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import dataGender from '../Data/DataItem2';

const Profile = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.input}>
          <FloatingLabelInput
            label="First Name"
            //value="Divyansh"
            onChangeText={text => console.log(text)}
            style={styles.input}
            customLabelStyles={styles.customLabelStyles}
            labelStyles={styles.labelStyles}
          />
        </View>
        <View style={styles.input}>
          <FloatingLabelInput
            label="Last Name"
            //value="Bhatnagar"
            onChangeText={text => console.log(text)}
            customLabelStyles={styles.customLabelStyles}
            labelStyles={styles.labelStyles}
          />
        </View>
        <View style={styles.input}>
          <FloatingLabelInput
            label="Enter Age"
            //value="24"
            onChangeText={text => console.log(text)}
            customLabelStyles={styles.customLabelStyles}
            labelStyles={styles.labelStyles}
          />
        </View>
        <View style={styles.input}>
          <RadioButtonRN
            data={dataGender}
            key={dataGender.id}
            selectedBtn={e => console.log(e)}
            // icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
          />
        </View>
        <View >
            <TouchableOpacity style={styles.imgPicker}>
            <Entypo name="upload" size={35} color="black" />
            <Text>Upload / Capture Image</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View>
        <Button title='Next'/>
      </View>
    </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
  },
  innerContainer: {},
  input: {
    marginBottom: 10,
  },
  customLabelStyles: {
    colorFocused: 'red',
    fontSizeFocused: 12,
  },
  labelStyles: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
    imgPicker: {
        backgroundColor: '#fff',
        borderColor: '808080',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10,

    },
});
