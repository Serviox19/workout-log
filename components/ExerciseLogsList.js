import React, { Component } from 'react';
import { Text, View } from 'react-native';

class LogsList extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    console.log(this.props.category);
    console.log(this.props.exerciseKey);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>Exercise Logs List</Text>
        </View>
      </View>
    )
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
  }
}

export default LogsList;
