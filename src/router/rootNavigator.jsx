import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNOTE,
  MYNOTES,
  NOTEDETAIL,
  SECONDSCREEN,
  STATEEXAMPLE,
  USEEFFECTEXAMPLE,
} from '../utils/routes';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNote';
import NoteDetail from '../screens/noteDetail';
import {AppColors} from '../theme/colors';
import HeaderRight from '../components/ui/headerRight';
import StateExample from '../screens/stateExample';
import UseEffectExample from '../screens/useEffectExample';
import SecondScreen from '../screens/useEffectExample/secondScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={MYNOTES}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: AppColors.SECONDARY,
      }}>
      <Stack.Screen
        options={{headerShown: true}}
        name={USEEFFECTEXAMPLE}
        component={UseEffectExample}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={SECONDSCREEN}
        component={SecondScreen}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={STATEEXAMPLE}
        component={StateExample}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{headerRight: props => <HeaderRight />}}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
