import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import config from '../../controller/constan';


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
];
const datainfo = [
  {
    id: '1',
    name: 'Kira',
    image:
      'https://getvectorlogo.com/wp-content/uploads/2018/12/xe-com-inc-vector-logo.png',
  },
  {
    id: '2',
    name: 'JP long',
    image:
      'https://static.wixstatic.com/media/9d8ed5_e2148fe9b9674f47a2f90464d18f910c~mv2.png',
  },
  {
    id: '3',
    name: 'JP long',
    image: 'https://iweb.tatthanh.com.vn/pic/3/blog/images/image(3264).png',
  },
  {
    id: '4',
    name: 'jP long',
    image: 'https://iweb.tatthanh.com.vn/pic/3/blog/images/image(3264).png',
  },
  {
    id: '5',
    name: 'JP long',
    image:
      'https://img4.thuthuatphanmem.vn/uploads/2020/08/30/logo-audi_011740321.png',
  },
  {
    id: '6',
    name: 'JP long',
    image:
      'https://img4.thuthuatphanmem.vn/uploads/2020/08/30/logo-peugeot_011740478.png',
  },
  {
    id: '7',
    name: 'JP long',
    image:
      'https://img4.thuthuatphanmem.vn/uploads/2020/08/30/logo-audi_011740321.png',
  },
  {
    id: '8',
    name: 'JP long',
    image: 'https://iweb.tatthanh.com.vn/pic/3/blog/images/image(3264).png',
  },
  {
    id: '9',
    name: 'JP long',
    image: 'https://iweb.tatthanh.com.vn/pic/3/blog/images/image(3264).png',
  },
  {
    id: '10',
    name: 'JP long',
    image:
      'https://img4.thuthuatphanmem.vn/uploads/2020/08/30/logo-xe-vinfast_011741681.png',
  },
];

const SearchGarage = () => {


  const navigation = useNavigation();
  const [isbutton,setisbutton] = useState(true);



  const btclick = () =>{
        setisbutton(!isbutton)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="chevron-back-outline" size={35} color="red" />
          </TouchableOpacity>
          <View style={styles.btSearch}>
            <Icon style={{marginLeft: 10}} name="search-outline" size={30} />
            <TextInput
              style={{width: '100%', height: '100%'}}
              placeholder="Nhập tên garage hoặc dịch vụ"
            />
          </View>
        </View>
        <View style={styles.seclectBT}>
          <TouchableOpacity
            style={isbutton ? styles.bt : styles.bt1}
            onPress={() => {
              btclick();
            }}>
            <Text style={isbutton? {color:'#000'}: {color:'#fff'}}>Garage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={isbutton ? styles.bt1 : styles.bt}
            onPress={() => {
              btclick();
            }}>
            <Text style={isbutton? {color:'#fff'}: {color:'#000'}}>Dich Vu</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewscr}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={datainfo}
            onPress={() => setSelectedId(item.id)}
            keyExtractor={item => item.id}
            // scrollToIndex={item => item.id}: ve tim hieu them
            renderItem={({item}) => (
              <TouchableOpacity>
                <View style={styles.listItem1}>
                  <Image
                    source={{uri: item.image}}
                    style={{width: '100%', height: '50%', marginTop: 5}}
                    resizeMode="contain"
                  />
                  <Text style={styles.TEXTsrc}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              height: '100%',
              justifyContent: 'center',
            }}>
            <Icon name="chevron-forward-outline" size={40} color="red" />
          </TouchableOpacity>
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
                  navigation.navigate('Detail');
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    marginTop: 10,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btSearch: {
    marginLeft: 5,
    backgroundColor: '#e8e8e8',
    width: '85%',
    height: '95%',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
  },
  seclectBT: {
    marginTop: 20,
    width: '100%',
    height: 0.05 * config.screen.height,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bt: {
    height: '100%',
    width: 80,
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bt1: {
    height: '100%',
    width: 80,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  List: {
    width: '100%',
    height: 0.71 * config.screen.height,
  },
  flatList: {
    width: '100%',
    backgroundColor: 'white',
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    height: 45,
    borderWidth: 1,
    borderColor: '#b7b7b7',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  TEXT: {
    color: '#000',
    marginLeft: 10,
    fontSize: 15,
  },
  viewscr: {
    marginTop: 10,
    width: '100%',
    height: 0.1 * config.screen.height,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  TEXTsrc: {
    marginTop: 5,
    fontSize: 15,
    color: '#000',
  },
  listItem1: {
    height: '100%',
    width: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SearchGarage;
