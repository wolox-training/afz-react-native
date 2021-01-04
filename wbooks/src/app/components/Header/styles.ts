import Colors from '@constants/Colors';
import { Dimensions, Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerImage: {
    width: Dimensions.get('window').width,
    height: 120,
    alignItems: 'center',
    flexDirection: 'row'
  },
  titleHeader: {
    width: '60%',
    color: Colors.primary,
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    fontWeight: 'bold',
    fontSize: 18
  },
  buttonBack: {
    width: '20%',
    alignItems: 'center'
  },
  right: {
    width: '20%'
  }
});
