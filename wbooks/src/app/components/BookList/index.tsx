import React from 'react';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import ItemBook from '@components/ItemBook';
import { Book } from '@interfaces/Book';
import { useNavigation } from '@react-navigation/native';
import { getBooks } from '@redux/book/actions';
import { useDispatch } from 'react-redux';

import styles from './styles';

function BookList() {
  const dispatch = useDispatch();
  const data = dispatch(getBooks());
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
