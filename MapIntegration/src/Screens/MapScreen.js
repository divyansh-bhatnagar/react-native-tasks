import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Polyline} from 'react-native-maps';
// import Entypo from 'react-native-vector-icons/Entypo';
import {data} from '../Api/StaticData';
import {useDispatch, useSelector, Provider} from 'react-redux';

const MapScreen = () => {
  const [mapArray, setMapArray] = useState([]);

  // console.log('mapArray', mapArray);

  const {accessToken} = useSelector(state => state.reducer);

  const gettingMapCordinates = async accessToken => {
    console.log('accessToken from map.js', accessToken);
    try {
      const response = await fetch(
        'https://apidev.moxieuniverse.com/api/service-territories/sales-office/39',
        {
          headers: {Authorization: `Bearer ${accessToken}`},
        },
      );
      const mapData = await response.json();
      //console.log('mapData:', mapData);
      setMapArray(mapData.data);
    } catch (err) {
      console.log('err:', err);
    }
  };

  useEffect(() => {
    if (accessToken) {
      gettingMapCordinates(accessToken);
    }
  }, [accessToken]);
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>MAP Demo</Text>

      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: 37.785834,
          longitude: -122.406417,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {mapArray.length > 0 &&
          mapArray.map((item, index) => {
            console.log('cordinates', item.coordinates);
     
            return (
              <Polyline
                key={index}
                coordinates={item.coordinates } 
                strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                strokeWidth={6}
              />
            );
          })}
           {/* <Polyline
               
                coordinates={[
                  {
                      "latitude": 40.699745012535615,
                      "longitude": -112.0918281929602
                  },
                  {
                      "latitude": 40.69972534792287,
                      "longitude": -112.09000706888946
                  },
                  {
                      "latitude": 40.69814171492327,
                      "longitude": -112.08997754445956
                  },
                  {
                      "latitude": 40.698154126023844,
                      "longitude": -112.09183094014556
                  }
              ]}
                strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
               
                strokeWidth={6}
              />
               <Polyline
               
                coordinates={[
                  {
                      "latitude": 43.41454416763279,
                      "longitude": -80.54484989972298
                  },
                  {
                      "latitude": 43.41484811060232,
                      "longitude": -80.54320838780586
                  },
                  {
                      "latitude": 43.41289973178036,
                      "longitude": -80.5421891483802
                  },
                  {
                      "latitude": 43.412814001672416,
                      "longitude": -80.54438855977241
                  }
              ]}
                strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
               
                strokeWidth={6}
              /> */}
           
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    textAlign: 'center',
    fontSize: 20,
  },
  mapView: {
    height: '100%',
    width: '100%',
  },
  marker: {
    height: 50,
    width: 50,
  },
});
