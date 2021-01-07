import React from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import ItemBook from '@components/ItemBook';
import { Book } from '@interfaces/Book';
import { useNavigation } from '@react-navigation/native';
import { GetBooks } from '@redux/book/actions';
import { connect } from 'react-redux';

import styles from './styles';

function BookList(props: {
  getBooks: () => void;
  loading: boolean;
  books: readonly Book[] | null | undefined;
}) {
  if (props.books?.length === 0) {
    GetBooks();
  }
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
      {props.loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.textLoading}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          style={styles.bookListContainer}
          data={props.books}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </>
  );
}

const mapStateToProps = (state: { books: any; loading: any }) => {
  return {
    books: state.books,
    loading: state.loading
  };
};

const mapDispachtToProps = (dispacht: any) => {
  return {
    getBooks() {
      dispacht(GetBooks());
    }
  };
};

export default connect(mapStateToProps, mapDispachtToProps)(BookList);
