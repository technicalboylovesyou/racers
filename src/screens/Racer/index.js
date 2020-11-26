import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RacerScreen = ({navigation}) => (
  <View>
    <Text>Гонщик {navigation.getParam('name')}</Text>
  </View>
);

export default RacerScreen;
