import React, { useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteBook } from '@interfaces/RouteBook';
import CommentsList from '@components/CommentsList';
import Colors from '@constants/Colors';
import icMyRentals from '@assets/ic_myrentals.png';

import styles from './styles';

function BookDetails() {
  const widthButton = useRef(new Animated.Value(200)).current;
  const widthText = useRef(new Animated.Value(1)).current;
  const widthIcon = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;
  const [rental, setRental] = useState(false);
  const route = useRoute<RouteBook>();

  const rent = () => {
    Animated.parallel([
      Animated.timing(widthButton, {
        toValue: rental ? 200 : 60,
        duration: 500,
        useNativeDriver: false
      }),
      Animated.timing(animation, {
        toValue: rental ? 0 : 1,
        duration: 500,
        useNativeDriver: false
      }),
      Animated.timing(widthText, {
        toValue: rental ? 1 : 0,
        duration: 300,
        useNativeDriver: false
      }),
      Animated.timing(widthIcon, {
        toValue: rental ? 0 : 1,
        duration: 300,
        useNativeDriver: false
      })
    ]).start(() => setRental(!rental));
  };
  const buttonInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.secondary, Colors.green]
  });
  const animatedStyle = {
    backgroundColor: buttonInterpolation
  };

  const { image, title, author, year, genre } = route.params.item;
  return (
    <ScrollView>
      <View style={styles.detailsContainer}>
        {image.url === null ? (
          <View style={styles.imageContainerDetails} />
        ) : (
          <Image source={{ uri: image.url }} style={styles.imageContainerDetails} />
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
        <Animated.View
          style={[styles.buttonLarge, styles.buttonPrimary, { width: widthButton, ...animatedStyle }]}>
          <TouchableOpacity onPress={rent} style={styles.buttonTouch}>
            {rental ? (
              <Animated.Image
                source={icMyRentals}
                style={[styles.icon, { transform: [{ scale: widthIcon }] }]}
              />
            ) : (
              <Animated.Text
                style={[styles.textButton, styles.textPrimary, { transform: [{ scale: widthText }] }]}>
                RENT
              </Animated.Text>
            )}
          </TouchableOpacity>
        </Animated.View>
      </View>
      <CommentsList />
    </ScrollView>
  );
}

export default BookDetails;
