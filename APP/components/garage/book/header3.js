import React,{useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';
import config from '../../../controller/constan';

import {useNavigation} from '@react-navigation/native';
const Headers3 = ({route}) => {
    const navigation = useNavigation();
    const [issuess, setissuess] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <ScrollView style={{width: '95%'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            borderBottomWidth: 1,
            borderBottomColor: '#b5b5b5',
            alignItems: 'center',
          }}>
          <Icon name="person" color="red" size={25} style={{marginLeft: 10}} />
          <TextInput
            style={{width: '100%', height: '100%', marginLeft: 5}}
            placeholder="Ho Ten"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            borderBottomWidth: 1,
            borderBottomColor: '#b5b5b5',
            alignItems: 'center',
          }}>
          <Icon name="call" color="red" size={25} style={{marginLeft: 10}} />
          <TextInput
            style={{width: '100%', height: '100%', marginLeft: 5}}
            placeholder="Số điện thoại"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            borderBottomWidth: 1,
            borderBottomColor: '#b5b5b5',
            alignItems: 'center',
          }}>
          <Icon name="car" color="red" size={25} style={{marginLeft: 10}} />
          <TextInput
            style={{width: '100%', height: '100%', marginLeft: 5}}
            placeholder="Thông tin xe(tên xe,năm sản xuất...)"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            borderBottomWidth: 1,
            borderBottomColor: '#b5b5b5',
            alignItems: 'center',
          }}>
          <Icon
            name="pricetag"
            color="red"
            size={25}
            style={{marginLeft: 10}}
          />
          <TextInput
            style={{width: '100%', height: '100%', marginLeft: 5}}
            placeholder="Biển số xe"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            borderBottomWidth: 1,
            borderBottomColor: '#b5b5b5',
            alignItems: 'center',
          }}>
          <Icon name="reader" color="red" size={25} style={{marginLeft: 10}} />
          <TextInput
            style={{width: '100%', height: '100%', marginLeft: 5}}
            placeholder="Số khung xe"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            borderBottomWidth: 1,
            borderBottomColor: '#b5b5b5',
            alignItems: 'center',
          }}>
          <Icon
            name="information-circle"
            color="red"
            size={25}
            style={{marginLeft: 10}}
          />
          <TextInput
            style={{width: '100%', height: '100%', marginLeft: 5}}
            placeholder="Thông tin thêm"
          />
        </View>
        <CheckBox
          center
          containerStyle={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
          }}
          color="white"
          title="Lần đầu đặt lịch tại CareCar"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={issuess}
          onPress={() => setissuess(!issuess)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    flex: 1,
  },
  BTselect: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Headers3;
