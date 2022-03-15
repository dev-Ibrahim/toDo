import { StyleSheet } from 'react-native';
import Colors from './colors.style';
import Dimensions from './dimensions.style';

export default StyleSheet.create({
  title: {
    fontSize: Dimensions.FONT_SIZE_XL,
    fontWeight: '800',
    color: Colors.BLACK,
  },
  subTitle: {
    fontSize: Dimensions.FONT_SIZE_XL,
    fontWeight: '300',
    color: Colors.BLUE,
  },
  label: {
    fontSize: Dimensions.FONT_SIZE_SM,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: Dimensions.FONT_SIZE_L,
    fontWeight: 'bold',
  },
});
