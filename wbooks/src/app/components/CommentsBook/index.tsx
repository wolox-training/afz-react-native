import React from 'react';
import { View, Text, Image } from 'react-native';
import { Comments } from '@interfaces/Comments';

import styles from './styles';

function CommentsBook({ url, author, text }: Comments) {
  return (
    <>
      <View style={styles.commenstContainer}>
        <View style={styles.imageContainer}>
          {url === null ? <View /> : <Image source={{ uri: url }} style={styles.imageContainer} />}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </>
  );
}

export default CommentsBook;
