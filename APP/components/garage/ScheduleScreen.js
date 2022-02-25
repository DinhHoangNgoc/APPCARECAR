import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import {LocaleConfig} from 'react-native-calendars';

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
  dayNames: ['Thu 2', 'Thu 3','Thu 4','Thu 5','Thu 6','Thu 7','CN'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "hom",
};
LocaleConfig.defaultLocale = 'fr';

const Schedule = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={{
              justifyContent: 'center',
              color: '#000',
            }}>
            Bạn có thể chọn ngày để đặt lịch hẹn nhanh với garage
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              display: 'flex',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal:20
              }}>
              <Icon name="ellipse" size={30} color="#00c3e3" />
              <Text>Có thể đặt</Text>
            </View>
            <View 
              style={{
                  flexDirection: 'row',   
                  alignItems: 'center',
                 paddingHorizontal:20 
                  }}>
              <Icon name="ellipse" size={30} color="#ead5e5" />
              <Text>Hết chỗ</Text>
            </View>
          </View>
        </View>
        <Calendar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default Schedule;
