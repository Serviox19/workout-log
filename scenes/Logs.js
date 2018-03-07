import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import FooterTabs from '../components/Footer';

export default class Logs extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text>See your Logs here!</Text>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}
