import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import FooterTabs from '../components/Footer';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text>Profile Page!</Text>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}
