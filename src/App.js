import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './screens/home-page';
import Dummy from './components/dummy';
import InputForm from './components/InputForm';
import TableList from './components/table/tableList';
import Login from './screens/Login/Login';
import ProtectedRoute from './components/protectedRoute/protectedRoute';

const App = () => {
    
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <ProtectedRoute exact path='/home' component={HomePage} />
          <ProtectedRoute exact path='/inputdata' component={InputForm} />
          <ProtectedRoute exact path='/table' component={TableList} />
        </Switch>
        
      </div>
    );
  
}

export default App;
