import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RacerListScreen from '../screens/RacerList';
import RacerDetailsScreen from '../screens/RacerDetails';

const RacerStack = createStackNavigator();

const RacerStackNavigator = () => (
  <RacerStack.Navigator>
    <RacerStack.Screen name="Гонщики" component={RacerListScreen} />
    <RacerStack.Screen
      name="RacerDetailsScreen"
      component={RacerDetailsScreen}
      options={({route}) => {
        return {title: route.params.name};
      }}
    />
  </RacerStack.Navigator>
);

export default RacerStackNavigator;
