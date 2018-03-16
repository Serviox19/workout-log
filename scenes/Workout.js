import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { View, Modal, TouchableHighlight } from 'react-native';
import FooterTabs from '../components/Footer';

export default class Workout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    nextProps.showModal === true ? this.setState({ modalVisible: true }) : null;
  }


  render() {
    return (
      <Container>
        <Content padder>
          <Text>View All Exercises</Text>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}
