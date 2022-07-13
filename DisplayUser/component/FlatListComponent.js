import {View, Text, StyleSheet, FlatList, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../store/action';

const FlatListComponent = props => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
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
  const handleEndReached = () => {
    if (user.total_pages > props.pageNumber) {
      props.setPageNumber(props.pageNumber + 1);
    }
  };

  const handleListFooter = () => {
    props.isLoading ? (
      <ActivityIndicator animating size="large" color="green" />
    ) : null;
  };

  return (
    <View>
      <FlatList
        keyboardShouldPersistTaps="always"
        ListHeaderComponent={props.renderHeader}
        contentContainerStyle={styles.contentContainer}
        data={props.userData}
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
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={handleListFooter}
      />
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  dataView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderBottomColor: '#bebebe',
    borderBottomWidth: 1,
  },
  image: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
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
  innerText: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTime: {
    marginTop: 5,
  },
  msg: {
    fontSize: 12,
  },
});
