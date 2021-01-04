import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

export default StyleSheet.create({
  bookContainer: {
    marginTop: 10,
    padding: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderColor: Colors.opacityColor,
    borderWidth: 1,
    borderRadius: 5
  },
  coverContainer: {
    width: '30%',
    alignItems: 'center'
  },
  imageContainer: {
    width: 50,
    height: 80,
    backgroundColor: Colors.bgColor
  },
  textContainer: {
    width: '70%'
  },
  textDetails: {
    fontSize: 15,
    color: Colors.opacityColor
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
