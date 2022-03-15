import { StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../../styles';

export const style = StyleSheet.create({
  centerContainer: {
    height: Dimensions.SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: '100%',
    padding: 20,
  },
});
