import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '../Load/Slider';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import config from '../../controller/constan';

const data = [
  'https://danviet.mediacdn.vn/upload/1-2016/images/2016-03-12/1457778024-gara5.jpg',
  'https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/He-thong-bai-do-xe-tu-dong-gia-dinh-8.jpg',
];

const StaticProductsImage =
  'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg';

const products = [
  {
    id: 1,
    name: 'shinwa Pro Garage',
    adress: '630 Nguyen Huu Tho, cam le, Da nang',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg',
  },
  {
    id: 2,
    name: 'JP Long',
    adress: 'Lo 15-16 Nam Tran, Lien chieu, Da Nanng',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://thietbitudongags.com/wp-content/uploads/2018/11/san_nang_garage_ngam-19.jpg}',
  },
  {
    id: 3,
    name: 'AT Auto',
    adress: '630 Nguyen Huu Tho, cam le, Da nang',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg',
  },
  {
    id: 4,
    name: 'AT Auto',
    adress: '630 Nguyen Huu Tho, cam le, Da nang',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg',
  },
  {
    id: 5,
    name: 'AT Auto',
    adress: '630 Nguyen Huu Tho, cam le, Da nang',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg',
  },
  {
    id: 6,
    name: 'AT Auto',
    adress: '630 Nguyen Huu Tho, cam le, Da nang',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg',
  },
  {
    id: 7,
    name: 'AT Auto',
    adress: '630 Nguyen Huu Tho, cam le, Da nang',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg',
  },
  {
    id: 8,
    name: 'AT Auto',
    adress: '630 Nguyen Huu Tho, cam le, Da nang',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg',
  },
  {
    id: 9,
    name: 'AT Auto',
    adress: '630 Nguyen Huu Tho, cam le, Da nang',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg',
  },
  {
    id: 10,
    name: 'AT Auto',
    adress: '630 Nguyen Huu Tho, cam le, Da nang',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg',
  },
  {
    id: 11,
    name: 'AT Auto',
    adress: '630 Nguyen Huu Tho, cam le, Da nang',
    star: 4.5,
    comment: 10,
    cmtimage: 0,
    image:
      'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg',
  },
];

const Home = ({route}) => {
  const location = route?.params?.location ?? 'DA NANG';
  const navigation = useNavigation();
  const [repo, setrepo] = useState([]);
  const [isMounted] = useState(true);

  useEffect(() => {
    const getrepo = async () => {
      try {
        const response = await axios.get(
          'https://keka-v2.herokuapp.com/api/garages',
        );
        const myrepo = response.data;
        setrepo(myrepo);
      } catch (e) {
        console.log(e);
      }
    };
    getrepo();
  }, []);

  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[2]}>
      <Slider listImage={data} />
      <View style={styles.BTtop}>
        <TouchableOpacity style={styles.BT} 
          onPress={() => {navigation.navigate(config.screenName.Rescue)}}
        >
          <Image
            source={config.icons.maintenance}
            style={{width: '100%', height: '60%'}}
            resizeMode="center"
          />
          <Text style={styles.TEXTBTtop}>Gọi cứu hộ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BT}>
          <Image
            source={config.icons.carcheck}
            style={{width: '100%', height: '60%'}}
            resizeMode="center"
          />
          <Text style={styles.TEXTBTtop}>Đặt lịch hẹn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BT}>
          <Image
            source={config.icons.giftbox}
            style={{width: '100%', height: '60%'}}
            resizeMode="center"
          />
          <Text style={styles.TEXTBTtop}>Khuyến mãi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BT}>
          <Image
            source={config.icons.carwash}
            style={{width: '100%', height: '60%'}}
            resizeMode="center"
          />
          <Text style={styles.TEXTBTtop}>Rửa xe</Text>
        </TouchableOpacity>
      </View>
      <>
        <View style={styles.searchadress}>
          <TouchableOpacity
            style={styles.BTsearch}
            onPress={() => {
              navigation.navigate(config.screenName.SearchGarage);
            }}>
            <Icon name="search" size={20} />
            <Text style={styles.TEXTBTsearch}>
              Nhập tên garage hoặc dịch vụ
            </Text>
          </TouchableOpacity>
          <View style={styles.viewpicker}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(config.screenName.ListAddress);
              }}>
              <Text>{location}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
      <View style={styles.list}>
        {repo?.data?.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(config.screenName.Detail,{item: item});
                }}>
                <View style={styles.listItems}>
                  <Image
                    source={{uri: item?.avatar}}
                    style={{
                      width: '100%',
                      height: 100,
                      borderRadius: 10,
                    }}
                    resizeMode="contain"
                  />
                  <Text style={styles.TEXTName}>{item?.name}</Text>
                  <View style={styles.viewCT}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Icon name="star" color="yellow" />
                      <Text style={{marginLeft: 5, color: '#000000'}}>
                        {item?.avg_rating}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Icon name="chatbox-ellipses" color="red" />
                      <Text style={{marginLeft: 5, color: '#000000'}}>
                        {item?.review_count}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Icon name="camera" color="red" />
                      <Text style={{marginLeft: 5, color: '#000000'}}>
                        {item?.review_images_count}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 5,
                      width: '95%',
                    }}>
                    <Icon name="location-outline" color="#000000" />
                    <Text style={styles.TEXTAD}>{item?.address}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BTtop: {
    align: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 0.1 * config.screen.height,
    flexDirection: 'row',
  },

  BTtop: {
    align: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 0.1 * config.screen.height,
    flexDirection: 'row',
  },
  BT: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: 0.22 * config.screen.width,
    height: '100%',
    margin: 5,
    borderRadius: 10,
  },
  searchadress: {
    marginLeft: 10,
    marginTop: 20,
    width: '100%',
    height: 0.05 * config.screen.height,
    flexDirection: 'row',
  },
  BTsearch: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '65%',
    height: '100%',
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'red',
  },

  viewpicker: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '25%',
    heightheight: '100%',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 15,
  },
  list: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  listItems: {
    marginHorizontal: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    width: 0.45 * config.screen.width,
    justifyContent: 'center',
    borderRadius: 10,
  },
  TEXTName: {
    marginLeft: 10,
    fontFamily: 'balihoscript',
    fontSize: 18,
    color: '#000000',
  },
  TEXTAD: {
    marginLeft: 5,
    width: '90%',
    fontSize: 11,
    color: '#000000',
    fontFamily: 'balihoscript',
  },
  viewCT: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Home;
