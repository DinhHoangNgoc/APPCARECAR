import React from 'react';
import {View, Text, SafeAreaView, StyleSheet,TextInput,FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import config from '../../../controller/constan';
import { useNavigation } from '@react-navigation/native';


const infor = [
  {
    id: '1',
    name: 'Shinwa Pro Garage',
    star: '5',
    comment: '0',
  },
  {
    id: '2',
    name: 'Car Wash',
    star: '4',
    comment: '0',
  },
  {
    id: '3',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
  {
    id: '4',
    name: 'JP long',
    star: '4',
    comment: '0',
  },
  {
    id: '5',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
  {
    id: '6',
    name: 'JP long',
    star: '4',
    comment: '0',
  },
  {
    id: '7',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
  {
    id: '8',
    name: 'JP long',
    star: '4',
    comment: '0',
  },
  {
    id: '9',
    name: 'P long',
    star: '4',
    comment: '0',
  },
  {
    id: '10',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
  {
    id: '11',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
  {
    id: '12',
    name: 'JP long',
    star: '4',
    comment: '0',
  },
  {
    id: '13',
    name: 'JP long',
    star: '4',
    comment: '0',
  },
  {
    id: '14',
    name: 'JP long',
    star: '4',
    comment: '0',
  },
  {
    id: '15',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
  {
    id: '16',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
  {
    id: '17',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
  {
    id: '18',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
  {
    id: '19',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
  {
    id: '20',
    name: 'Garage Nhật Cường',
    star: '4',
    comment: '0',
  },
];



const Listgarage = ()=>{
    const navigation = useNavigation();

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Icon name="chevron-back" color="red" size={30} />
          </TouchableOpacity>
          <Text
            style={{
              color: 'red',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 100,
            }}>
            Chọn Garage
          </Text>
        </View>
        <View style={{alignItems: 'center', height: '100%',marginTop:10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#b2b2b2',
              width: '95%',
              height: 35,
              borderRadius: 10,
            }}>
            <Icon
              name="search"
              size={25}
              style={{
                marginLeft: 10,
              }}
            />
            <TextInput
              style={{width: '90%', height: '100%'}}
              placeholder="Nhập để tìm kiếm..."
            />
          </View>
          <View style={styles.List}>
            <FlatList
              style={styles.flatList}
              data={infor}
              onPress={() => setSelectedId(item.id)}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(config.screenName.Bookcalendar);
                  }}>
                  <View style={styles.listItem}>
                    <Text style={styles.TEXT}>{item.name}</Text>
                    <View style={{flexDirection: 'row', marginRight: 15}}>
                      <View style={{alignItems: 'center', marginRight: 10}}>
                        <Text>{item.star}</Text>
                        <Icon name="star" color="yellow" />
                      </View>
                      <View style={{alignItems: 'center'}}>
                        <Text>{item.comment}</Text>
                        <Icon name="chatbox-ellipses" color="red" />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  List: {
    marginTop: 10,
    width: '100%',
    marginBottom: 25,
  },
  flatList: {
    width: '100%',
    backgroundColor: 'white',
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#b7b7b7',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  TEXT: {
    color: '#000',
    marginLeft: 10,
    fontSize: 15,
  },
});
export default Listgarage;
