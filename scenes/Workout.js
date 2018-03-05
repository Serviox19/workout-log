import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import FooterTabs from '../components/Footer';

export default class Workout extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text>Add New Workout!</Text>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}
