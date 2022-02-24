import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import config from '../../controller/constan';

const WriteEvaluate = () => {
  const navigation = useNavigation();

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="chevron-back" color="red" size={30} />
          </TouchableOpacity>
          <Text style={styles.TEXT}>Đánh Giá</Text>
          <Text />
        </View>
        <ScrollView style={styles.scr}>
          <View style={styles.headerbody}>
            <Image
              source={{
                uri: 'https://datlichbaoduong.com/wp-content/uploads/2020/07/Garage-Que-Huong.jpg',
              }}
              style={{width: '25%', height: '95%', marginLeft: 10}}
              resizeMode="contain"
            />
            <View style={{marginLeft: 10}}>
              <Text>Name</Text>
              <Text>Adrress</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyrating}>
              <Text style={styles.textrating}>Tư vấn & quy trình làm việc</Text>
              <AirbnbRating
                showRating={false}
                count={5}
                // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                defaultRating={5}
                onFinishRating={ratingCompleted}
                size={30}
              />
            </View>
            <View style={styles.bodyrating}>
              <Text style={styles.textrating}>Kỹ thuật sửa chữa</Text>
              <AirbnbRating
                showRating={false}
                count={5}
                // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                defaultRating={5}
                onFinishRating={ratingCompleted}
                size={30}
              />
            </View>
            <View style={styles.bodyrating}>
              <Text style={styles.textrating}>Thái độ phục vụ</Text>
              <AirbnbRating
                showRating={false}
                count={5}
                // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                defaultRating={5}
                onFinishRating={ratingCompleted}
                size={30}
              />
            </View>
            <View style={styles.bodyrating}>
              <Text style={styles.textrating}>Thời gian sửa chữa</Text>
              <AirbnbRating
                showRating={false}
                count={5}
                // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                defaultRating={5}
                onFinishRating={ratingCompleted}
                size={30}
              />
            </View>
            <View style={styles.bodyrating}>
              <Text style={styles.textrating}>Không gian & cơ sở vật chất</Text>
              <AirbnbRating
                showRating={false}
                count={5}
                // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                defaultRating={5}
                onFinishRating={ratingCompleted}
                size={30}
              />
            </View>
            <View style={styles.upload}>
              <View style={styles.BTupload}>
                <TouchableOpacity
                  style={{
                    width: 25,
                    height: 25,
                    position: 'absolute',
                    right: 4,
                  }}>
                  <Icon name="close" color="#848383" size={25} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: '70%',
                    height: '70%',
                    alignItems: 'center',
                    position: 'absolute',
                    marginHorizontal: '15%',
                    marginTop: '10%',
                  }}>
                  <Icon name="camera" color="#848383" size={60} />
                </TouchableOpacity>
              </View>
              <View style={styles.BTupload}>
                <TouchableOpacity
                  style={{
                    width: 25,
                    height: 25,
                    position: 'absolute',
                    right: 4,
                  }}>
                  <Icon name="close" color="#848383" size={25} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: '70%',
                    height: '70%',
                    alignItems: 'center',
                    position: 'absolute',
                    marginHorizontal: '15%',
                    marginTop: '10%',
                  }}>
                  <Icon name="camera" color="#848383" size={60} />
                </TouchableOpacity>
              </View>
              <View style={styles.BTupload}>
                <TouchableOpacity
                  style={{
                    width: 25,
                    height: 25,
                    position: 'absolute',
                    right: 4,
                  }}>
                  <Icon name="close" color="#848383" size={25} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: '70%',
                    height: '70%',
                    alignItems: 'center',
                    position: 'absolute',
                    marginHorizontal: '15%',
                    marginTop: '10%',
                  }}>
                  <Icon name="camera" color="#848383" size={60} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.upload}>
              <View style={styles.BTupload}>
                <TouchableOpacity
                  style={{
                    width: 25,
                    height: 25,
                    position: 'absolute',
                    right: 4,
                  }}>
                  <Icon name="close" color="#848383" size={25} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: '70%',
                    height: '70%',
                    alignItems: 'center',
                    position: 'absolute',
                    marginHorizontal: '15%',
                    marginTop: '10%',
                  }}>
                  <Icon name="camera" color="#848383" size={60} />
                </TouchableOpacity>
              </View>
              <View style={styles.BTupload}>
                <TouchableOpacity
                  style={{
                    width: 25,
                    height: 25,
                    position: 'absolute',
                    right: 4,
                  }}>
                  <Icon name="close" color="#848383" size={25} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: '70%',
                    height: '70%',
                    alignItems: 'center',
                    position: 'absolute',
                    marginHorizontal: '15%',
                    marginTop: '10%',
                  }}>
                  <Icon name="camera" color="#848383" size={60} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inp}>
              <TextInput
                placeholder="Viết đánh giá của bạn về garage tại đây ..."
                textAlignVertical="top"
                style={{
                  width: '95%',
                  height: '100%',
                  backgroundColor: '#dbdbdb',
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.BT}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>
              Gửi đánh giá
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const TEXT = {
  fontFamily: 'icielciaobella',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  TEXT: {
    color: 'red',
    fontSize: 20,
    fontFamily: 'sanfranciscotextheavy',
  },

  scr: {
    // marginBottom: 45,
    width: '100%',
    height: 0.84 * config.screen.height,
  },
  headerbody: {
    marginTop: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    alignItems: 'center',
    flexDirection: 'row',
  },
  body: {
    backgroundColor: '#fff',
    height: '100%',
  },
  bodyrating: {
    marginTop: 5,
    alignItems: 'center',
  },
  textrating: {
    ...TEXT,
    color: '#000',
    fontSize: 25,
  },
  upload: {
    marginTop: 10,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BTupload: {
    height: '100%',
    width: 100,
    borderWidth: 1,
    marginHorizontal: 10,
  },

  bottom: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  BT: {
    width: '95%',
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  inp: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WriteEvaluate;
