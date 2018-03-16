import React, { Component } from 'react';
import { Container, Content, Text, Icon } from 'native-base';
import { View, Modal, TouchableHighlight } from 'react-native';
import FooterTabs from '../components/Footer';
import { Actions } from 'react-native-router-flux';
import AddWorkout from '../components/AddWorkoutForm';

export default class Workout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (typeof nextProps.toggleModal === 'function') {
      this.setModalVisible(!this.state.modalVisible);
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    console.log(visible);
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Text style={{ textAlign: 'center' }}>View All Exercises</Text>
          <View style={{marginTop: 22}}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              >
              <View style={styles.modalContainer}>
                <View style={styles.closeView}>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Icon name='ios-close'
                      style={{fontSize: 50, color: 'black'}}/>
                  </TouchableHighlight>
                </View>
                <AddWorkout />
              </View>
            </Modal>
          </View>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}

const styles = {
  modalContainer: {
    marginTop: 50,
    flexDirection: 'column'
  },
  closeView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 25
  }
}
