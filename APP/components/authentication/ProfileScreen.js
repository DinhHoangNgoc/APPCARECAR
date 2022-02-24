import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import config from '../../controller/constan';

const infor = [{id: '1', name: 'hoang ngoc', SDT: '091548557', address: ''}];

const Profile = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.avata} onPress={toggleModal}>
              <View style={styles.imgavata}>
                <Image
                  source={{
                    uri: 'https://nhathauxaydung24h.com/wp-content/uploads/2021/12/avatar-cute-gau-nau.jpg',
                  }}
                  style={{width: '100%', height: '100%', borderRadius: 150}}
                  resizeMode="cover"
                />
              </View>
              <Text style={{marginTop: -18, color: '#fff'}}>Sửa</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.profile}>
              <Text style={styles.profileText}>Thông tin cá nhân</Text>
            </View>
            <View style={styles.profiledata}>
              <TouchableOpacity
                style={styles.BTprofile}
                onPress={() => {
                  navigation.navigate(config.screenName.UpdateProfile, {name: 'abc'});
                }}>
                <Text style={styles.textkey}>Họ Tên</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginRight: 15,
                    alignItems: 'center',
                  }}>
                  <Text style={{marginRight: 5}}>abc</Text>
                  <Icon name="chevron-forward-outline" color="#000" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled
                style={styles.BTprofile}
                >
                <Text style={styles.textkey}>Số điện thoại</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginRight: 15,
                    alignItems: 'center',
                  }}>
                  <Text style={{marginRight: 5}}>0987654321</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.BTprofile}
                onPress={() => {
                  navigation.navigate(config.screenName.UpdateAdress);
                }}>
                <Text style={styles.textkey}>Địa chỉ</Text>
                <View style={{flexDirection: 'row', marginRight: 15}}>
                  <Icon name="chevron-forward-outline" color="#000" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.BTprofile}
                onPress={() => {
                  navigation.navigate(config.screenName.UpdatePassword);
                }}>
                <Text style={styles.textkey}>Thay đổi mật khẩu</Text>
                <View style={{flexDirection: 'row', marginRight: 15}}>
                  <Icon name="chevron-forward-outline" color="#000" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.BTprofile}>
                <Text style={styles.textkey}>Liên hệ CareCar</Text>
                <View style={{flexDirection: 'row', marginRight: 15}}>
                  <Icon name="chevron-forward-outline" color="#000" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.BTprofile1}>
                <Text style={styles.textkey}>Câu hỏi thường gặp</Text>
                <View style={{flexDirection: 'row', marginRight: 15}}>
                  <Icon name="chevron-forward-outline" color="#000" size={25} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Guide}>
            <View style={styles.profile}>
              <Text style={styles.profileText}>Combo rửa xe</Text>
            </View>
            <View style={styles.Guidedata}>
              <View style={styles.Guidedatatext}>
                <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold'}}>
                  Hướng dẫn sử dụng combo rửa xe
                </Text>
                <Text style={styles.Guidetext}>
                  Step 1: Mở ứng dụng CareCar
                </Text>
                <Text style={styles.Guidetext}>
                  Step 2: Thực hiện quét mã QR-Code tại địa điểm rửa xe
                </Text>
                <Text style={styles.Guidetext}>
                  * Mã QR-Code sẽ được đặt ở quầy thanh toán{' '}
                </Text>
                <Text style={styles.Guidetext}>Step 3: Hiển thị kết quả</Text>
                <Text style={styles.Guidetext}>
                  Màn hình sẽ hiển thị thông báo thành công nếu Combo còn số
                  lượt sử dụng
                </Text>
                <Text style={styles.Guidetext}>
                  Màn hình sẽ hiển thị thông báo lỗi nếu Combo đã hết lượt sử
                  dụng
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.OUT}>
            <TouchableOpacity
              style={styles.BTOUT}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={{color: '#FFF', fontSize: 18}}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: '100%', height: 80}}>
          <Modal
            isVisible={isModalVisible}
            swipeDirection="down"
            style={{backgroundColor: 'red', marginTop: '50%'}}>
            <View style={{width: '100%'}}>
              <Text>Hello!</Text>

              <Button title="Hide modal" onPress={toggleModal} />
            </View>
          </Modal>
        </View>
      </ScrollView>
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
    height: '20%',
    width: '100%',
    backgroundColor: '#00b6ff',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avata: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgavata: {
    borderWidth: 10,
    borderColor: 'red',
    borderRadius: 100 / 2,
    height: 100,
    width: 100,
  },
  listContainer: {
    width: '100%',
    height: 0.35 * config.screen.height,
    alignItems: 'center',
  },
  profile: {
    width: '100%',
    height: '10%',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  profileText: {
    color: '#fff',
    marginLeft: 20,
    fontSize: 15,
  },
  profiledata: {
    backgroundColor: '#fff',
    marginTop: 10,
    width: '90%',
    height: '80%',
    alignItems: 'center',
    borderRadius: 15,
  },
  BTprofile: {
    width: '100%',
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#c6c4c4',
  },
  BTprofile1: {
    width: '100%',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  textkey: {
    marginLeft: 10,
    color: '#000000',
  },
  Guide: {
    marginTop: 5,
    width: '100%',
    height: 0.4 * config.screen.height,
    alignItems: 'center',
  },
  Guidedata: {
    backgroundColor: '#fff',
    marginTop: 10,
    width: '90%',
    height: '80%',
    borderRadius: 15,
    alignItems: 'center',
  },
  Guidedatatext: {
    width: '90%',
    marginTop: 10,
    marginVertical: 10,
  },
  Guidetext: {
    marginTop: 5,
    color: '#000000',
    fontSize: 15,
  },
  OUT: {
    marginTop: 10,
    marginBottom: 0.15 * config.screen.height,
    width: '100%',
    height: 0.2 * config.screen.height,
    alignItems: 'center',
  },
  BTOUT: {
    marginTop: 10,
    width: '90%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
