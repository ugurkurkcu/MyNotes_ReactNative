import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import Header from '../../components/router/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';
import MyContext from '../../context';

const MyNotes = ({navigation}) => {
  const {notes, deleteNote, updateNote, setNotes} = useContext(MyContext);
  let note1 = {
    id: 5,
    title: 'Back End Developer',
    description: 'Professional API content creator at Facebook',
    date: '01:25am',
  };
  let note2 = {
    id: 6,
    title: 'Mobile Developer',
    description: 'Professional IOS developer at Apple',
    date: '09:10am',
  };
  let note3 = {
    id: 7,
    title: 'Front End Developer',
    description: 'Professional React.js consultant at Tesla',
    date: '03:20pm',
  };

  useEffect(() => {
    setNotes([...notes, note1]);
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard
              updateItem={item => updateNote(item.id, note3)}
              deleteItem={item => deleteNote(item.id)}
              item={item}
            />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
