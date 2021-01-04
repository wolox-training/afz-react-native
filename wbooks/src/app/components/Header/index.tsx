import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '@interfaces/Header';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function HeaderContainer({ title }: Header) {
  const navigation = useNavigation();
  const back = () => navigation.goBack();
  return (
    <ImageBackground source={require('@assets/bc_nav_bar.png')} style={styles.headerImage}>
      <TouchableOpacity style={styles.buttonBack} onPress={back}>
        <Image source={require('@assets/ic_back.png')} />
      </TouchableOpacity>
      <Text style={styles.titleHeader}>{title}</Text>
      <View style={styles.right} />
    </ImageBackground>
  );
}

export default HeaderContainer;
