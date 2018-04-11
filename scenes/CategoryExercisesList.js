import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SwipeRow, Button, Icon, List } from 'native-base';
import AddExercise from '../components/AddExerciseForm';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  exercisesFetch,
  exerciseDelete
} from '../actions/ExerciseActions';

class CategoryExercises extends Component {
  constructor(props) {
    super(props);

    let categoryId = this.props.id;
    this.props.exercisesFetch({ categoryId });

    this.state = {
      isModalVisible: false
    }

    this.deleteExercise = this.deleteExercise.bind(this);
  }

  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  deleteExercise(categoryId, key) {
    console.log(`Remove Category: ${categoryId}, Key: ${key}`);
    this.props.exerciseDelete({ categoryId, key });
  }

  renderExercises() {
    const _this = this;
    const exercises = this.props.exercises;
    const categoryId = this.props.id;

    return Object.keys(exercises).map(function(key, index) {
      return (
        <SwipeRow
          key={key}
          style={{ width: '100%', justifyContent: 'center' }}
          leftOpenValue={75}
          rightOpenValue={-75}
          left={
            <Button
              danger
              onPress={_this.deleteExercise.bind(this, categoryId, key)}>
              <Icon active name="trash" />
            </Button>
          }
          body={
            <View>
              <Text>{exercises[key].name}</Text>
            </View>
          }
          right={
            <Button info
              onPress={() => Actions.exerciseLogs({
                title: `${exercises[key].name} Logs`,
                category: categoryId,
                exerciseKey: key
              })}>
              <Icon active name="list" />
            </Button>
          }
        />
      );
    });
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
  const exercises  = state.exercises;

  return { exercises };
}

export default
connect(mapStateToProps, {
  exercisesFetch,
  exerciseDelete })(CategoryExercises);
