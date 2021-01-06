import React from 'react';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import ItemBook from '@components/ItemBook';
import { Book } from '@interfaces/Book';
import { useNavigation } from '@react-navigation/native';
import store from '@redux/store';
import { getBooks } from '@redux/book/actions';

import styles from './styles';

function BookList() {
  const data = store.dispatch(getBooks());
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
      <FlatList
        style={styles.bookListContainer}
        data={data.books}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
}

export default BookList;
