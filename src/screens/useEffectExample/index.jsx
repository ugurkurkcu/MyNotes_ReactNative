//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {AppColors} from '../../theme/colors';
import Button from '../../components/ui/button';
import {SECONDSCREEN} from '../../utils/routes';
import MyContext from '../../context';

// create a component
const UseEffectExample = ({navigation}) => {
  const {count, incCount} = useContext(MyContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.count}>{count}</Text>
          <Text>First Screen</Text>
        </View>
        <View style={{}}>
          <Button
            onPress={() => navigation.navigate(SECONDSCREEN)}
            title="Go To Page"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 10,
  },
  count: {
    fontSize: 100,
    color: AppColors.DANGER,
  },
});

//make this component available to the app
export default UseEffectExample;
