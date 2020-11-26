import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RacerStackNavigator from './RacersNavigator';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Гонки</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Гонщики" component={RacerStackNavigator} />
      <Tab.Screen name="Гонки" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function AppQ() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
