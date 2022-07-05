import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Keyboard,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

import SearchBar from '../component/SearchBar';

import NetInfo from '@react-native-community/netinfo';
import filter from 'lodash.filter';

import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../store/action';

import {useNetInfo} from '@react-native-community/netinfo';

const HomeScreen = ({navigation}) => {
  const [isOffline, setOfflineStatus] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [outterLoading, setOutterLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);

  const NetInfoStatus = useNetInfo(); //declare the constant connected with a boolean value

  //Api call to get user data
  useEffect(() => {
    setIsLoading(true);
    dispatch(getUser(pageNumber));
  }, [pageNumber]);

  //after getting user data from api call, set user data to state and append to existing data.
  useEffect(() => {
    if (user !== null) {
      if (user.data.length > 0 && userData.length === 0) {
        setUserData(user.data);
      } else if (user.data.length > 0 && userData.length > 0) {
        setUserData([...userData, ...user.data]);
      }
      console.log('userData', userData);
    }
    setIsLoading(false);
  }, [user]);

  //useEffect to check search query and filter user data
  useEffect(() => {
    if (searchQuery.length === 0 && user !== null && user.data.length > 0) {
      setUserData(user.data);
      Keyboard.dismiss();
    }
  }, [searchQuery]);

  //useEffect to check net info status and set isOffline state
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
  }, []);

  //Getting date
  let today = new Date();
  let date =
    today.getDate() +
    '-' +
    parseInt(today.getMonth() + 1) +
    '-' +
    today.getFullYear();

  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var time = hours + ':' + min;

  //function to check if data is loading or not
  const handleEmpty = () => {
    return <Text style={styles.title}> No Data is Fetched from API !</Text>;
  };

  //function for ListHeaderComponent in FlatList.
  const renderHeader = (
    <SearchBar
      query={searchQuery}
      setSearch={userInfo => setSearchQuery(userInfo)}
      onSearchPress={() => {
        if (searchQuery.length > 0) {
          const filteredData = userData.filter(item =>
            item.first_name.toLowerCase().includes(searchQuery.toLowerCase()),
          );
          setUserData(filteredData);
        }
        Keyboard.dismiss();
      }}
    />
  );
  return (
    <View>
      <View
        style={[
          styles.dot,
          {backgroundColor: NetInfoStatus.isConnected ? 'green' : 'red'},
        ]}></View>
      {/* change boolean value to change color of dot */}
      <FlatList
        keyboardShouldPersistTaps="always"
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.contentContainer}
        data={userData}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={handleEmpty}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <View style={styles.dataView}>
                <Image style={styles.image} source={{uri: item.avatar}} />
                <View style={styles.name}>
                  <View style={styles.innerText}>
                    <Text style={styles.flname}>
                      {item.first_name} <Text>{item.last_name}</Text>{' '}
                    </Text>
                    <Text style={styles.dateTime}>{date}</Text>
                  </View>
                  <Text style={styles.msg}>Yes, i'll update you soon!</Text>
                </View>
              </View>
            </View>
          );
        }}
        onEndReached={() => {
          if (user.total_pages > pageNumber) {
            setPageNumber(pageNumber + 1);
          }
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          isLoading ? (
            <ActivityIndicator animating size="large" color="green" />
          ) : null
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'relative',
    marginLeft: 5,
    top: 10,
    zIndex: 1,
    elevation: 1,
  },
  dataView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderBottomColor: '#bebebe',
    borderBottomWidth: 1,
  },
  msg: {
    fontSize: 12,
  },

  image: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  innerText: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    marginTop: 5,
    width: '70%',
    marginLeft: 15,
    height: 50,
  },
  flname: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
  },
  dateTime: {
    marginTop: 5,
  },
  contentContainer: {
    paddingBottom: 100,
  },
});
