import React, { Component } from 'react';
import { Table, Label, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom'
import './tableList.css';

class TableList extends Component{

    constructor(props){
        super(props);

        this.state = {
            searchName : ''
        }
    }

    render() {
        {console.log("this is the input: ", this.state.searchName);} 
        
        const filterName = this.props.location.state.filter(record => record.spName.toLowerCase().includes(this.state.searchName.toLocaleLowerCase()));
        return(
            <div>

                <div>
                    <header>
                        <section>
                            <h1>Research Officer and Facutly monthly activity report</h1>
                        </section>
                        
                    </header>

                <div className='col-lg-4'>     
                    <Input name="searchName" placeholder="Enter Supervisor Name to Filter" onChange={e =>{this.setState({searchName : e.target.value})}}/>
                </div>
                    
                </div>

                <Table striped>
                    <thead>
                        <tr>
                            
                            <th>Supervisor Name</th>
                            <th>Staff Name</th>
                            <th>Topic</th>
                            <th>Start/End Date</th>
                            <th>Completed Tasks</th>
                            <th>Planned Tasks</th>
                            <th>HoursSpent / week</th>
                        
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                            filterName.map((record) => {
                                return(
                                    <tr>
                                        <td> {record.spName} </td>
                                        <td> {record.staffName} </td>
                                        <td> {record.studyName} </td>
                                        <td> {record.startDate}/{record.endDate} </td>
                                        <td> {record.completedTasks} </td>
                                        <td> {record.plannedTasks} </td>
                                        <td> {record.timeSpent} </td> 
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )

    }
            
}

export default withRouter(TableList);
