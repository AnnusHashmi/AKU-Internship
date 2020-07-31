import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import HomePage from './screens/home-page';
import Dummy from './components/dummy';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/dummy' component={Dummy} />
      </Switch>
      
    </div>
  );
}

export default App;
