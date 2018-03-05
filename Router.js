import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import HomeView from './scenes/Home';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Stack key="root">
        <Scene key="root" component={HomeView} title="Home" />
      </Stack>
    </Router>
  );
}

export default RouterComponent;
