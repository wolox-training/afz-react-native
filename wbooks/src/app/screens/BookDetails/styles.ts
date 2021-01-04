import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

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
    alignItems: 'stretch'
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
    borderRadius: 10,
    margin: 5,
    marginHorizontal: 40
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  textPrimary: {
    color: Colors.primary
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
  }
});