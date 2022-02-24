import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Loading from '../Load/LoadingScreens';
import Stacks from '../navigation/stacks';


const Rootcomponents = () => {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isloading) {
    return (
      <View>
        <Loading />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};

export default Rootcomponents;
