//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {
  TextBold,
  TextItalic,
  TextalignLeft,
  TextalignCenter,
  TextalignJustifycenter,
  TextUnderline,
} from 'iconsax-react-native';

// create a component
const EditButtons = ({onChangeStyle}) => {
  const EditIcons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold color={AppColors.SECONDARY} />,
    },
    {
      id: 2,
      value: 'underlined',
      icon: <TextUnderline color={AppColors.SECONDARY} />,
    },

    {
      id: 3,
      value: 'italic',
      icon: <TextItalic color={AppColors.SECONDARY} />,
    },
    {
      id: 4,
      value: 'alignLeft',
      icon: <TextalignLeft color={AppColors.SECONDARY} />,
    },
    {
      id: 5,
      value: 'alignCenter',
      icon: <TextalignCenter color={AppColors.SECONDARY} />,
    },
    {
      id: 6,
      value: 'justifyCenter',
      icon: <TextalignJustifycenter color={AppColors.SECONDARY} />,
    },
  ];

  return (
    <View style={styles.container}>
      {EditIcons.map((item, index) => {
        index = item.id;

        return (
          <TouchableOpacity
            onPress={() => onChangeStyle(item.value)}
            key={index}>
            {item.icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.SCREENBGCOLOR,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
  },
});

//make this component available to the app
export default EditButtons;
