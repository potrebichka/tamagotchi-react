import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import GameControl from './GameControl';

function App() {
  return (
    <div>
      <h1>Welcome to Tamagotchi Game!</h1>
      <Switch>
        <Route exact path='/' component={GameControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );

}

export default App;