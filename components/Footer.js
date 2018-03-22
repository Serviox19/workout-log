import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={styles.footer}>
          <Button onPress={() => Actions.logs()}>
            <Icon name="ios-list-box-outline" />
            <Text style={styles.textStyle}>Logs</Text>
          </Button>
          <Button onPress={() => Actions.workout()}>
            <Icon name="ios-add-circle-outline" />
            <Text style={styles.textStyle}>Workout</Text>
          </Button>
          <Button onPress={() => Actions.profile()}>
            <Icon name="ios-contact-outline" />
            <Text style={styles.textStyle}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = {
  footer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 12,
    color: '#000'
  }
}
