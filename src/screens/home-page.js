import React, { Component } from 'react';
import MonthCard from '../components/month-card';
import './home-page.css';
import FirebaseDB from '../firebase';
import akuLogo from '../assets/akuLogo.png';
import { Button } from 'reactstrap';
import {withRouter} from 'react-router';

class HomePage extends Component{

    constructor(){
        super();
    
        this.state = {
          records: []
      }
    }

    componentDidMount(){
        FirebaseDB.child('record').on('value' , snapshot => {
          if(snapshot.val() != null){
            this.setState({
              ...this.state,
              records : snapshot.val()
            })
          }
        })
      };

    render(){

        {
            var newArrayOfObjects = Object.values(this.state.records);
            console.log("this is the array" , newArrayOfObjects)
        }

        return(
            <div>
               
            <div className='container-set'>
            <div className='row'>
                    <div className='col-lg-3'>
                        <div> <img src={akuLogo} className="centerLogo" alt="Aku Logo" /> </div>
                        <h3 className="textAlign"> The Agha Khan University </h3>
                        <br />
                        <h3 className="textAlign">ORAS</h3>

                        <h5 className='statement'>A monthly report on the research progress</h5>

                        <div>
                            <Button color="success" size="lg" block >Add Record</Button>
                        </div>

                    </div>
    
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <MonthCard month="January" onClick={() => console.log("this is january") } />
                                <MonthCard month="May"/>
                                <MonthCard month="September"/>
                            </div>
    
                            <div className='col-lg-3'>
                                <MonthCard month="Febuary"/>
                                <MonthCard month="June"/>
                                <MonthCard month="Octuber"/>
                            </div>
    
                            <div className='col-lg-3'>
                                <MonthCard month="March"/>
                                <MonthCard month="July"/>
                                <MonthCard month="November"/>
                            </div>
    
                            <div className='col-lg-3'>
                                <MonthCard month="April"/>
                                <MonthCard month="August"/>
                                <MonthCard month="December"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
                
            </div>
        )    
    }
    
}

export default withRouter(HomePage);