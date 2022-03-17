import { StyleSheet } from 'react-native';
import { Dimensions, Typography } from '../../styles';

export const style = StyleSheet.create({
  centerContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  inputsWrapper: {
    alignItems: 'center',
    margin: 20,
  },
  inputText: {
    width: Dimensions.SCREEN_WIDTH * 0.8,
    color: '#000',
    fontSize: Dimensions.FONT_SIZE_M,
    borderWidth: 1.5,
    borderColor: '#D9DDDC',
    borderRadius: 5,
    margin: 10,
  },
  colorpicker: {
    flexDirection: 'row',
    width: Dimensions.SCREEN_WIDTH * 0.8,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  colorpickerItem: {
    width: 30,
    height: 30,
    marginRight: 20,
    borderRadius: 3,
  },
  createButton: {
    width: Dimensions.SCREEN_WIDTH * 0.8,
    height: Dimensions.SCREEN_HEIGHT / 19,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
