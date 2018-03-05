import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => Actions.popTo('logs')}>
            <Icon name="ios-list-box" />
            <Text>Logs</Text>
          </Button>
          <Button onPress={() => Actions.popTo('workout')}>
            <Icon name="ios-add-circle" />
            <Text>Workout</Text>
          </Button>
          <Button onPress={() => Actions.popTo('charts')}>
            <Icon name="ios-pie" />
            <Text>Charts</Text>
          </Button>
          <Button onPress={() => Actions.popTo('profile')}>
            <Icon name="ios-contact" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
