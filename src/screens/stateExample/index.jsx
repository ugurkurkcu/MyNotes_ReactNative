//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/ui/button';
import {AppColors} from '../../theme/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const StateExample = () => {
  const [count, setCount] = useState(0);
  const setCountStyle = () => {
    switch (true) {
      case count < 0:
        return styles.countDanger;
      case count >= 10:
        return styles.countSuccess;

      default:
        return styles.count;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.countWrapper}>
          <Text style={setCountStyle()}>{count}</Text>
          {count < 0 && (
            <Text style={styles.countDangerAlert}>
              ERROR: {"\n"} Number Must Be Greater Than 0
            </Text>
          )}
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => setCount(count - 1)}
            style={count < 0 ? styles.buttonDanger : styles.button}
            title="-"
          />
          <Button
            onPress={() => setCount(count + 1)}
            style={count >= 10 ? styles.buttonSuccess : styles.button}
            title="+"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  count: {
    fontSize: 100,
    fontWeight: 'bold',
  },
  countSuccess: {
    fontSize: 100,
    fontWeight: 'bold',
    color: AppColors.SUCCESS,
  },
  countDanger: {
    fontSize: 100,
    fontWeight: 'bold',
    color: AppColors.DANGER,
  },
  countDangerAlert: {
    fontSize: 24,
    color: AppColors.DANGER,
    textAlign: 'center',
  },
  countWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
  },
  buttonWrapper: {
    backgroundColor: AppColors.WHITE,
    flexDirection: 'row',
    padding: 10,
    gap: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    flex: 1,
  },
  buttonDanger: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.DANGER,
    padding: 15,
    borderRadius: 10,
    flex: 1,
  },
  buttonSuccess: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.SUCCESS,
    padding: 15,
    borderRadius: 10,
    flex: 1,
  },
});

export default StateExample;
