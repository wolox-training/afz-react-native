import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewbook: {
    marginTop: 80,
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  viewcover: {
    width: '30%',
    alignItems: 'center'
  },
  cover: {
    width: 50,
    height: 80
  },
  // eslint-disable-next-line react-native/no-color-literals
  viewvacio: {
    width: 50,
    height: 80,
    backgroundColor: '#333333'
  },
  viewtext: {
    width: '70%'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  author: {
    fontSize: 13
  }
});
