import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteBook } from '@interfaces/RouteBook';

import styles from './styles';

function BookDetails() {
  const route = useRoute<RouteBook>();
  const { imageUrl, title, author, year, genre } = route.params.item;
  return (
    <ScrollView>
      <View style={styles.detailsContainer}>
        {imageUrl === null ? (
          <View style={styles.imageContainerDetails} />
        ) : (
          <Image source={{ uri: imageUrl }} style={styles.imageContainerDetails} />
        )}
        <View style={styles.detailsTextContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.textDetails}>{author}</Text>
          <Text style={styles.textDetails}>{year}</Text>
          <Text style={styles.textDetails}>{genre}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.buttonLarge, styles.buttonSecondary]}>
          <Text style={[styles.textButton, styles.textSecondary]}>ADD TO WISHLIST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonLarge, styles.buttonPrimary]}>
          <Text style={[styles.textButton, styles.textPrimary]}>RENT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default BookDetails;
