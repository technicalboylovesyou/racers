import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Racer from './Racer';

const RacerList = ({racers, onEnd}) => {
  const renderItem = ({item}) => {
    return <Racer name={item.title} id={item.id} />;
  };
  return (
    <FlatList
      data={racers}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onEndReached={onEnd}
      onEndReachedThreshold={0.1}
    />
  );
};

export default RacerList;
