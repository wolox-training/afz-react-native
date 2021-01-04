import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Header } from '@interfaces/Header';
import { useNavigation } from '@react-navigation/native';
import Images from '@constants/Images';

import styles from './styles';

function HeaderContainer({ title }: Header) {
  const navigation = useNavigation();
  const back = () => navigation.goBack();
  return (
    <ImageBackground source={Images.navBar} style={styles.headerImage}>
      <TouchableOpacity onPress={back}>
        <Image source={Images.back} style={styles.buttonBack} />
      </TouchableOpacity>
      <Text style={styles.titleHeader}>{title}</Text>
    </ImageBackground>
  );
}

export default HeaderContainer;
