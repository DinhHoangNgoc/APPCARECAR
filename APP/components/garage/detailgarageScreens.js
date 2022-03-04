import React ,{useState} from 'react'
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import Slider from '../Load/Slider'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import Evaluates from './EvaluateScreen'
import Information from './InfomationScreen'
import Schedule from './ScheduleScreen'
import Services from './ServiceScreen'
import config from '../../controller/Constant'
import {ClusterMap} from 'react-native-cluster-map'
import {Marker} from 'react-native-maps'


const data = [
  'https://danviet.mediacdn.vn/upload/1-2016/images/2016-03-12/1457778024-gara5.jpg',
  'https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/He-thong-bai-do-xe-tu-dong-gia-dinh-8.jpg',
];

const DetailGarage = ({route}) => {

  const [view, setView] = useState('1');

  const datas = route?.params?.item;

  setTab = (tab) => {
    setView(tab);
  };

  selectedTab = () => {
    switch (view) {
      case '1':
        return <Information />;
      case '2':
        return <Services />;
      case '3':
        return <Schedule/>;
      case '4':
        return <Evaluates />;
      default:
        return; /* empty div maybe */
    }
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back" size={25} color="red" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'red',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {datas?.name}
        </Text>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="share-social" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container} stickyHeaderIndices={[3]}>
        <Slider listImage={data} />
        <View style={styles.information}>
          <View>
            <Text style={styles.NAME}>{datas?.name}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 5,
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Icon name="location" />
              <Text style={styles.ADDRESS}>{datas?.address}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 5,
                }}>
                <Text>5</Text>
                <Icon name="star" color="yellow" size={20} />
              </View>
            </View>
            <View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 5,
                }}>
                <Text>16</Text>
                <Icon
                  name="chatbox-ellipses"
                  color="red"
                  size={20}
                  style={{marginTop: 2}}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ggmap}>
          <ClusterMap
            region={{
              latitude: 16.0755022,
              longitude: 108.2222097,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker coordinate={{latitude: 16.075502, longitude: 108.222209}} />
            <Marker
              coordinate={{latitude: 16.0755021, longitude: 108.2222098}}
            />
            <Marker coordinate={{latitude: 16.0755025, longitude: 108.22221}} />
          </ClusterMap>
          <View style={styles.BTmap}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <Text style={{color: 'green', fontWeight: 'bold', fontSize: 12}}>
                ĐANG MỞ CỬA
              </Text>
              <Text style={{color: '#000'}}>08:00 - 17:00</Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'red',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                marginHorizontal: 5,
              }}
              onPress={() => {
                navigation.navigate(config.screenName.Bookcalendar);
              }}>
              <Icon
                name="checkbox"
                color="red"
                size={20}
                style={{marginLeft: 5}}
              />
              <Text style={{color: 'red', marginHorizontal: 5}}>
                Đặt lịch ngay
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'red',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                padding: 2,
              }}
              onPress={() => {
                navigation.navigate(config.screenName.Chatgarage, {
                  name: datas?.name,
                });
              }}>
              <Icon
                name="chatbox-ellipses"
                color="red"
                size={20}
                style={{marginLeft: 5}}
              />
              <Text style={{color: 'red', marginHorizontal: 5}}>Chat ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
        <>
          <View style={styles.Tabs}>
            <TouchableOpacity
              onPress={() => setTab('1')}
              style={view == '1' ? styles.BTtabs1 : styles.BTtabs}>
              <Text style={view == '1' ? styles.TEXT1 : styles.TEXT2}>
                Thông Tin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTab('2')}
              style={view == '2' ? styles.BTtabs1 : styles.BTtabs}>
              <Text style={view == '2' ? styles.TEXT1 : styles.TEXT2}>
                Dịch Vụ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTab('3')}
              style={view == '3' ? styles.BTtabs1 : styles.BTtabs}>
              <Text style={view == '3' ? styles.TEXT1 : styles.TEXT2}>
                Lịch hẹn
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view == '4' ? styles.BTtabs1 : styles.BTtabs}
              onPress={() => setTab('4')}>
              <Text style={view == '4' ? styles.TEXT1 : styles.TEXT2}>
                Đánh giá
              </Text>
            </TouchableOpacity>
          </View>
        </>
        <View style={{width: '100%'}}>{selectedTab()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailGarage;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
  },
  adrress: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 5,
  },
  NAME: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  ADDRESS: {
    fontSize: 12,
  },
  information: {
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  ggmap: {
    padding: 50,
  },
  BTmap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  BTtabs: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  BTtabs1: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    flex: 1,
  },
  TEXT1: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
  TEXT2: {
    color: '#000',
    fontSize: 15,
  },
});
