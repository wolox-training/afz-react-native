import React from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import bcInicio from '@assets/bc_inicio.png';
import wbooksLogo from '@assets/wbooks_logo.png';

import styles from './styles';

function Login() {
  return (
    <ImageBackground source={bcInicio} style={styles.imageBackground}>
      <Image source={wbooksLogo} style={styles.logo} />
      <TextInput style={styles.textInput} placeholder="Usuario" />
      <TextInput style={styles.textInput} placeholder="Contraseña" />
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.textButton}>INGRESAR</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Designed, developed and used by woloxers</Text>
    </ImageBackground>
  );
}

export default Login;
