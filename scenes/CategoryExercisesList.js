import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon, Form, Item, Input, Label, } from 'native-base';
import Modal from 'react-native-modal';

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
            onPress={() => console.log(`add exercise to ${this.props.category}`), this.toggleModal.bind(this)}>
            <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>Add Exercise</Text>
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
          >
          <View style={styles.modalView}>
            <View style={styles.closeButtonWrapper}>
              <TouchableOpacity
                style={{ alignSelf: 'flex-end' }}
                onPress={this.toggleModal.bind(this)}>
                <Icon name='ios-close'
                  style={{ fontSize: 50, color: 'black' }}/>
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <Text>Add Exercise to {`${this.props.category}`}</Text>
              <Form>
                <Item style={{ marginBottom: 10 }} inlineLabel>
                  <Input placeholder="Exercise Name" />
                </Item>
                <Button onPress={() => console.log(`adding exercise to ${this.props.id}`)}
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
    height: '50%',
    backgroundColor: '#d3d3d3',
    flexDirection: 'column',
    borderRadius: 4
  },
  closeButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
    marginRight: 15,
    marginBottom: 10
  },
  modalContent: {
    marginLeft: 15,
    marginRight: 15
  }
}

export default CategoryExercises;
