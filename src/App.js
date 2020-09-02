import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './screens/home-page';
import InputForm from './components/InputForm';
import TableList from './components/table/tableList';
import Login from './screens/Login/Login';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import PublicationInput from './components/inputPublicationForm';
import PublicationTable from './components/table/publicationTable'
import ComInput from './components/inputComForm';
import CommunicationTable from './components/table/comTable'

const App = () => {
    
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <ProtectedRoute exact path='/home' component={HomePage} />
          <ProtectedRoute exact path='/inputdata' component={InputForm} />
          <ProtectedRoute exact path='/table' component={TableList} />
          <ProtectedRoute exact path='/pubTable' component={PublicationTable} />
          <ProtectedRoute exact path='/inputPublicationData' component={PublicationInput} />
          <ProtectedRoute exact path='/inputConferenceData' component={ComInput} />
          <ProtectedRoute exact path='/comTable' component={CommunicationTable} />
        </Switch>
        
      </div>
    );
  
}

export default App;
