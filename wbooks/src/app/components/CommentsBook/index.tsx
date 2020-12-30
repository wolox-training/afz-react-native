import React from 'react';
import { View, Text, Image } from 'react-native';
import { Comments } from '@interfaces/Comments';

import styles from './styles';

function CommentsBook({ url, author, text }: Comments) {
  return (
    <>
      <View style={styles.commenstContainer}>
        <View style={styles.imageContainer}>
          {url === null ? (
            <View style={styles.image} />
          ) : (
            <Image source={{ uri: url }} style={styles.imageContainer} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{author}</Text>
          <Text style={styles.author}>{text}</Text>
        </View>
      </View>
    </>
  );
}

export default CommentsBook;
