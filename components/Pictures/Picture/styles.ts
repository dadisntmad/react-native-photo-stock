import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    justifyContent: 'flex-end',
  },
  author: {
    color: 'white',
    fontSize: 15,
    padding: 12,
    fontWeight: '500',
  },
});

export default styles;
