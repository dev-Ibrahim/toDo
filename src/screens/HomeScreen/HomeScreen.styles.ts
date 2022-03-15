import { StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../../styles';

export const style = StyleSheet.create({
  flexEndContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.SCREEN_HEIGHT / 5,
  },
  titleWrapper: {
    flexDirection: 'row',
  },
  button: {
    width: Dimensions.SCREEN_WIDTH / 16,
    borderColor: Colors.BLUE,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: Dimensions.FONT_SIZE_L,
    color: Colors.BLUE,
  },
});
