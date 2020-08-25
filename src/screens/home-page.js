import React, { Component } from 'react';
import MonthCard from '../components/month-card';
import './home-page.css';
import FirebaseDB from '../firebase';
import akuLogo from '../assets/akuLogo.png';
import { Button,Modal,ModalBody,ModalHeader,ModalFooter, Table} from 'reactstrap';
import {withRouter} from 'react-router';
import { useSpring, animated } from 'react-spring'
import auth from '../components/auth';

export const HeaderLine = (prop) => {
    const props = useSpring({ number: prop.number, from: { number: 0 } })
    return (
        <div>
           <h3 className='headerLiner'>Total number of records entered are : <animated.span >{props.number}</animated.span></h3> 
        </div>
        
    )
}
class HomePage extends Component{

    constructor(props){
        super(props);
    
        this.state = {
          records: [],
          modal:true,
          email : '',
          modal : false,
          date: new Date().toLocaleString()
          
      }
    }

    handleInputChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name] : value});
    }
    
    componentDidMount(){
        FirebaseDB.child('record').on('value' , snapshot => {
          if(snapshot.val() != null){
            this.setState({
              ...this.state,
              records : snapshot.val()
            })
          }
        });
        
      };
      toggle = () => {
          this.setState({modal : !this.state.modal})
      };

    render(){

        {
            var arrayOfRecords = Object.values(this.state.records);
        }
    
        return(
            <div>
               
            <div className='container-set'>
            <div className='row'>
                
                <div className='col-lg-3' >
                        <div> <img src={akuLogo} className="centerLogo" alt="Aku Logo" /> </div>
                        <h3 className="textAlign"> The Agha Khan University </h3>
                        <br />
                        <h3 className="textAlign">ORAS</h3>

                        <h5 className='statement'>A monthly report on the research progress</h5>

                        <div className='bottom'>
                            <Button color="success" size="lg" block className='bottom' onClick={() => this.props.history.push("/inputdata")}>Add ManuScript and Grants</Button>
                        </div>

                    </div>
              
                    
    
                    <div className='col-lg-9'>

                        <div className='header'>
                            <div className='signOut'>
                            <Button color='success' onClick={() => {auth.setLogout(() => {
                                    localStorage.removeItem('user')
                                    this.props.history.push("/");
                                })}}>Logout</Button>
                            </div>

                            <div>
                            <Button color='success' onClick={this.toggle}>View Log history</Button>

                            </div>
                        </div>
                        
                        


                        <div className='row'>
                            <div className='container'>
                                <HeaderLine number={arrayOfRecords.length}/>
                           </div>

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

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}> Record entry history </ModalHeader>
                    <ModalBody>
                    <Table dark>
                        <thead>
                            <tr>
                            <th>Email</th>
                            <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrayOfRecords.map((record) => {
                                return(
                                    <div>
                                        <td>{record.email}</td>           
                                    </div>
                                )                 
                            })}
                            <td>{this.state.date}</td>  
                        </tbody>
                    </Table>
                    </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </div>
        )    
    }
    
}

export default withRouter(HomePage);