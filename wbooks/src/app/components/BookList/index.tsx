import React from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import ItemBook from '@components/ItemBook';
import { Book } from '@interfaces/Book';
import { BookState } from '@interfaces/BookState';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import HeaderContainer from '@components/Header';

import styles from './styles';

interface State {
  book: BookState;
}

function BookList() {
  const book = useSelector((state: State) => state.book);
  const { books, booksLoading } = book;
  const navigation = useNavigation();
  const route = useRoute();
  const renderItem: ListRenderItem<Book> = ({ item }: { item: Book }) => {
    const bookDetails = () => {
      navigation.navigate('BookDetails', { item });
    };
    return (
      <TouchableOpacity onPress={bookDetails}>
        <ItemBook {...item} />
      </TouchableOpacity>
    );
  };
  const keyExtractor = (item: Book) => `${item.id}`;
  return (
    <>
      <HeaderContainer title="LIBRARY" route={route} />
      {booksLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.textLoading}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          style={styles.bookListContainer}
          data={books}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </>
  );
}

export default BookList;
