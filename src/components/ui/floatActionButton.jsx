//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {screenWidth} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import {Add} from 'iconsax-react-native';

// create a component
const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="50" color={AppColors.WHITE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    bottom: 20,
    right: 20,
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    borderRadius: 50,
  },
});

//make this component available to the app
export default FloatActionButton;
