import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import config from '../../controller/constan';

export default LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgheader}>
        <Image
          source={config.icons.load}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgheader: {
    width: config.screen.width,
    height: config.screen.height,
  },
});
