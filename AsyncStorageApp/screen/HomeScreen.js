import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

//import {Screenshot} from '../assets/images/screenshot.png';

//import FlatListData from '../Data/DUMMY_DATA';

import AntDesign from 'react-native-vector-icons/AntDesign';

FlatListData = [
    {
      id: 1,
      title: 'shoes',
      photo: require("../assets/images/shoe.jpg"),
      description: 'The shoes are in multicolor and its unisex.',
    },
    {
      id: 2,
      title: 'BagPack',
      photo: require("../assets/images/bag.jpg"),
      description:
        'The Bag is for tracking with sleeping-bag and contains two days equipment within it and its unisex.',
    },
    {
      id: 3,
      title: 'Dress',
      photo: require("../assets/images/dress.jpg"),
      description: 'Cute pretty red dress.',
    },
    {
      id: 4,
      title: 'Formal outfit for men',
      photo: require("../assets/images/menformal.jpg"),
      description:
        'Its formal outfit dress code for formal lovers with watch , wallet , shirt and jeans.',
    },
    {
      id: 5,
      title: 'Formal outfit for women',
      photo: require("../assets/images/womenformal.jpg"),
      description:
        'Its formal outfit dress code for formal lovers with women shirt, jeans and belly-shoes.',
    },
    {
      id: 6,
      title: 'Watch',
      photo: require("../assets/images/watch.jpg"),
      description: 'Its wrist watch with analog functionality.',
    },
  ];
  

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <FlatList
        data={FlatListData}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={element => {
          return (
            <View style={styles.container}>
              <View style={styles.innerContainer}>
                <View>
                    <Image source={(element.item.photo)} style={{
                    height: 100,
                    width: 100,
                    margin: 5,
                  }}/>
                </View>
                <View style={styles.text}>
                  <Text style={styles.title}>{element.item.title}</Text>
                  <Text>{element.item.description}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <AntDesign name="pluscircleo" size={40} color="#ABEABE"  />
          </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  separator: {
    borderColor: '#dddddd',
    borderWidth: 1,
    margin: 5,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  text: {
    margin: 5,
    flex: 1,
    flexDirection: 'column',
    fontSize: 16,
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    padding: 10,
  },
});
