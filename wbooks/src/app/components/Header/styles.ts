import Colors from '@constants/Colors';
import { Platform, StyleSheet } from 'react-native';

const space = 10;
export default StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleHeader: {
    color: Colors.primary,
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    fontWeight: 'bold',
    fontSize: 18,
    flexGrow: 2,
    marginRight: space + 20
  },
  buttonBack: {
    marginLeft: space
  }
});
