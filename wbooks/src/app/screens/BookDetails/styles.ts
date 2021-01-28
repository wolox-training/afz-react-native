import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

const widthIcon = 33;
export default StyleSheet.create({
  imageContainerDetails: {
    width: 100,
    height: 150,
    backgroundColor: Colors.bgColor,
    margin: 15
  },
  detailsContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 20
  },
  detailsTextContainer: {
    margin: 15,
    width: '60%'
  },
  buttonsContainer: {
    alignItems: 'stretch',
    marginBottom: 20
  },
  buttonPrimary: {
    backgroundColor: Colors.secondary
  },
  buttonSecondary: {
    borderColor: Colors.secondary,
    borderWidth: 1
  },
  buttonLarge: {
    padding: 10,
    borderRadius: 60,
    margin: 5,
    marginHorizontal: 40,
    width: 200,
    alignSelf: 'center'
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  textPrimary: {
    color: Colors.primary,
    alignSelf: 'center'
  },
  textSecondary: {
    color: Colors.secondary
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textDetails: {
    fontSize: 15,
    color: Colors.opacityColor
  },
  icon: {
    width: widthIcon,
    height: widthIcon,
    tintColor: Colors.primary,
    alignSelf: 'center'
  },
  buttonTouch: {
    width: '100%'
  }
});
