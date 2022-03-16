import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Typography } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: Dimensions.FONT_SIZE_M,
    color: '#000',
    fontWeight: '900',
  },
});
