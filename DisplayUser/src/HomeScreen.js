import {StyleSheet, View, Keyboard} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../component/SearchBar';
import NetInfo from '@react-native-community/netinfo';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../store/action';
import {useNetInfo} from '@react-native-community/netinfo';
import FlatListComponent from '../component/FlatListComponent';

const HomeScreen = ({navigation}) => {
  const [isOffline, setOfflineStatus] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      <FlatListComponent
        user={user}
        pageNumber={pageNumber}
        renderHeader={renderHeader}
        userData={userData}
        setPageNumber={setPageNumber}
        isLoading={isLoading}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
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
});
