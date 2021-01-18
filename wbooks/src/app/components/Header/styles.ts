import Colors from '@constants/Colors';
import { Platform, StyleSheet } from 'react-native';

const space = 10;
export const iconSize = 26;
const iconClose = 18;
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
    flexGrow: 2
  },
  buttonBack: {
    marginLeft: space
  },
  buttonSearch: {
    tintColor: Colors.opacityColor
  },
  clearContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: iconClose,
    height: iconClose,
    borderRadius: iconClose
  },
  buttonClear: {
    color: Colors.primary,
    fontWeight: 'bold'
  },
  buttonSearchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: iconSize,
    height: iconSize
  },
  textInput: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '90%',
    backgroundColor: Colors.primary,
    height: Platform.OS === 'ios' ? iconSize : iconSize + 10,
    borderRadius: 20
  },
  searchContainer: {
    alignItems: 'center',
    marginHorizontal: space + 10,
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    width: '90%'
  },
  searchHomeContainer: {
    marginHorizontal: space + 10,
    borderRadius: 20,
    width: iconSize
  },
  textContainer: {
    flexDirection: 'row'
  }
});
