import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Header } from '@interfaces/Header';
import { useNavigation } from '@react-navigation/native';
import navBar from '@assets/bc_nav_bar.png';
import icBack from '@assets/ic_back.png';

import styles from './styles';

function HeaderContainer({ title }: Header) {
  const navigation = useNavigation();
  const back = () => navigation.goBack();
  return (
    <ImageBackground source={navBar} style={styles.headerImage}>
      <TouchableOpacity onPress={back}>
        <Image source={icBack} style={styles.buttonBack} />
      </TouchableOpacity>
      <Text style={styles.titleHeader}>{title}</Text>
    </ImageBackground>
  );
}

export default HeaderContainer;
