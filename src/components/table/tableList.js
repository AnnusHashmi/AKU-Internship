import React, { Component } from 'react';
import { Table, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom'
import './tableList.css';

class TableList extends Component{

    constructor(props){
        super(props);

        this.state = {
            searchName : '',
            staffName : '',
            studyName : '',

            selectSearchName : false,
            selectStaffName : false,
            selectStudyName : false
        }
    }

    render() {

        let filteredArray = this.props.location.state
        
        if(this.state.selectSearchName === true){
            filteredArray = this.props.location.state.filter(record => record.spName.toLowerCase().includes(this.state.searchName.toLowerCase()));
        }
        else if(this.state.selectStaffName === true){
             filteredArray = this.props.location.state.filter(record => record.staffName.toLowerCase().includes(this.state.staffName.toLowerCase()));
        }
        else if(this.state.selectStudyName === true){
             filteredArray = this.props.location.state.filter(record => record.studyName.toLowerCase().includes(this.state.studyName.toLowerCase()));
        }
        
        {console.log("this is the array to render: ", filteredArray)}

        const handleChange = (e) => {
            this.setState({[e.target.name] : e.target.value})
        }
        return(
            <div>

                <div>
                    <header>
                        <section>
                            <h1>Research Officer and Facutly monthly activity report</h1>
                        </section>
                        
                    </header>

                <div className='row'>
                    <div className='col-lg-4'>     
                        <Input className='input-gap' name="searchName" placeholder="Enter Supervisor Name to Filter" onChange={handleChange} onClick={()=>{this.setState({selectSearchName : true , selectStaffName: false , selectStudyName : false})}}/>
                    </div>

                    <div className='col-lg-4'>     
                        <Input className='input-gap' name="staffName" placeholder="Enter Staff Name to Filter" onChange={handleChange} onClick={()=>{this.setState({selectStaffName : true , selectSearchName : false , selectStudyName : false })}}/>
                    </div>

                    <div className='col-lg-4'>     
                        <Input className='input-gap' name="studyName" placeholder="Enter Topic Name to Filter" onChange={handleChange} onClick={()=>{this.setState({selectStudyName : true , selectStaffName : false, selectSearchName : false})}}/>
                    </div>
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
                            filteredArray.map((record) => {
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
