import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

function Dummy() {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>Hola segundo Tab Bar</Text>
    </View>
  );
}

export default Dummy;
