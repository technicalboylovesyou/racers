import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Result = (props) => {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginTop: 10,
      }}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>
        {props.item.raceName}
      </Text>
      <Text style={{fontSize: 18}}>Водитель: {props.item.driver}</Text>
      <Text style={{fontSize: 18}}>Позиция: {props.item.position}</Text>
      <Text style={{fontSize: 18}}>Номер: {props.item.number}</Text>
      <Text style={{fontSize: 18}}>Конструктор: {props.item.constructor}</Text>
      <Text style={{fontSize: 18}}>Сетка: {props.item.grid}</Text>
      <Text style={{fontSize: 18}}>Круги: {props.item.laps}</Text>
      <Text style={{fontSize: 18}}>Статус: {props.item.status}</Text>
      <Text style={{fontSize: 18, marginBottom: 10}}>
        Очки: {props.item.points}
      </Text>
    </View>
  );
};

export default Result;
