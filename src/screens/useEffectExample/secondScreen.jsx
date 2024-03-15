import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Button from '../../components/ui/button';
import {AppColors} from '../../theme/colors';
import MyContext from '../../context';

const SecondScreen = ({navigation}) => {
  const {count, incCount} = useContext(MyContext);
  const [text, setText] = useState('Second Page');
  useEffect(() => {
    setTimeout(() => {
      setText('Processes When The Page Is Loaded');
      setTimeout(() => {
        if (count == 0) setText('Second Page');
        else if (count == 1) setText('Content have been changed');
        else setText('Contents have been changed');
      }, 2000);
    }, 3000);

    return () => {
      console.log('page is closed');
    };
  }, []);
  useEffect(() => {
    if (count == 1) setText('Content have been changed');
    else if (count !== 0) setText('Contents have been changed');
  }, [count]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View>
        <Button onPress={() => incCount(count + 1)} title="Increase" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: AppColors.SUCCESS,
  },
  count: {
    fontSize: 100,
    color: AppColors.DANGER,
  },
});

export default SecondScreen;
