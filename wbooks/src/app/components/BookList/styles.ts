import Colors from '@constants/Colors';
import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  bookListContainer: {
    marginTop: Platform.OS === 'ios' ? 70 : 0,
    marginBottom: 20
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLoading: {
    color: Colors.secondary,
    fontSize: 20
  }
});
