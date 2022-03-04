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
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Slider from '../Load/Slider'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'
import config from '../../controller/Constant'

const data = [
  'https://danviet.mediacdn.vn/upload/1-2016/images/2016-03-12/1457778024-gara5.jpg',
  'https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/He-thong-bai-do-xe-tu-dong-gia-dinh-8.jpg',
];

const StaticProductsImage =
  'https://danangaz.com/wp-content/uploads/2019/02/sua-chua-o-to-da-nang-04-min.jpg';

const Home = ({route}) => {
  
  const location = route?.params?.location ?? 'DA NANG';
  const navigation = useNavigation()
  const [repo, setRepo] = useState([])

  useEffect(() => {
    const getrepo = async () => {
      try {
        const response = await axios.get(
          'https://keka-v2.herokuapp.com/api/garages',
        );
        const myrepo = response.data;
        setRepo(myrepo);
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
            style={styles.img}
            resizeMode="center"
          />
          <Text style={styles.TEXTBTtop}>Gọi cứu hộ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.BT}
          onPress={() => {
            navigation.navigate(config.screenName.Bookcalendar);
          }}

        >
          <Image
            source={config.icons.carcheck}
            style={styles.img}
            resizeMode="center"
          />
          <Text style={styles.TEXTBTtop}>Đặt lịch hẹn</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.BT}
          onPress={() => {navigation.navigate(config.screenName.PromotionScreens)}}
        >
          <Image
            source={config.icons.giftbox}
            style={styles.img}
            resizeMode="center"
          />
          <Text style={styles.TEXTBTtop}>Khuyến mãi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BT}>
          <Image
            source={config.icons.carwash}
            style={styles.img}
            resizeMode="center"
          />
          <Text style={styles.TEXTBTtop}>Rửa xe</Text>
        </TouchableOpacity>
      </View>
      <View>
          <View style={styles.searchAddress}>
            <TouchableOpacity 
              onPress={() => {navigation.navigate(config.screenName.SearchGarage)}}
              style={styles.btSearch}
            >
              <Icon name="search" size={25} />
              <Text style={{paddingHorizontal:5}}>Nhap ten garage hoac dich vu</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => {navigation.navigate(config.screenName.ListAddress)}}
              style={styles.btAddress}
            >
              <Text>{location}</Text>
              <Icon name="chevron-down" style={{marginLeft:5}}/>
          </TouchableOpacity>
          </View>
      </View>
      <View style={styles.list}>
        {repo?.data?.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(config.screenName.DetailgarageScreens,{item: item});
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
    marginHorizontal:7,
    padding:10,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop:5,
    flex:1
  },
  BT: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
    width:'24%',
    padding:10
  },
  img:{
    width: 50,
    height: 50
  },
  TEXTBTtop:{
    color: 'red',
    marginTop: 5,
    fontSize:12
  },
  searchAddress: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical:5,
    flex:1
  },
  btSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding:3,
    paddingHorizontal: 25,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red'
  },

  btAddress: {
    marginHorizontal:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding:3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
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
