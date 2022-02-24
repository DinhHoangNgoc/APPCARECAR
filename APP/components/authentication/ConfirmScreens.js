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
import Icon from 'react-native-vector-icons/Ionicons';
import config from '../../controller/constan';


const Register = ({navigation}) => {
  const [issuess, setissuess] = useState(false);
  // const [issues,setissues] =useState(false);
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
          <View style={styles.ipdata}>
            <Text style={styles.TEXT}>Mã xác thực</Text>
            <TextInput
              style={styles.TEXTIP}
              keyboardType={'numeric'}
              autofocus={true}
            />
          </View>
          <View style={styles.events}>
            <TouchableOpacity style={styles.BTlogin}>
              <Text style={styles.TEXTLG}>Xác nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BTCofirm}>
              <Text style={styles.TEXTCofim}>Gửi lại mã </Text>
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
    height: 0.4 * config.screen.height,
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
  BTCofirm: {
    margin: 10,
  },
  TEXTCofim: {
    color: 'red',
    fontFamily: 'bold',
    fontSize: 16,
  },
});

export default Register;
