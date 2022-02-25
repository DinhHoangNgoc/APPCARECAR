import React from 'react';
import{ View, Text, SafeAreaView, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import config from '../../../controller/constan';

import { useNavigation } from '@react-navigation/native';

const Headers1 = ({route}) =>{

     const navigation = useNavigation();
     const name = route?.params?.name ?? '';

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.body}>
          <View>
            <TouchableOpacity
              style={styles.BTselect}
              onPress={() => {
                navigation.navigate(config.screenName.Listgarage);
              }}>
              <Icon name="home" color="red" size={25} />
              <Text style={{color: '#000', marginLeft: 5}}>{name}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Icon
                  name="calendar"
                  color="red"
                  size={25}
                  style={{marginLeft: 10}}
                />
                <Text style={{marginLeft: 5, color: '#000'}}>Ngày hẹn</Text>
              </View>
              <Text style={{marginLeft: 10, marginTop: 10, color: '#000'}}>
                23-02-2022
              </Text>
            </View>
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(config.screenName.Calendar);
                }}
                style={{
                  padding: 10,
                  backgroundColor: 'red',
                  marginRight: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <Text style={{color: '#fff'}}>Chọn ngày</Text>
              </TouchableOpacity>
            </>
          </View>
          <View style={{marginTop: 10, marginHorizontal: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="time"
                color="red"
                size={30}
                style={{marginLeft: 10}}
              />
              <Text style={{marginLeft: 5, color: '#000'}}>Giờ hẹn</Text>
            </View>
            <View></View>
          </View>
        </View>
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  body: {
    width:config.screen.width,
    height:config.screen.height
  },
  BTselect: {
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:10
  },
});


export default Headers1;