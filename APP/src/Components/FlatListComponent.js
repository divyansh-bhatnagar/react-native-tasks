import {StyleSheet, FlatList, Image, View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import baseUrl from '../Api/Data';
import {useSelector, useDispatch} from 'react-redux';
import {selectedItem} from '../../src/Store/action';

const FlatListComponent = () => {
  const dispatch = useDispatch();
  const selectedItemsArray = useSelector(state => state.reducer.selecteditems);

  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const DataArray = () => {
    const tempDisplayData = data.map(post => {
      const requiredImage = imgData.find(img => img.id === post.id);
      return {
        ...post,
        image: requiredImage.url,
      };
    });
    setDisplayData(tempDisplayData);
  };

 // console.log('third state: ', JSON.stringify(displayData, null, 2));

  const getData = async () => {
  //  console.log('heyy from getData');
    try {
      const responseImg = await axios.get(`${baseUrl}/photos`);
      const filteredImg = responseImg.data.filter(img => img.id <= 100);
      // console.log('responseImg', JSON.stringify(responseImg.data, null, 2));
      setImgData(filteredImg);
    } catch (error) {
    //  console.log(error);
    }
  };

  const fetchData = async () => {
    //console.log('heyyyy');
    try {
      const response = await axios.get(`${baseUrl}/posts`);
      // console.log('res', JSON.stringify(response.data, null, 2));
      const dataS = response.data;
      // console.log('data:', JSON.stringify(dataS, null, 2));
      setData(dataS);
    } catch (error) {
    //  console.log('error', error);
    }
  };

  //console.log('data state:', JSON.stringify(data, null, 2));

  useEffect(() => {
    getData();
    fetchData();
  }, []);

  const onHandleAddSelectedItem = item => {
    dispatch(selectedItem(item));
  };

 // console.log('selectedItemsArray: ', selectedItemsArray);

  useEffect(() => {
    if (data.length > 0 && imgData.length > 0) {
      DataArray();
    }
  }, [data, imgData]);

  const renderData = ({item}) => {
   // console.log('item data: ', item.title +  " " + item.body);
   // console.log('value', JSON.stringify(item, null, 2));
    return (
      <View style={styles.FLView}>
      <Text>Hello</Text>
        <View>
          <Image source={{uri: item?.image}} style={styles.FLImage} />
          <Text style={styles.titText}>{item?.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            onHandleAddSelectedItem(item);
          }}>
          <Text style={styles.txt}>{item?.body}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.main}>
     <Text>Hello</Text>
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={displayData}
      renderItem={renderData}
      keyExtractor={(item) => item?.id}
    />
  </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  main: {
    // flex: 1,
   // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  txt: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
    alignItems: 'center',
  },
  titText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
  },
  FLView: {
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingVertical: 40,
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  FLImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingBottom: 100,
  },
});
