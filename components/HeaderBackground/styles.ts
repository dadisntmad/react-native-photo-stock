import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 250,
    resizeMode: 'cover',
  },
  overlay: {
    width: Dimensions.get('window').width,
    height: 250,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    maxWidth: 300,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default styles;
