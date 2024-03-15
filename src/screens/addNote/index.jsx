//import liraries
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNote/editButtons';
import addNoteStyle from '../../styles/addNoteStyle';
import editButtonStyles from '../../styles/editButtonsStyle';
import {getRondomId} from '../../utils/functions';
import MyContext from '../../context';
import {useNavigation} from '@react-navigation/native';

const AddNote = ({route}) => {
  const {addNote, updateNote} = useContext(MyContext);
  const navigation = useNavigation();

  const {note} = route?.params;
  const {type} = route?.params;

  const [title, setTitle] = useState(note?.title);
  const [desc, setDesc] = useState(note?.description);

  const [titleRequired, setTitleRequired] = useState(false);
  const [descRequired, setDescRequired] = useState(false);

  const saveNotes = () => {
    const form = {
      id: getRondomId(),
      title: title,
      description: desc,
      date: new Date().toLocaleString(),
      readed: false,
    };
    !form.title ? setTitleRequired(true) : setTitleRequired(false);
    !form.description ? setDescRequired(true) : setDescRequired(false);

    form.title && form.description && addNote(form);
    navigation.goBack();
  };
  const editNotes = () => {
    const form = {
      id: note.id,
      title: title,
      description: desc,
      date: new Date().toLocaleString(),
    };
    !form.title ? setTitleRequired(true) : setTitleRequired(false);
    !form.description ? setDescRequired(true) : setDescRequired(false);

    form.title && form.description && updateNote(form.id, form);
    navigation.goBack();
  };

  const [style, setStyle] = useState(editButtonStyles.alignLeft);

  const changeStyle = style => {
    setStyle(editButtonStyles[style]);
  };
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons onChangeStyle={value => changeStyle(value)} />
        </View>
        <View style={{flex: 1}}>
          <Text style={addNoteStyle.title}>Title</Text>
          {titleRequired && (
            <Text style={addNoteStyle.warning}>Please write a title</Text>
          )}
          <TextInput
            placeholder="Type Your Title Here"
            style={addNoteStyle.titleText}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Text style={addNoteStyle.title}>Notes</Text>
          {descRequired && (
            <Text style={addNoteStyle.warning}>Please write a something</Text>
          )}
          <TextInput
            multiline={true}
            placeholder="Type Your Note Here"
            style={[addNoteStyle.notesText, style]}
            value={desc}
            onChangeText={text => setDesc(text)}
          />
        </View>
        <View>
          <Button
            onPress={type == 'update' ? editNotes : saveNotes}
            title={type == 'update' ? 'Update' : 'Save'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
