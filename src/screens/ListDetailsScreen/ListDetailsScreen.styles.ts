import { StyleSheet } from 'react-native';
import { Dimensions } from '../../styles';

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-evenly',
    marginLeft: Dimensions.SCREEN_WIDTH * 0.2,
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginTop: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  closeSign: {
    fontSize: Dimensions.FONT_SIZE_L,
    color: '#000',
  },
  stats: {
    flexDirection: 'row',
  },
  todoList: {
    marginTop: Dimensions.SCREEN_HEIGHT * 0.05,
    marginLeft: Dimensions.SCREEN_WIDTH * 0.1,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: Dimensions.SCREEN_WIDTH * 0.7,
    height: Dimensions.SCREEN_HEIGHT / 18,
    borderWidth: 2,
    borderColor: '#D9dddc',
    margin: 5,
    color: '#000',
    fontSize: Dimensions.FONT_SIZE_SM,
    fontWeight: 'bold',
  },
  AddButton: {
    width: Dimensions.SCREEN_WIDTH * 0.11,
    height: Dimensions.SCREEN_HEIGHT / 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddbuttonText: {
    fontSize: Dimensions.FONT_SIZE_XL,
    fontWeight: '500',
  },
});
