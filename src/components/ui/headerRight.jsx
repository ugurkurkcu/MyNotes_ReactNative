//import liraries
import {AttachCircle, More, Share} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/colors';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <AttachCircle size="20" style={styles.icon} />
      <Share size="20" style={styles.icon} />
      <More size="20" style={styles.icon && styles.icon2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  icon: {
    marginHorizontal: 5,
    color: AppColors.SECONDARY,
  },
  icon2: {
    transform: [{rotate: '90deg'}],
  },
});

export default HeaderRight;
