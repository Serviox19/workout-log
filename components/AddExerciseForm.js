import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon, Form, Item, Input, Label, } from 'native-base';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { exerciseCreate } from '../actions/ExerciseActions.js';
import { Actions } from 'react-native-router-flux';

class AddExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: ''
    }
  }

  onInputChange(exercise) {
    this.setState({ exercise });
  }

  addExercise() {
    let categoryId = this.props.categoryId;
    let exercise = this.state.exercise;

    if (this.state.exercise === '') {
      console.log('error: Add an exercise');
    } else {
      this.props.modalToggle;
      this.props.exerciseCreate({ categoryId, exercise });
      console.log(`adding ${this.state.exercise} to ${this.props.categoryName}`);
      this.setState({ exercise: '' });
    }
  }

  render() {
    return (
      <Modal
        isVisible={this.props.modalVisible}
        >
        <View style={styles.modalView}>
          <View style={styles.closeButtonWrapper}>
            <TouchableOpacity
              style={{ alignSelf: 'flex-end' }}
              onPress={this.props.modalToggle}>
              <Icon
                name='ios-close'
                style={{ fontSize: 50, color: 'black' }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>
            <Text>Add Exercise to {`${this.props.categoryName}`}</Text>
            <Form>
              <Item
                inlineLabel
                style={{ marginBottom: 10, borderBottomColor: '#000' }}>
                <Input
                  placeholder="Exercise Name"
                  onChangeText={(text) => this.onInputChange(text)}
                  value={this.state.exercise}
                />
              </Item>
              <Button onPress={this.addExercise.bind(this)}
                full
                primary>
                <Text style={{ color: '#FFFFFF' }}>Add</Text>
              </Button>
            </Form>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = {
  modalView: {
    height: '40%',
    backgroundColor: '#d3d3d3',
    flexDirection: 'column',
    borderRadius: 4
  },
  closeButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 15,
    marginBottom: 10
  },
  modalContent: {
    flexDirection: 'column',
    marginLeft: 15,
    marginRight: 15,
    flex: 1
  }
}

const mapStateToProps = state => {
  const exercises = state.exerciseForm;

  return { exercises };
}

export default connect(mapStateToProps, { exerciseCreate })(AddExercise);
