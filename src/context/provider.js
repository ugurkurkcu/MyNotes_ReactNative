import React, {useState} from 'react';
import MyContext from '.';
import {mockData} from '../utils/mockData';
import {Alert} from 'react-native';
import {MYNOTES} from '../utils/routes';
import {useNavigation} from '@react-navigation/native';

const MyProvider = ({children}) => {
  const [count, setCount] = useState(0);
  const [notes, setNotes] = useState(mockData);

  const incCount = () => setCount(count + 1);

  const addNote = item => {
    if (item) {
      setNotes([...notes, item]);
      Alert.alert('Note Added Successfully');
    }
  };
  const updateNote = (id, item) => {
    const updatedNotes = notes.map(note =>
      note.id === id
        ? {...note, title: item.title, description: item.description,readed:true}
        : note,
    );
    setNotes(updatedNotes);
  };

  const deleteNote = id => {
    if (id) {
      const filteredNotes = notes.filter(item => item.id !== id);
      setNotes(filteredNotes);
    } else {
      Alert.alert('There is no such a note');
    }
  };

  return (
    <MyContext.Provider
      value={{
        count,
        incCount,
        mockData,
        notes,
        deleteNote,
        updateNote,
        addNote,
        setNotes,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
