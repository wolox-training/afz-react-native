import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

export default StyleSheet.create({
  commenstContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row'
  },
  imageContainer: {
    alignSelf: 'center'
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: Colors.bgColor,
    borderRadius: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  author: {
    fontSize: 13,
    color: Colors.opacityColor
  },
  textContainer: {
    marginLeft: 15,
    width: '80%'
  }
});
