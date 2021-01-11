import React, { useEffect } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import ItemBook from '@components/ItemBook';
import { Book } from '@interfaces/Book';
import { BookState } from '@interfaces/BookState';
import { useNavigation } from '@react-navigation/native';
import { actionsCreator } from '@redux/book/actions';
import { connect, useDispatch } from 'react-redux';

import styles from './styles';

interface Props {
  getBooks: () => void;
  loading: boolean;
  books: Book[] | null | undefined;
}

function BookList({ getBooks, loading, books }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, getBooks]);

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
      {loading ? (
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

const mapStateToProps = ({ books, loading }: BookState) => {
  return {
    books,
    loading
  };
};

const mapDispachtToProps = () => {
  return {
    getBooks: () => actionsCreator.getBooks
  };
};

export default connect(mapStateToProps, mapDispachtToProps)(BookList);
