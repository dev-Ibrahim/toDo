import { StyleSheet } from 'react-native';
import { Dimensions } from '../../styles';

export const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    padding: 20,
    height: Dimensions.WINDOW_HEIGHT * 0.4,
    width: Dimensions.WINDOW_WIDTH * 0.6,
    margin: 20,
  },
});
