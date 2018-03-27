import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import Workout from './scenes/Workout';
import Logs from './scenes/Logs';
import CategoryExercises from './scenes/CategoryExercisesList';
import { Actions } from 'react-native-router-flux';
import { Button, Icon } from 'native-base';

class RouterComponent extends Component {

  render() {
    return (
      <Router sceneStyle={{ backgroundColor: '#FFFFFF' }}>
        <Scene key="root">
          <Scene
            key="workout"
            component={Workout}
            title="Body Parts"
            renderBackButton={null}
            renderBackButton={() => (null)}
            onRight={() => Actions.refresh({ toggleModal: () => {} })}
            rightTitle="Add"
            rightButtonTextStyle={{ marginRight: 15 }}
          />
          <Scene
            key="categoryExercises"
            component={CategoryExercises}
            title={this.props.category}
            renderBackButton={() => (null)}
          />
          <Scene
            key="logs"
            component={Logs}
            title="Logs"
            renderBackButton={null}
            renderBackButton={() => null}
          />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
