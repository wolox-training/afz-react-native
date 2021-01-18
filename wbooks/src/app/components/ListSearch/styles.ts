import Colors from '@constants/Colors';
import { Platform, StyleSheet } from 'react-native';

const iconSize = 50;
export default StyleSheet.create({
  bookListContainer: {
    marginTop: Platform.OS === 'ios' ? 30 : 0,
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
  },
  iconSearcEmpty: {
    tintColor: Colors.opacityColor,
    width: iconSize,
    height: iconSize
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleEmpty: {
    fontSize: 17,
    margin: 10
  },
  textEmpty: {
    fontSize: 16,
    color: Colors.opacityColor,
    marginTop: 5
  }
});
