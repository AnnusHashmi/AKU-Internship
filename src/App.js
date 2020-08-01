import React ,{Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './screens/home-page';
import Dummy from './components/dummy';
import InputForm from './components/InputForm';
import FirebaseDB from './firebase';

class App extends Component{

  constructor(){
    super();

    this.state = {
      record: 
    }
  }

  componentDidMount(){
    FirebaseDB.child('record').on('value' , snapshot => {
      if(snapshot.val() != null){
        this.setState({
          ...this.state,
          record : snapshot.val()
        })
      }
    })
  };

  render(){
      
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/dummy' component={Dummy} />
          <Route exact path='/inputdata' component={InputForm} />
        </Switch>
        {console.log("this is the state: ",this.state.record)}
      </div>
    );
  }
  
}

export default App;
