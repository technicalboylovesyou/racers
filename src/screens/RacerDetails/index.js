import React from 'react';
import {Text, View, Linking, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ResultList from '../../components/ResultList';
import {getResults} from '../../actions/racers';

const RacerDetailsScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Имя: {props.familyName} {props.givenName}
        </Text>
        <Text style={styles.title}>Дата рождения: {props.dateOfBirth}</Text>
        <Text style={styles.title}>Национальность: {props.nationality}</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('{props.url}')}>
          Wiki-статья
        </Text>
        <ResultList
          results={props.results}
          onEnd={() => props.getResults(props.driverId, props.results.length)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: 10,
  },
  title: {
    paddingVertical: 4,
    borderRadius: 6,
    color: '#20232a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    paddingVertical: 4,
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    url: state.detailReducer.url,
    givenName: state.detailReducer.givenName,
    familyName: state.detailReducer.familyName,
    dateOfBirth: state.detailReducer.dateOfBirth,
    nationality: state.detailReducer.nationality,
    driverId: state.detailReducer.driverId,
    results: state.resultReducer.resultList,
  };
};

export default connect(mapStateToProps, {getResults})(RacerDetailsScreen);
