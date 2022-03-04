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
import config from '../../controller/Constant'

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
        <TouchableOpacity onPress={() =>{navigation.goBack()}}>
          <Icon name="chevron-back" size={25} color="red" />
        </TouchableOpacity>
        <Text style={styles.TEXTheader}>Tỉnh/thành phố</Text>
        <View />
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
                navigation.navigate(config.screenName.Home,{location: item.name});
              }}>
              <Text style={{fontSize:15,color: '#000000'}}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dddbdb',
    justifyContent: 'space-between'
  },
  TEXTheader: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  BT: {
    margin: 10,
  },
});

export default ListAdrress;
