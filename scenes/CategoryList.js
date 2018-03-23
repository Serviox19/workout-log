import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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
        <View style={styles.buttonView}>
          <Button
            onPress={() => console.log(`add exercise to ${this.props.data}`)}
            color="#FFFFFF"
            title="Add Exercise"
          />
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    paddingTop: 20
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

export default CategoryWorkouts;
