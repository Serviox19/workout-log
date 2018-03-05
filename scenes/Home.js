import React, { Component } from 'react';
import { Container, Header, Content, Text } from 'native-base';
import FooterTabs from '../components/Footer';

export default class HomeView extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Home View!</Text>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}
