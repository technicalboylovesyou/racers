import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Result from './Result';

const ResultList = ({results, onEnd}) => {
  const randomInteger = (min, max) =>
    Math.round(min - 0.5 + Math.random() * (max - min + 1));

  const renderItem = ({item}) => {
    return <Result item={item} />;
  };
  return (
    <FlatList
      data={results}
      renderItem={renderItem}
      keyExtractor={(item) => item.raceName + randomInteger(1, 50000)}
      onEndReached={onEnd}
      onEndReachedThreshold={0.1}
    />
  );
};

export default ResultList;
