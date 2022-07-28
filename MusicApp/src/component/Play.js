import React from 'react';
import { StyleSheet } from 'react-native';
import {Svg, Polygon} from 'react-native-svg';

const Play = ({onPlayerClick}) => {
  return ( 
    <Svg style={styles.svgView} viewBox="0 0 60 60" onClick={onPlayerClick}>
      <Polygon points="0,0 50,30 0,60" />
    </Svg>
  );
};

export default Play;

const styles = StyleSheet.create({
    svgView: {
        width: 200,
        height: 200,
    }
});