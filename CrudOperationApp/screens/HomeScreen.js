import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import quotesData from '../Data/DUMMY_DATA';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MainModal from '../component/MainModal';
import QuoteTask from './QuoteTask';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quoteId, setQuoteId] = useState(1);
  const [quotesItems, setQuoteItems] = useState([]);
  const [quoteItem, setQuoteItem] = useState(null);
  const [author, setAuthor] = useState(null);

  //add task to the Flatlist
  const renderList = ({item, index}) => {
    return (
      <View style={{backgroundColor: generateColor(), padding: 10}}>
        <Text style={styles.quote}>{item.text}</Text>
        <Text style={styles.author}> ~ {item.author}</Text>
      </View>
    );
  };

  //Generating random color for each quote
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };
  console.log('Data: ', quotesData);

  const handleAddUpdateQuote = () => {
    const quoteItems = quotesData.find(item => item.id === quoteId);
    console.log('quoteItems: ', quoteItems);
    if (quoteId) {
      setQuoteItemsquoteItems(
        quoteItems.map(item => {
          if (item.id === quoteId) {
            return {
              ...item,
              text: quoteItems,
            };
          }
        }),
      );
    }
  };

  // const addQuote = () => {
  //   const newquote = quotesData.find(quote => quote.id === quoteId);
  //   if(newquote) {
  //     setQuoteItems([...quotesItems, newquote]);
  //     setQuoteId(quoteId + 1);
  //   }else{
  //     alert('Quote not found');
  //   }
  // }

  const editQuote = () => {
    const newquote = quotesData.find(quote => quote.id === quoteId);
    if (newquote) {
      setQuoteItems([...quotesItems, newquote]);
      setQuoteId(quoteId + 1);
    } else {
      alert('Quote not found');
    }
  };

  const deleteQuote = id => {
    setQuoteItems(quotesItems.filter(quote => quote.id !== id));
    console.log('Deleted Quotes: ', quotesItems);
  };

  const handleQuotes = () => {};

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.sectionTitle, {color: '#8F8F8F'}]}>
          Today's{' '}
          <Text style={[styles.sectionTitle, {color: '#414C68'}]}>Quotes</Text>
        </Text>
      </View>
      <View style={styles.header}>
        <FlatList
          data={quotesData}
          contentContainerStyle={styles.contentContainer}
          renderItem={renderList}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <AntDesign
        name="pluscircle"
        size={50}
        style={styles.plusBtn}
        color="#0047AB"
        onPress={() => setModalVisible(true)}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTask}>
        <MainModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          quoteId={quoteId}
          setQuoteId={setQuoteId}
          quotesItems={quotesItems}
          setQuoteItems={setQuoteItems}
          quoteItem={quoteItem}
          setQuoteItem={setQuoteItem}
          author={author}
          setAuthor={setAuthor}
          handleAddUpdateQuote={handleAddUpdateQuote}
          // addQuote={addQuote}
          editQuote={editQuote}
          deleteQuote={deleteQuote}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 33,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  author: {
    marginTop: 25,
    marginBottom: 10,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 15,
    color: '#FFF',
    textAlign: 'right',
  },

  quote: {
    marginTop: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 17,
    lineHeight: 21,
    color: '#FFF',
  },
  plusBtn: {
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  contentContainer: {
    paddingBottom: 100,
  },
});
