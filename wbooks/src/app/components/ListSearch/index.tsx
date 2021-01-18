import React, { useEffect } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View, Image } from 'react-native';
import ItemBook from '@components/ItemBook';
import { Book } from '@interfaces/Book';
import { BookState } from '@interfaces/BookState';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { actionsBook } from '@redux/book/actions';
import bigSearch from '@assets/ic_search_big.png';

import styles from './styles';

interface State {
  book: BookState;
}

function ListSearch() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(actionsBook.setSearch(''));
    };
  }, [dispatch]);

  const book = useSelector((state: State) => state.book);
  const { books, booksLoading, search } = book;

  const booksFilter =
    search === ''
      ? []
      : books?.filter((element: Book) => element.title.toLowerCase().includes(search.toLowerCase()));
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

  const listEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Image source={bigSearch} style={styles.iconSearcEmpty} />
        <Text style={styles.titleEmpty}>Search in Wbooks</Text>
        <Text style={styles.textEmpty}>Find your favorite writers and books</Text>
      </View>
    );
  };
  const keyExtractor = (item: Book) => `${item.id}`;
  return (
    <>
      {booksLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.textLoading}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          style={styles.bookListContainer}
          data={booksFilter}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={listEmptyComponent}
        />
      )}
    </>
  );
}

export default ListSearch;
