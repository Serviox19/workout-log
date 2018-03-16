import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { View, Modal, TouchableHighlight } from 'react-native';
import FooterTabs from '../components/Footer';
import { Actions } from 'react-native-router-flux';

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
              <View style={{marginTop: 50}}>
                <View>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text>Hide Modal</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}
