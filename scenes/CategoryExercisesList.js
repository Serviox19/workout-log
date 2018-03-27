import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon, Form, Item, Input, Label, } from 'native-base';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { exerciseCreate } from '../actions/ExerciseActions.js';
import { Actions } from 'react-native-router-flux';

class CategoryExercises extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      exercise: ''
    }
  }

  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  onInputChange(exercise) {
    this.setState({ exercise });
  }

  addExercise() {
    let categoryId = this.props.id;
    let exercise = this.state.exercise;

    if (this.state.exercise === '') {
      console.log('error: Add an exercise');
    } else {
      this.props.exerciseCreate({ categoryId, exercise });
      console.log(`adding ${this.state.exercise} to ${this.props.id}`);
      this.setState({ exercise: '' });
      this.toggleModal();
    }
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
        {/* add exercise Modal */}
        <Modal
          isVisible={this.state.isModalVisible}
          >
          <View style={styles.modalView}>
            <View style={styles.closeButtonWrapper}>
              <TouchableOpacity
                style={{ alignSelf: 'flex-end' }}
                onPress={this.toggleModal.bind(this)}>
                <Icon
                  name='ios-close'
                  style={{ fontSize: 50, color: 'black' }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <Text>Add Exercise to {`${this.props.category}`}</Text>
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
  },
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

export default
connect(mapStateToProps, { exerciseCreate })(CategoryExercises);
