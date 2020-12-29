import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import ItemBook from '@components/ItemBook';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/Book';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

type RootStackParamList = {
  BookList: undefined;
  BookDetails: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BookList'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

function BookList(navigation: Props) {
  const renderItem: ListRenderItem<Book> = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => navigation.navigation.navigate('BookDetails')}>
      <ItemBook {...item} />
    </TouchableOpacity>
  );
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
