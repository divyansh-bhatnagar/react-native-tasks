import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {musiclibrary} from '../../Data/data';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

const TrackList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <LinearGradient
          colors={['#2C3E50', '#FD746C', '#C481A7', '#000']}
          style={styles.linearGradient}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1558724040-9de64afade55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            }}
            style={styles.img}
          />
        </LinearGradient>
      </View>
      <TouchableOpacity style={styles.touchText}>
        <Entypo
          name="shuffle"
          size={24}
          color="white"
          style={styles.shuffleButton}
        />
      </TouchableOpacity>
      <View style={styles.colorBG}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={musiclibrary}
          keyExtractor={item => item.url}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <View style={styles.containerFL}>
                  <View style={styles.innerFL}>
                    <Image
                      source={{uri: item.artwork}}
                      style={styles.imgSong}
                    />
                    <View>
                      <Text style={styles.musicTitle}>{item.title}</Text>
                      <Text style={styles.artisteTitle}>{item.artist}</Text>
                    </View>
                    <Entypo
                      name="dots-three-vertical"
                      size={18}
                      color="#777577"
                      style={styles.dot}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default TrackList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imgView: {
    alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center',
  },
  linearGradient: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
  touchText: {
    position: 'relative',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shuffleButton: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    borderRadius: 40,
    padding: 12,
    backgroundColor: '#1DB954',
    textAlign: 'center',
  },
  colorBG: {
    flex: 1,
  },
  containerFL: {
    flex: 1,
  },
  innerFL: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatList: {
    padding: 10,
    flexGrow: 1,
    justifyContent: 'center',
  },
  imgSong: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  dot: {
    position: 'absolute',
    right: 0,
  },
  musicTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '500',
    marginTop: 12,
    marginHorizontal: 20,
    marginBottom: 1,
  },
  artisteTitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginHorizontal: 20,
    marginBottom: 12,
    marginTop: 1,
  },
});
