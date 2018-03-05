import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import FooterTabs from '../components/Footer';

export default class Charts extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text>Charts info</Text>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}
