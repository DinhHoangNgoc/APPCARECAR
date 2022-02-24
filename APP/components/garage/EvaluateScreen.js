import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Model,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Rating, AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
import config from '../../controller/constan';



const info = [
  {
    id: '1',
    name: 'Dinh Hoang Ngoc',
    star: '5.0',
    comment: 'very good',
    day: '21-02-2012',
    image:
      'https://nhathauxaydung24h.com/wp-content/uploads/2021/12/avatar-cute-gau-nau.jpg',
  },
  {
    id: '2',
    name: 'Nguyen Van A',
    star: '5.0',
    comment: 'very good',
    day: '21-02-2012',
    image:
      'https://nhathauxaydung24h.com/wp-content/uploads/2021/12/avatar-cute-gau-nau.jpg',
  },
  {
    id: '3',
    name: 'Nguyen Van A',
    star: '2.5',
    comment: 'very good',
    day: '21-02-2012',
    image:
      'https://haycafe.vn/wp-content/uploads/2022/01/Anh-meo-FF-cute-ngau.jpg',
  },
  {
    id: '4',
    name: 'Nguyen Van A',
    star: '3.0',
    comment: 'very good',
    day: '21-02-2012',
    image:
      'https://nhathauxaydung24h.com/wp-content/uploads/2021/12/avatar-cute-gau-nau.jpg',
  },
  {
    id: '5',
    name: 'Nguyen Van A',
    star: '5.0',
    comment: 'very good',
    day: '21-02-2012',
    image:
      'https://haycafe.vn/wp-content/uploads/2022/01/Anh-meo-FF-cute-ngau.jpg',
  },
  {
    id: '6',
    name: 'Nguyen Van A',
    star: '4.0',
    comment: 'very good',
    day: '21-02-2012',
    image:
      'https://nhathauxaydung24h.com/wp-content/uploads/2021/12/avatar-cute-gau-nau.jpg',
  },
  {
    id: '7',
    name: 'Nguyen Van A',
    star: '5.0',
    comment: 'very good',
    day: '21-02-2012',
    image:
      'https://haycafe.vn/wp-content/uploads/2022/01/Anh-meo-FF-cute-ngau.jpg',
  },
  {
    id: '7',
    name: 'Nguyen Van A',
    star: '4.0',
    comment: 'very good',
    day: '21-02-2012',
    image:
      'https://haycafe.vn/wp-content/uploads/2022/01/Anh-meo-FF-cute-ngau.jpg',
  },
];

const Evaluates = () => {
  const navigation = useNavigation();

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>{/* <Model></Model> */}</View>
      <View style={styles.BT}>
        <View
          style={{
            width: '80%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate(config.screenName.WriteEvaluate);
            }}>
            <Text style={{color: '#fff'}}>Viết đánh giá</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Icon name="funnel" size={20} />
            <Text>Mới nhất</Text>
            <Icon name="chevron-down" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listcmt}>
        {info.map((user, index) => {
          return (
            <ScrollView key={index}>
              <View style={styles.list}>
                <Image
                  source={{uri: user.image}}
                  style={{
                    marginTop: 10,
                    marginLeft: 5,
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                  }}
                />
                <View style={{marginLeft: 10}}>
                  <Text>{user.name}</Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text>{user.star}</Text>
                    <Rating
                      style={{marginHorizontal: 2}}
                      // showRating
                      onFinishRating={ratingCompleted}
                      // style={{paddingVertical: 10}}
                      imageSize={10}
                      readonly
                      startingValue={user.star}
                    />
                    <Icon name="chevron-down" size={15} />
                  </TouchableOpacity>
                  <Text style={{color: '#000000'}}>{user.comment}</Text>
                  <View
                    style={{
                      marginTop: 5,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        borderRightWidth: 1,
                        width: 60,
                        borderRightColor: '#b2b2b2',
                      }}>
                      {user.day}
                    </Text>
                    <Icon
                      style={{marginLeft: 5}}
                      name="chatbox-ellipses-outline"
                      size={15}
                    />
                    <Text style={{fontSize: 12, marginLeft: 2}}>0</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const TEXT = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BT: {
    width: '100%',
    height: 0.1 * config.screen.height,
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'red',
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  button1: {
    backgroundColor: '#fff',
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
  },
  listcmt: {
    width: '100%',
  },
  list: {
    marginTop: 1,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});

export default Evaluates;
