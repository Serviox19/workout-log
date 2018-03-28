import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SwipeRow, Button, Icon, List, ListItem } from 'native-base';
import AddExercise from '../components/AddExerciseForm';
import { connect } from 'react-redux';
import { exercisesFetch } from '../actions/ExerciseActions';

class CategoryExercises extends Component {
  constructor(props) {
    super(props);

    const categoryId = this.props.id;
    this.props.exercisesFetch({ categoryId });

    this.state = {
      isModalVisible: false
    }
  }

  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  renderExercises() {
    const exercises = this.props.exercises;
    if (exercises === null) {
      return (
        <Text>Add some Exercises</Text>
      )
    } else {
      return Object.keys(exercises).map(function(key, index) {
        return (
          <ListItem style={{ border: 'none' }}>
            <SwipeRow
              style={{ width: '100%', justifyContent: 'center' }}
              leftOpenValue={75}
              rightOpenValue={-75}
              disableRightSwipe={true}
              body={
                <View onPress={() => console.log(exercises[key].name)}>
                  <Text>{exercises[key].name}</Text>
                </View>
              }
              right={
                <Button danger onPress={() => alert(`Delete: ${key}`)}>
                  <Icon active name="trash" />
                </Button>
              }
            />
          </ListItem>
        )
      });
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.container}>
          <List>
            {this.renderExercises()}
          </List>
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
          categoryName={this.props.category}
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
  const exercises = state.exercises;

  return { exercises };
}

export default
connect(mapStateToProps, { exercisesFetch })(CategoryExercises);
