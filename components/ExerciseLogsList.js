import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  exerciseLogCreate,
  exerciseLogDelete,
  exerciseLogsFetch
} from '../actions/LogsActions';

class LogsList extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    console.log(`Category Id: ${this.props.category}`);
    console.log(`Exercise Key: ${this.props.exerciseKey}`);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.container}>
          <Text
            style={{ textAlign: 'center' }}>
            Exercise Logs List
          </Text>
          <Text
            style={{ textAlign: 'center' }}>
            {`Category Id: ${this.props.category}`}
          </Text>
          <Text
            style={{ textAlign: 'center' }}>
            {`Exercise Key: ${this.props.exerciseKey}`}
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => console.log('toggle add log')}>
            <Text
              style={{ color: '#FFFFFF', textAlign: 'center' }}>
              Add Log</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    paddingTop: 20,
    width: '100%'
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

const mapStateToProps = state => {
  const logs  = state.logs;

  return { logs };
}


export default connect(mapStateToProps, {
  exerciseLogCreate,
  exerciseLogDelete,
  exerciseLogsFetch })(LogsList);
