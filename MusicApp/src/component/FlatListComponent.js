import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Animated,
  Share,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {musiclibrary} from '../../Data/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import ModalComponent from '../component/ModalComponent';

const FlatListComponent = (props) => {

  return (
    <View>
      <Animated.FlatList
        ref={props.songSlider}
        data={props.musiclibrary}
        keyExtractor={item => item.url}
        renderItem={props.renderItem}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16} // This is the number of milliseconds between each scroll event.
        //onScroll is called when the scroll position changes.
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: props.ScrollX,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
      />
    </View>
  );
};

export default FlatListComponent;
