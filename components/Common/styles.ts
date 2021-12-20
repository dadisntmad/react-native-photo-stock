import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  imageGrid: {
    width: '100%',
    height: 275,
    justifyContent: 'flex-end',
    padding: 4,
    margin: 4,
  },
  authorGrid: {
    color: 'white',
    fontSize: 15,
    padding: 12,
    fontWeight: '500',
  },
});

export default styles;
