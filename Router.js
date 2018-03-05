import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Workout from './scenes/Workout';
import Logs from './scenes/Logs';
import Charts from './scenes/Charts';
import Profile from './scenes/Profile';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root">
        <Scene key="workout" component={Workout} title="Home" />
        <Scene key="logs" component={Logs} title="Workout Logs" />
        <Scene key="charts" component={Charts} title="Chart Info" />
        <Scene key="profile" component={Profile} title="Profile Page" />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
