import React, { Component } from 'react';
import MonthCard from '../components/month-card';
import './home-page.css';
import FirebaseDB from '../firebase';
import akuLogo from '../assets/akuLogo.png';
import { Button } from 'reactstrap';
import {withRouter} from 'react-router';
import TableList from '../components/table/tableList'

class HomePage extends Component{

    constructor(props){
        super(props);
    
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
            var arrayOfRecords = Object.values(this.state.records);
           
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
                            <Button color="success" size="lg" block onClick={() => this.props.history.push("/inputdata")}>Add Record</Button>
                        </div>

                    </div>
    
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <MonthCard month="January" records={arrayOfRecords} />
                                <MonthCard month="May" records={arrayOfRecords}/>
                                <MonthCard month="September" records={arrayOfRecords}/>
                            </div>
    
                            <div className='col-lg-3'>
                                <MonthCard month="Febuary" records={arrayOfRecords}/>
                                <MonthCard month="June" records={arrayOfRecords}/>
                                <MonthCard month="Octuber" records={arrayOfRecords}/>
                            </div>
    
                            <div className='col-lg-3'>
                                <MonthCard month="March" records={arrayOfRecords}/>
                                <MonthCard month="July" records={arrayOfRecords}/>
                                <MonthCard month="November"records={arrayOfRecords}/>
                            </div>
    
                            <div className='col-lg-3'>
                                <MonthCard month="April" records={arrayOfRecords}/>
                                <MonthCard month="August" records={arrayOfRecords}/>
                                <MonthCard month="December" records={arrayOfRecords}/>
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