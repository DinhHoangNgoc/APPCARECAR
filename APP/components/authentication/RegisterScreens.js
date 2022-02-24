import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import config from '../../controller/constan';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [issuess, setissuess] = useState(false);;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.BTout}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back" color="white" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <View style={styles.inputdata}>
            <View style={styles.imgheader}>
              <View style={styles.img}>
                <Image
                  source={config.icons.logo}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="center"
                />
              </View>
            </View>
            <View style={styles.ipdata}>
              <Text style={styles.TEXT}>Họ và tên</Text>
              <TextInput style={styles.TEXTIP} />
              <Text style={styles.TEXT}>Số điện thoại</Text>
              <TextInput
                style={styles.TEXTIP}
                keyboardType={'numeric'}
                autofocus={true}
              />
              <Text style={styles.TEXT}>Mật khẩu</Text>
              <TextInput style={styles.TEXTIP} secureTextEntry={true} />
              <Text style={styles.TEXT}>Xác nhận mật khẩu</Text>
              <TextInput style={styles.TEXTIP} secureTextEntry={true} />
            </View>
            <View style={styles.events}>
              <TouchableOpacity
                style={styles.BTlogin}
                onPress={() => {
                  navigation.navigate(config.screenName.Confirm);
                }}>
                <Text style={styles.TEXTLG}>Tiếp tục</Text>
              </TouchableOpacity>
              <View style={styles.working}>
                <View style={styles.TEXTBT}>
                  <Text>
                    Ở bước tiếp theo bạn sẽ nhận được mã xác nhận số điện thoại
                    qua SMS
                  </Text>
                </View>
                <View style={styles.register}>
                  <Text>Bạn đã có tài khoản ?</Text>
                  <TouchableOpacity
                    style={styles.BTREG}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Text style={styles.TEXTREG}>Đăng nhập</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#ff1919',
  },
  content: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    width: '80%',
    height: 0.8 * config.screen.height,
    marginTop: -0.4 * config.screen.height,
  },
  BTout: {
    width: '10%',
    margin: 10,
  },
  inputdata: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 25,
    justifyContent: 'center',
  },
  imgheader: {
    width: '100%',
    alignItems: 'center',
  },
  img: {
    width: '50%',
    height: 0.1 * config.screen.height,
    alignItems: 'center',
  },
  checkb: {
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
  },
  TEXT: {
    marginLeft: 10,
    marginTop: 15,
    fontFamily: 'bold',
    fontSize: 20,
  },
  TEXTIP: {
    marginLeft: 10,
    width: '90%',
    borderBottomWidth: 1,
  },
  events: {
    width: '100%',
    marginTop: 25,
    alignItems: 'center',
  },
  BTlogin: {
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    borderRadius: 25,
  },
  TEXTLG: {
    color: '#fff',
    fontFamily: 'bold',
    fontSize: 18,
  },
  working: {
    marginTop: 10,
    alignItems: 'center',
  },
  TEXTQMK: {
    color: 'red',
    fontSize: 15,
  },
  register: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  BTREG: {
    marginLeft: 5,
    width: 0.2 * config.screen.width,
    backgroundColor: 'red',
    height: 20,
  },
  TEXTREG: {
    color: '#fff',
    marginLeft: 5,
  },
  TEXTBT: {
    width: '80%',
  },
});

export default Register;
