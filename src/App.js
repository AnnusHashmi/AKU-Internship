import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './screens/home-page';
import Dummy from './components/dummy';
import InputForm from './components/InputForm';
import TableList from './components/table/tableList';


const App = () => {
    
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/dummy' component={Dummy} />
          <Route exact path='/inputdata' component={InputForm} />
          <Route exact path='/table' component={TableList} />
        </Switch>
        
      </div>
    );
  
}

export default App;
