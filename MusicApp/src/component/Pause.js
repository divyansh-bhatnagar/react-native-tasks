import React from 'react';
import {Svg, Polygon} from 'react-native-svg';

const Pause = ({onPlayerClick}) => {
  return (
    <Svg viewBox="0 0 60 60" onClick={onPlayerClick}>
      <Polygon points="0,0 15,0 15,60 0,60" />
      <Polygon points="25,0 40,0 40,60 25,60" />
    </Svg>
  );
};

export default Pause;
