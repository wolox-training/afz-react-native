import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import ItemBook from '@components/ItemBook';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/Book';

import styles from './styles';

function BookList() {
  const renderItem: ListRenderItem<Book> = ({ item }: { item: Book }) => <ItemBook {...item} />;
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
