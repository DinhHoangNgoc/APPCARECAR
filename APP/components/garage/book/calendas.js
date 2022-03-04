import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import Icon from 'react-native-vector-icons/Ionicons'
import {LocaleConfig} from 'react-native-calendars'
import {useNavigation} from '@react-navigation/native'

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Thang 1',
    'Thang 2',
    'Thang 3',
    'Thang 4',
    'Thang 5',
    'Thang 6',
    'Thang 7',
    'Thang 8',
    'Thang 9',
    'Thang 10',
    'Thang 11',
    'Thang 12',
  ],
  // monthNamesShort: [
  //   'Janv.',
  //   'Févr.',
  //   'Mars',
  //   'Avril',
  //   'Mai',
  //   'Juin',
  //   'Juil.',
  //   'Août',
  //   'Sept.',
  //   'Oct.',
  //   'Nov.',
  //   'Déc.',
  // ],
  dayNames: ['Thu 2', 'Thu 3', 'Thu 4', 'Thu 5', 'Thu 6', 'Thu 7', 'CN'],
  dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  today: 'hom nay ',
};
LocaleConfig.defaultLocale = 'fr';

const Calendars = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() =>{navigation.goBack()}}>
            <Icon name="chevron-back" size={30} color="red" />
          </TouchableOpacity>
          <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
            {' '}
            Chon Ngay{' '}
          </Text>
          <View />
        </View>
        <Calendar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginLeft:-10,
    padding: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
});

export default Calendars;
