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
          <Button onPress={() => {
            if (Actions.currentScene === 'workout') {
              return null;
            } else {
              Actions.popTo('workout');
            }
          }}>
            <Icon name="ios-add-circle-outline" />
            <Text style={styles.textStyle}>Workout</Text>
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
