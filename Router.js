import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import Workout from './scenes/Workout';
import Logs from './scenes/Logs';
import Profile from './scenes/Profile';
import { Actions } from 'react-native-router-flux';
import { Button, Icon } from 'native-base';

class RouterComponent extends Component {

  render() {
    return (
      <Router sceneStyle={{ backgroundColor: '#E2DADB' }}>
        <Scene key="root">
          <Scene
            key="workout"
            component={Workout}
            title="Home"
            renderBackButton={null}
            renderBackButton={() => (null)}
            onRight={() => Actions.refresh({ toggleModal: () => {} })}
            rightTitle="Add"
            rightButtonTextStyle={{ marginRight: 15 }}
          />
          <Scene
            key="logs"
            component={Logs}
            title="Workout Logs"
            renderBackButton={() => null}
          />
          <Scene
            key="profile"
            component={Profile}
            title="Profile Page"
            renderBackButton={() => null}
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
