import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {
  getDetails,
  getResults,
  resetResults,
  resetDetails,
} from '../actions/racers';

const Racer = (props) => {
  const navigation = useNavigation();

  const getDetail = async (name, id) => {
    navigation.navigate('RacerDetailsScreen', {name: name, id: id});
    const detailReset = await props.resetDetails();
    const reset = await props.resetResults();
    const data = await props.getDetails(id);
    const result = await props.getResults(id, 0);
    return detailReset + reset + data + result;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={async () => getDetail(props.name, props.id)}>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const mapStateToProps = (state) => {
  return {
    url: state.detailReducer.url,
    givenName: state.detailReducer.givenName,
    familyName: state.detailReducer.familyName,
    dateOfBirth: state.detailReducer.dateOfBirth,
    nationality: state.detailReducer.nationality,
  };
};

export default connect(mapStateToProps, {
  getDetails,
  getResults,
  resetResults,
  resetDetails,
})(Racer);
