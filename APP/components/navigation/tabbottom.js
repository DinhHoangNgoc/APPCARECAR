import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../home/Home';
import Chat from '../home/ChatScreen';
import Calendas from '../home/calendaScreens';
import Profile from '../authentication/ProfileScreen';
import Qrcode from '../home/qrcodeScreen';
import config from '../../controller/constan';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 1,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={config.icons.home}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendas"
        component={Calendas}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={config.icons.list}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Lịch hẹn
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Qrcode"
        component={Qrcode}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={config.icons.qr_code}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={config.icons.chat}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tai khoan"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={config.icons.user}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Tài khoản
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
