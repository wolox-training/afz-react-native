import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

const widthInput = '70%';
const radius = 20;

export default StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: Colors.primary,
    marginVertical: 8,
    width: widthInput,
    height: 35,
    borderRadius: radius,
    paddingHorizontal: 10
  },
  logo: {
    height: 125,
    marginBottom: 20
  },
  buttonLogin: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingVertical: 10,
    width: widthInput,
    borderRadius: radius,
    alignItems: 'center'
  },
  textButton: {
    color: Colors.primary
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center'
  }
});
