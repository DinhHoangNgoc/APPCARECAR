import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import config from '../../../controller/constan';

const UpdateAdress = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="chevron-back-outline" size={30} color="red" />
          </TouchableOpacity>
          <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
            Cập nhật địa chỉ
          </Text>
          <TouchableOpacity style={{marginRight: 15}}>
            <Text style={{color: 'red', fontSize: 20}}>Lưu</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.data}>
          <TouchableOpacity
            style={{width: '100%', height: 65, borderBottomWidth: 1}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 5}}>
              Tỉnh/thành phố
            </Text>
            <Text style={{width: '100%'}}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 65,
              borderBottomWidth: 1,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 5}}>
              Quận/Huyện
            </Text>
            <Text style={{width: '100%'}}></Text>
          </TouchableOpacity>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 5}}>
              Địa chỉ chi tiết
            </Text>
            <TextInput style={styles.input} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 0.06 *config.screen.height,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  data: {
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
  },
});

export default UpdateAdress;
