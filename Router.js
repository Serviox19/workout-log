import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Workout from './scenes/Workout';
import Logs from './scenes/Logs';
import Profile from './scenes/Profile';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root">
        <Scene
          key="workout"
          component={Workout}
          title="Home"
          renderBackButton={null}
          renderBackButton={()=>(null)}
        />
        <Scene
          key="logs"
          component={Logs}
          title="Workout Logs"
          renderBackButton={()=>(null)}
        />
        <Scene
          key="profile"
          component={Profile}
          title="Profile Page"
          renderBackButton={()=>(null)}
        />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
