//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNote/editButtons';
import {AppColors} from '../../theme/colors';
import editButtonStyles from '../../styles/editButtonsStyle';
import MyContext from '../../context';

const NoteDetail = ({route}) => {
  const {note} = route.params;
  const [style, setStyle] = useState(editButtonStyles.alignLeft);
  const {updateNote} = useContext(MyContext);

  const changeStyle = style => {
    setStyle(editButtonStyles[style]);
  };

  useEffect(() => {
    updateNote(note.id, note);
  }, [(note.date = new Date().toLocaleString())]);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons onChangeStyle={value => changeStyle(value)} />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: AppColors.WHITE,
            padding: 10,
          }}>
          <View style={{gap: 20}}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: AppColors.PRIMARY,
              }}>
              Title
            </Text>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>{note.title}</Text>

            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: AppColors.PRIMARY,
              }}>
              Notes
            </Text>
            <Text style={[{fontSize: 22, color: AppColors.GRAY}, style]}>
              {note.description}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoteDetail;
