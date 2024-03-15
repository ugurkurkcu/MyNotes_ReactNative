import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';

const addNoteStyle = StyleSheet.create({
  title: {
    paddingHorizontal: 10,
    color: AppColors.PRIMARY,
    fontWeight: 'bold',
    fontSize: 24,
  },
  titleText: {
    fontSize: 16,
    backgroundColor: AppColors.WHITE,
    borderWidth: 0.5,
    margin: 5,
    borderRadius: 5,
    padding: 5,
    borderColor: AppColors.GRAY,
  },
  notesText: {
    flex: 1,
    fontSize: 16,
    backgroundColor: AppColors.WHITE,
    borderWidth: 0.5,
    margin: 5,
    borderRadius: 5,
    padding: 5,
    borderColor: AppColors.GRAY,
    textAlignVertical: 'bottom',
    flexWrap: 'wrap',
  },
  warning: {
    paddingHorizontal: 10,
    color: AppColors.DANGER,
    fontSize: 20,
  },
});

export default addNoteStyle;
