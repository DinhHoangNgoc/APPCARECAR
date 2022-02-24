import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import config from '../../../controller/constan';

const UpdatePassword = () => {
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
          <Text
            style={{
              color: 'red',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 0.22 * config.screen.width
            }}>
            Thay đổi mật khẩu
          </Text>
        </View>
        <View style={styles.data}>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10}}>
              Mật khẩu cũ
            </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10}}>
              Mật khẩu mới
            </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10}}>
              Xác nhận mật khẩu mới
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
    height: 0.06 * config.screen.height,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-start',
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

export default UpdatePassword;
