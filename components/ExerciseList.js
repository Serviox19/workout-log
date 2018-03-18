import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { exercisesFetch } from '../actions/ExerciseActions';

class ExerciseList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <View>
        <Text
          style={{ textAlign: 'center' }}>
          List available exercises!
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const exercises = state;
  console.log(exercises);
}

export default
connect(mapStateToProps, { exercisesFetch })(ExerciseList);
