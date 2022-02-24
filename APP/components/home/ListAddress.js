import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import config from '../../controller/constan';

const infodata = [
  {
    id: '1',
    name: 'Đà Nẵng',
  },
  {
    id: '2',
    name: 'Hà Nội',
  },
];
const ListAdrress = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={25} color="red" />
        </TouchableOpacity>
        <Text style={styles.TEXTheader}>Tỉnh/thành phố</Text>
      </View>
      <View>
        <FlatList
          data={infodata}
          numColumns={3}
          onPress={() => setSelectedId(item.id)}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity 
                style={styles.BT}
                onPress={() => {
                navigation.navigate('Home', {location: item.name});
              }}>
              <Text style={{fontSize:15}}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height:50,
        alignItems: 'center',
        flexDirection: 'row',
    },
    TEXTheader:{
        color:'red', 
        marginLeft:0.25*config.screen.width,
        fontSize:20, 
        fontWeight: 'bold'
    },
    BT:{
        margin:10
    }
})

export default ListAdrress;
