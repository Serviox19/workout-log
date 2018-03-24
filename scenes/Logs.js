import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';
import FooterTabs from '../components/Footer';

export default class Logs extends Component {
  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <Content padder>
          <Text style={{ textAlign: 'center' }}>See your Logs here!</Text>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}
