import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  bookListContainer: {
    marginTop: Platform.OS === 'ios' ? 70 : 0,
    marginBottom: 20
  }
});
