import React from 'react';
import { View, Text, Image } from 'react-native';
import { Book } from '@interfaces/index';

import styles from './styles';

function ItemBook({ title, author, imageUrl }: Book) {
  return (
    <View style={styles.viewbook}>
      <View style={styles.viewcover}>
        {imageUrl === null ? (
          <View style={styles.viewvacio} />
        ) : (
          <Image source={{ uri: imageUrl }} style={styles.viewvacio} />
        )}
      </View>
      <View style={styles.viewtext}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default ItemBook;
