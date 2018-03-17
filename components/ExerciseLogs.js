import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ExerciseLogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curentExercise: ''
    }
  }

  render() {
    return (
      <View>
        <Text
          style={{ textAlign: 'center' }}>
          List Details for certain exercise
        </Text>
      </View>
    );
  }
}

export default ExerciseLogs;
