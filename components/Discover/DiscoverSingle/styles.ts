import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    padding: 4,
    margin: 4,
  },
  author: {
    color: 'white',
    fontSize: 15,
    padding: 12,
    fontWeight: '500',
  },
});

export default styles;
