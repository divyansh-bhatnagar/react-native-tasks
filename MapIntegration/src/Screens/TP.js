import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TP = () => {

    const fetchAndCheck = () => {
        try{
          fetch('https://apidev.moxieuniverse.com/api/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              ApiData: 'ApiData',
            }),
          });
        }catch(e) {
          console.error("error : ", e);
        }
       };

       console.log('FetchedData', JSON.stringify(fetchAndCheck, null, 2));

  return (
    <View>
      <Text>TP</Text>
    </View>
  )
}

export default TP

const styles = StyleSheet.create({})