import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import config from '../../controller/constan';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');

  const [issuess, setissuess] = useState(false);

  // const handleLogin = async () => {
  //   return axios.post(user_base_url + '/login', user);
  //   //   if (!phone || !password) {
  //   //     alert('Không được để trống!');
  //   //   } else {
  //   //     try {
  //   //       await handleLoginAPI(phone, password).then;
  //   //     } catch (e) {
  //   //       console.log(e.response);
  //   //     }
  //   //   }
  // };
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
          <View style={styles.checkb}>
            <CheckBox
              center
              containerStyle={{
                width: '40%',
                backgroundColor: '#FFFFFF',
                marginLeft: 20,
                borderColor: '#FFFFFF',
              }}
              color="white"
              title="Cá nhân"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={issuess}
              onPress={() => setissuess(!issuess)}
            />
            <CheckBox
              center
              containerStyle={{
                width: '40%',
                backgroundColor: '#FFFFFF',
                borderColor: '#FFFFFF',
              }}
              title="Garage"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={!issuess}
              onPress={() => setissuess(!issuess)}
            />
          </View>
          <View style={styles.ipdata}>
            <Text style={styles.TEXT}>Số điện thoại</Text>
            <TextInput
              style={styles.TEXTIP}
              keyboardType={'numeric'}
              autoFocus={true}
              value={phone}
              onChangeText={text => setphone(text)}
            />
            <Text style={styles.TEXT}>Mật khẩu</Text>
            <TextInput
              style={styles.TEXTIP}
              secureTextEntry={true}
              value={password}
              onChangeText={password => setpassword(password)}
            />
          </View>
          <View style={styles.events}>
            <TouchableOpacity
              style={styles.BTlogin}
              onPress={() => {
                // handleLogin();
              }}>
              <Text style={styles.TEXTLG}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.fb}>
              <Image
                source={config.icons.facebook}
                style={{width: '100%', height: '100%'}}
                resizeMode="center"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.fb}>
              <Image
                source={config.icons.google}
                style={{width: '100%', height: '100%'}}
                resizeMode="center"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.working}>
          <TouchableOpacity style={styles.QMK}>
            <Text style={styles.TEXTQMK}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <View style={styles.register}>
            <Text>Chưa có tài khoản ?</Text>
            <TouchableOpacity
              style={styles.BTREG}
              onPress={() => {
                navigation.navigate(config.screenName.Register);
              }}>
              <Text style={styles.TEXTREG}>Đăng ký</Text>
            </TouchableOpacity>
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
  BTout: {
    width: '10%',
    margin: 10,
  },
  inputdata: {
    backgroundColor: '#fff',
    width: '80%',
    height: 0.65 * config.screen.height,
    marginTop: -0.5 * config.screen.height,
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
    marginTop: 20,
    fontFamily: 'bold',
    fontSize: 20,
  },
  TEXTIP: {
    marginLeft: 10,
    width: '90%',
    borderBottomWidth: 1,
    fontSize: 18,
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
    height: 50,
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
    marginTop: 10,
  },
  BTREG: {
    marginLeft: 5,
    width: 0.15 * config.screen.width,
    backgroundColor: 'red',
    height: 20,
  },
  TEXTREG: {
    color: '#fff',
    marginLeft: 5,
  },
  icons: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  fb: {
    width: '20%',
  },
});

export default Login;
