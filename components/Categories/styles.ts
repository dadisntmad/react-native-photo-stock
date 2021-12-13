import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    marginHorizontal: 6,
    marginBottom: 8,
  },
  image: {
    width: 120,
    height: 140,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 8,
  },
  overlay: {
    width: 120,
    height: 140,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  title: {
    padding: 14,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default styles;
