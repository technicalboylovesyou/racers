import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import RacerList from '../../components/RacerList';
import {getRacers} from '../../actions/racers';
import {connect} from 'react-redux';

const RacerListScreen = (props) => {
  const getData = async (offset) => {
    const data = await props.getRacers(offset);
    return data;
  };
  if (props.racers.length === 0) {
    getData(0);
  }
  return (
    <SafeAreaView style={styles.container}>
      <RacerList
        racers={props.racers}
        onEnd={() => props.getRacers(props.racers.length)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const mapStateToProps = (state) => {
  return {
    racers: state.racerReducer.racerList,
    total: state.racerReducer.total,
    offset: state.racerReducer.offset,
  };
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    loading: (offset) => dispatch(getRacers(offset)),
  };
};*/

export default connect(mapStateToProps, {getRacers})(RacerListScreen);
