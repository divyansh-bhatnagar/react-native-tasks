import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  Slider,
} from 'react-native';
import React, {useState} from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import RadioButtonRN from 'radio-buttons-react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
import dataStatus from '../Data/DataItem';
import DataProfession from '../Data/DataProfession';
import DataHobby from '../Data/DataHobby';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import {ColorPicker} from 'react-native-color-picker';

const Detail = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  return (
    <ScrollView nestedScrollEnabled={true} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.input}>
            <RadioButtonRN
              data={dataStatus}
              key={dataStatus.id}
              selectedBtn={e => console.log(e)}
              // icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>
          <View style={styles.input}>
            <FloatingLabelInput
              label="Address"
              multiline={true}
              numberOfLines={4}
              onChangeText={text => console.log(text)}
              style={styles.input}
              customLabelStyles={styles.customLabelStyles}
              labelStyles={styles.labelStyles}
            />
          </View>
          <View style={styles.input}>
            <RadioButtonRN
              data={DataProfession}
              key={DataProfession.id}
              selectedBtn={el => console.log(el)}
              // icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
            />
          </View>
          <View style={[styles.input, {flexDirection: 'row'}]}>
            <DropDownPicker
              key={DataHobby.values}
              multiple={true}
              min={0}
              max={5}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          <View style={styles.input}>
            <Button title="DOB" onPress={() => setOpen(true)} />
            <DatePicker
              theme="auto"
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <View style={styles.input}>
            <Button title="BirthTime" onPress={() => setOpen(true)} />
            <DatePicker
              theme="auto"
              mode="time"
              modal
              open={open}
              date={time}
              onConfirm={date => {
                setOpen(false);
                setTime(time);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <View style={styles.input}>
            <ColorPicker    
              onColorSelected={color => alert(`Color selected: ${color}`)}
              style={{flex: 1, height: 200, width: 200, borderWidth: 1, borderColor: '#000'}}
            />
          </View>

          <View>
            <TouchableOpacity style={styles.imgPicker}>
              <Entypo name="upload" size={35} color="black" />
              <Text>Upload / Capture Image</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Button title="Next" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;

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
