import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

export default StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary
  }
});
