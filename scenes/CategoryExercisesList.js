import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AddExercise from '../components/AddExerciseForm';

class CategoryExercises extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false
    }
  }

  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.container}>
          <Text>{this.props.category}</Text>
          <Text>{this.props.id}</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={this.toggleModal.bind(this)}>
            <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>Add Exercise</Text>
          </TouchableOpacity>
        </View>
        <AddExercise
          modalVisible={this.state.isModalVisible}
          modalToggle={this.toggleModal.bind(this)}
          categoryId={this.props.id}
        />
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

export default CategoryExercises;
