//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {screenHeight} from '../../utils/constants';
import {MYNOTES} from '../../utils/routes';
import {screenStyle} from '../../styles/screenStyle';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppColors} from '../../theme/colors';
import {CalendarSearch, Menu, More, Translate} from 'iconsax-react-native';

// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Text style={{fontSize: 35, color: AppColors.SECONDARY}}>
          {MYNOTES}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            padding: 5,
            flex: 1,
            marginHorizontal: 10,
            justifyContent: 'flex-start',
          }}>
          <Menu size="24" color={AppColors.SECONDARY} />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            padding: 5,
            flex: 1,
            marginHorizontal: 10,
            justifyContent: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 5,
          }}>
          <CalendarSearch size="24" color={AppColors.SECONDARY} />
          <More
            style={{transform: [{rotate: '90deg'}]}}
            size="24"
            color={AppColors.SECONDARY}
          />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight * 0.2,
  },
});

//make this component available to the app
export default Header;
