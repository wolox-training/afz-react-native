import React, { useEffect } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import ItemBook from '@components/ItemBook';
import { Book } from '@interfaces/Book';
import { BookState } from '@interfaces/BookState';
import { useNavigation } from '@react-navigation/native';
import actionCreators from '@redux/book/actions';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';

interface State {
  book: BookState;
}

function BookList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  const book = useSelector((state: State) => state.book);

  const navigation = useNavigation();
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
      {book.booksLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.textLoading}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          style={styles.bookListContainer}
          data={book.books}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </>
  );
}

export default BookList;
