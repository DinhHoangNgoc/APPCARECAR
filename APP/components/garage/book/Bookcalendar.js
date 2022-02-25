import React,{useState} from 'react';
import {TouchableOpacity,View,Text,SafeAreaView, StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import config from '../../../controller/constan';
import {useNavigation} from '@react-navigation/native';
import Headers1 from './header';
import Headers2 from './header2';
import Headers3 from './header3';


const Bookcalendar = () =>{

    const [count,setcount] =useState(1);

    const onclickcount = (count) =>{
        setcount(++count)
    }
    const onclickcount1 = count => {
        setcount(--count);
    };

    const navigation =useNavigation();
    selectedTab = () => {
      switch (count) {
        case 1:
          return (
            <View>
              <View
                style={{
                  paddingVertical: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: '#b5b5b5',
                }}>
                <Image
                  source={config.icons.Steps1}
                  style={{width: config.screen.width, height: 50}}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Headers1 />
              </View>
            </View>
          );
        case 2:
          return (
            <View>
              <View
                style={{
                  paddingVertical: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: '#b5b5b5',
                }}>
                <Image
                  source={config.icons.Steps2}
                  style={{width: config.screen.width, height: 50}}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Headers2 />
              </View>
            </View>
          );
        case 3:
          return (
            <View>
              <View
                style={{
                  paddingVertical: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: '#b5b5b5',
                }}>
                <Image
                  source={config.icons.Steps3}
                  style={{width: config.screen.width, height: 50}}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Headers3 />
              </View>
            </View>
          );
        default:
          return navigation.push(config.screenName.TabBar);
      }
    };
    return (
      <SafeAreaView style={{flex: 1,backgroundColor:'#fff'}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="chevron-back" size={35} color="red"  />
          </TouchableOpacity>
          <Text style={styles.TEXTheader}>Đặt Lịch</Text>
          <View/>
        </View>
        <View>{selectedTab(count)}</View>
        <View 
          style={{
            flexDirection:'row', 
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            left: 10,
            right: 10,
            bottom:40
          }}>
          <TouchableOpacity
            disabled={count == 1 ? true : false}
            style={count == 1 ?styles.BT2: styles.BT}
            onPress={() => {
              onclickcount1(count);
            }}>
            <Text style={{color : '#fff',fontWeight: 'bold'}}>back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if(count<3)
                onclickcount(count)
              else
                navigation.navigate(config.screenName.TabBar)
            }}
            style={styles.BT}>
            <Text style={{color : '#fff',fontWeight: 'bold'}}>Tiep</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  header: {
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  TEXTheader: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:-20
  },
  BT: {
    backgroundColor: 'red',
    width:60,
    height:30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10
  },
  BT2: {
    backgroundColor: '#fff',
    width:60,
    height:30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10
  }
});


export default Bookcalendar;