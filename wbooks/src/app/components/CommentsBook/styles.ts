import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

const size = 50;
export default StyleSheet.create({
  commenstContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row'
  },
  imageContainer: {
    alignSelf: 'center',
    width: size,
    height: size,
    backgroundColor: Colors.bgColor,
    borderRadius: size
  },
  author: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 13,
    color: Colors.opacityColor
  },
  textContainer: {
    marginLeft: 15,
    width: '80%'
  }
});
