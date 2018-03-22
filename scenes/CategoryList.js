import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CategoryWorkouts extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.container}>
          <Text>Category Workouts List</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 20
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export default CategoryWorkouts;
