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
                            
                            <th>Principal Investigator</th>
                            <th>Grant Preparation</th>
                            <th>Grant Current Statu</th>
                            <th>Co-Principal Investigator</th>
                            <th>Project ID/ Grant # / Budget Code </th>
                            <th>Study Title</th>
                            <th>Granting Agency</th>
                            <th>Funded Local / Foreign</th>
                            <th>Date of Submission</th>
                            <th>Type of study</th>
                            <th>Other Department as collaborators </th>
                            <th>Expected Date of Response after Grant Submitted </th>
                            <th>Reason in case of Rejection</th>
                            <th>No. of subjects</th>
                            <th>Will AKUH patients be used as human subjects?</th>
                            <th>Location of study</th>
                            <th>Tenure of Grant</th>
                            <th>Amount, Pak Rs/ US$</th>
                            <th>Start period</th>
                            <th>Expected/ Actual End date</th>
                            <th>Ongoing (O) /Concluded(C) /Not Started (N)</th>
                            <th>Research Area/Theme/Sub-Theme</th>
                            <th>Type of research Impact</th>
                            <th>Brief Description and Objective</th>
                            <th>Staff/ faculty to take a follow up </th>

                           

                        
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
