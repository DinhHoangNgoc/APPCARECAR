import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Alert,
} from 'react-native'

const Services = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Cham soc xe', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={createTwoButtonAlert}>
          <Text style={styles.TEXTNAME}>Chăm sóc xe</Text>
          <Text style={{...TEXT}} numberOfLines={1}>
            - Rua xe nmsadbjsahddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={createTwoButtonAlert}>
          <Text style={styles.TEXTNAME}>Bảo dưỡng xe ô tô.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={createTwoButtonAlert}>
          <Text style={styles.TEXTNAME} numberOfLines={1}>
            Chăm sóc, làm đẹp xe ô tô
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const TEXT = {
  marginLeft: 10,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    fontWeight: 'bold',
  },

  button: {
    marginHorizontal:10,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    padding:5
  },
  TEXTNAME: {
    ...TEXT,
    color: '#000',
    fontSize: 20,
  },
});

export default Services;
