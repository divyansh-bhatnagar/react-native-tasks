import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({query, setSearch, onSearchPress}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        {/* i've used icon and made it pressable for search . */}
        <TouchableOpacity onPress={onSearchPress}>
          <MaterialIcons
            name="person-search"
            color="#585858"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="search"
          autoCapitalize="none"
          //clearButtonMode='always'
          value={query}
          onChangeText={setSearch}
          autoCorrect={false}
          style={styles.inputText}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    borderRadius: 25,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    height: 40,
    alignItems: 'center',
    marginHorizontal: 15,
    flexDirection: 'row-reverse',
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  inputText: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
  },
});
