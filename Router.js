import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import Workout from './scenes/Workout';
import CalendarLogs from './scenes/CalendarLogs';
import CategoryExercises from './scenes/CategoryExercisesList';
import LogsList from './components/ExerciseLogsList';
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
            title="Muscle Groups"
            renderBackButton={null}
            renderBackButton={() => (null)}
            onRight={() => Actions.refresh({ toggleModal: () => {} })}
            rightTitle="Add"
            rightButtonTextStyle={{ marginRight: 15 }}
          />
          <Scene
            key="categoryExercises"
            component={CategoryExercises}
            renderBackButton={() => (null)}
          />
          <Scene
            key="exerciseLogs"
            component={LogsList}
            title={`Exercises Logs`}
            renderBackButton={() => (null)}
          />
          <Scene
            key="logs"
            component={CalendarLogs}
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
