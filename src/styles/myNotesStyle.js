import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {screenWidth} from '../utils/constants';

const NoteCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    flexDirection: 'row',
  },
  checkBox: {
    width: screenWidth * 0.04,
    height: screenWidth * 0.04,
    borderRadius: 200,
    backgroundColor: AppColors.GRAY,
  },
  checkBoxReaded: {
    width: screenWidth * 0.04,
    height: screenWidth * 0.04,
    borderRadius: 200,
    backgroundColor: AppColors.SUCCESS,
  },

  trash: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: AppColors.PRIMARY,
    textShadowColor: '#000',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 1,
  },
  description: {
    fontSize: 12,
    fontWeight: 'bold',
    color: AppColors.GRAY,
    textShadowColor: AppColors.PRIMARY,
    textShadowOffset: {width: 0.2, height: 0.2},
    textShadowRadius: 1,

  },
  date: {
    fontSize: 10,
    fontWeight: 'bold',
    color: AppColors.GRAY,
  },
  checkBoxContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 7,
    gap: 5,
  },
});

export {NoteCardStyle};
