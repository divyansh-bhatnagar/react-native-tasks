import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>NOTHING</Text>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            }}
            style={styles.mainImg}
          />
          {/* <Text style={styles.mainText}>
            Agile
          </Text>
          <Text>
          , A Process Delivering Values & Successful Products
          </Text> */}
        </View>
      </ScrollView>
      <View style={styles.footerView}>
        <Image
          style={styles.img}
          source={require('../../assets/images/footercompany.png')}
        />

        <Image
          style={styles.img}
          source={require('../../assets/images/fotterinfo.png')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F58220',
  },
  mainImg: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
    //resizeMode: 'contain',
  },
  footerView: {
    width: '100%',
    height: 120,
    bottom: 0,
    backgroundColor: 'black',
  },
  img: {
    alignSelf: 'center',
    width: '100%',
    height: 60,
    resizeMode: 'contain',
  },
});
