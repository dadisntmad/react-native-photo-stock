import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 14,
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 18,
    zIndex: 2,
  },
  searchInput: {
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    width: 350,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

export default styles;
