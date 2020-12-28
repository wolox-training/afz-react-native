import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import ItemBook from '@components/ItemBook';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/Book';

import styles from './styles';

const renderItem: ListRenderItem<Book> = ({ item }: { item: Book }) => <ItemBook {...item} />;

function BookList() {
  return (
    <>
      <FlatList
        style={styles.bookListContainer}
        data={BOOKS_MOCK}
        renderItem={renderItem}
        keyExtractor={(item: Book) => `${item.id}`}
      />
    </>
  );
}

export default BookList;
