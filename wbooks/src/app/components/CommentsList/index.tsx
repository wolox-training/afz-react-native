import React, { useState } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { COMMENTS_MOCK } from '@constants/mockComments';
import CommentsBook from '@app/components/CommentsBook';
import { Comments } from '@interfaces/Comments';

import styles from './styles';

function CommentList() {
  const [limit, setLimit] = useState(2);
  const renderItem: ListRenderItem<Comments> = ({ item }: { item: Comments }) => {
    return <CommentsBook {...item} />;
  };
  const keyExtractor = (item: Comments) => `${item.id}`;
  const viewAll = () => {
    setLimit(5);
  };
  const hidenComments = () => {
    setLimit(2);
  };
  return (
    <>
      <View>
        <FlatList
          data={COMMENTS_MOCK.slice(COMMENTS_MOCK.length - limit, COMMENTS_MOCK.length).reverse()}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
        {limit === 2 ? (
          <TouchableOpacity onPress={viewAll}>
            <Text style={styles.textButton}>View All</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={hidenComments}>
            <Text style={styles.textButton}>Hiden</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

export default CommentList;
