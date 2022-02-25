import React,{useState} from "react";
import {View,Text,TextInput,SafeAreaView,TouchableOpacity,StyleSheet} from "react-native";
import Icon2 from "react-native-vector-icons/Ionicons";
import {ClusterMap} from 'react-native-cluster-map';
import {Marker} from 'react-native-maps';
import {CheckBox, Icon} from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";


const Rescues = ()=>{

    const navigation = useNavigation();
    const [check,setcheck] = useState(false);

    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 10,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() =>{
            navigation.goBack()
          }}>
            <Icon2
              name="chevron-back"
              color="red"
              size={30}
              style={{marginLeft: 2}}
            />
          </TouchableOpacity>
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20}}>
            Cứu hộ
          </Text>
          <TouchableOpacity>
            <Icon2
              name="home"
              color="red"
              size={25}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ClusterMap
            region={{
              latitude: 16.0755022,
              longitude: 108.2222097,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker coordinate={{latitude: 16.075502, longitude: 108.222209}} />
            <Marker
              coordinate={{latitude: 16.0755021, longitude: 108.2222098}}
            />
            <Marker coordinate={{latitude: 16.0755025, longitude: 108.22221}} />
          </ClusterMap>
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#fff',
              top: 10,
              borderRadius: 10,
              left: 10,
              right: 10,
              padding: 10,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon2 name="search" size={20} style={{marginLeft: 10}} />
              <Text style={{marginLeft: 10}}>address</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#fff',
              bottom: 20,
              borderRadius: 10,
              left: 80,
              right: 80,
              padding: 10,
            }}>
            <TextInput
              style={{
                padding: 10,
                borderBottomWidth: 1,
              }}
              keyboardType="numeric"
              placeholder="Nhập số điện thoại"
              textAlign="center"
            />

            <CheckBox
            activeOpacity={0}
              title="xe có bảo hiểm"
              containerStyle={{
                backgroundColor: '#FFFFFF',
                marginLeft: 20,
                borderColor: '#FFFFFF',
              }}
              center
              checkedIcon={
                <Icon
                  name="ellipse-outline"
                  type="ionicon"
                  color="#000"
                  size={25}
                  iconStyle={{marginRight: 5}}
                />
              }
              uncheckedIcon={
                <Icon
                  name="heart-circle-outline"
                  type="ionicon"
                  color="grey"
                  color="#000"
                  size={25}
                  iconStyle={{marginRight: 5}}
                />
              }
              checked={check}
              onPress={() => setcheck(!check)}
            />
            <TouchableOpacity
              style={{
                padding: 5,
                marginHorizontal: 40,
                marginTop: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'red',
                alignItems: 'center',
              }}
              
              >
              <Text style={{color: 'red', fontSize: 15}}>
                Gửi yêu cầu cứu hộ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Rescues;