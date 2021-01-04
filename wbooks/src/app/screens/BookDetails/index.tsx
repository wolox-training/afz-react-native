import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteBook } from '@interfaces/RouteBook';
import CommentsList from '@components/CommentsList';

import styles from './styles';

function BookDetails() {
  const route = useRoute<RouteBook>();
  return (
    <ScrollView>
      <View style={styles.detailsContainer}>
        {route.params.item.imageUrl === null ? (
          <View style={styles.imageContainerDetails} />
        ) : (
          <Image source={{ uri: route.params.item.imageUrl }} style={styles.imageContainerDetails} />
        )}
        <View style={styles.detailsTextContainer}>
          <Text style={styles.title}>{route.params.item.title}</Text>
          <Text style={styles.textDetails}>{route.params.item.author}</Text>
          <Text style={styles.textDetails}>{route.params.item.year}</Text>
          <Text style={styles.textDetails}>{route.params.item.genre}</Text>
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
      <CommentsList />
    </ScrollView>
  );
}

export default BookDetails;
