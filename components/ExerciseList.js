import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ExerciseList extends Component {
  constructor(props) {
    super(props);
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

export default ExerciseList;
