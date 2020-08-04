import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './screens/home-page';
import Dummy from './components/dummy';
import InputForm from './components/InputForm';


const App = () => {
    
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/dummy' component={Dummy} />
          <Route exact path='/inputdata' component={InputForm} />
        </Switch>
        
      </div>
    );
  
}

export default App;
