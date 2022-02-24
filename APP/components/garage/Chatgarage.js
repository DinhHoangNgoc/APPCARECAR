import React from 'react';
import{View,TextInput,SafeAreaView,TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import config from '../../controller/constan';

const Chatgarage =({route}) =>{


    const navigation = useNavigation();
    const data = route?.params?.name;

    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 50,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#e2e0e0',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="chevron-back" size={30} color="red" />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 0.25 * config.screen.width,
              fontSize: 20,
              color: 'red',
              fontWeight: 'bold',
            }}>
            {data}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 0.85 * config.screen.height,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderTopWidth: 1,
            borderTopColor: '#e2e0e0',
          }}>
          <TouchableOpacity>
            <Icon name="attach" color="red" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="image" color="red" size={25} />
          </TouchableOpacity>
          <TextInput
            placeholder="Nhap tin nhan"
            style={{width: '90%',marginLeft:5}}
            textAlignVertical="top"
          />
        </View>
      </SafeAreaView>
    );
}

export default Chatgarage;