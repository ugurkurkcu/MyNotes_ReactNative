import {View, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {Edit, Trash} from 'iconsax-react-native';
import {NoteCardStyle} from '../../styles/myNotesStyle';
import {ADDNOTE, NOTEDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const NoteCard = ({item, deleteItem, updateItem}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTEDETAIL, {note: item})}
      style={NoteCardStyle.container}>
      <View style={NoteCardStyle.checkBoxContainer}>
        <View
          style={
            item.readed ? NoteCardStyle.checkBox : NoteCardStyle.checkBoxReaded
          }></View>
      </View>
      <View style={NoteCardStyle.textContainer}>
        <Text style={NoteCardStyle.header}>{item.title}</Text>
        <Text numberOfLines={1} style={NoteCardStyle.description}>
          {item.description}
        </Text>
        <Text style={NoteCardStyle.date}>{item.date}</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ADDNOTE, {note: item, type: 'update'})
        }
        style={NoteCardStyle.trash}>
        <Edit size="24" color={AppColors.SUCCESS} variant="Bulk" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => deleteItem(item)}
        style={NoteCardStyle.trash}>
        <Trash size="24" color={AppColors.DANGER} variant="Bulk" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteCard;
