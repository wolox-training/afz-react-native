import React from 'react';
import { View, Text, Image } from 'react-native';
import { Book } from '@interfaces/Book';
import AppStyles from '@constants/AppStyles';

import styles from './styles';

function ItemBook({ title, author, imageUrl }: Book) {
  return (
    <View style={styles.bookContainer}>
      <View style={styles.coverContainer}>
        {imageUrl === null ? (
          <View style={styles.imageContainer} />
        ) : (
          <Image source={{ uri: imageUrl }} style={styles.imageContainer} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={AppStyles.title}>{title}</Text>
        <Text style={AppStyles.textDetails}>{author}</Text>
      </View>
    </View>
  );
}

export default ItemBook;
