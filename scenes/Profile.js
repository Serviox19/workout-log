import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import FooterTabs from '../components/Footer';

export default class Profile extends Component {
  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <Content padder>
          <Text style={{ textAlign: 'center' }}>Profile Page!</Text>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}
