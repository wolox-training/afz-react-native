import React from 'react';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import ItemBook from '@components/ItemBook';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/Book';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function BookList() {
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
        data={BOOKS_MOCK}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
}

export default BookList;
