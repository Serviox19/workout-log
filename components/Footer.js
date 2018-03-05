import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active vertical>
            <Icon name="apps" />
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Second</Text>
          </Button>
          <Button vertical>
            <Icon name="navigate" />
            <Text>Third</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Last</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
