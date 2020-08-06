import React from 'react';
import { Table } from 'reactstrap';
import {withRouter} from 'react-router-dom'
import './tableList.css';

const TableList = (props) => {
        return(
            <div>

                <div>
                    <header>
                        <section>
                            <h1>Research Officer and Facutly monthly activity report</h1>
                        </section>
                        
                    </header>
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
                            props.location.state.map((record) => {
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

export default withRouter(TableList);
