import React, { Component } from 'react';
import { Table, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom'
import './tableList.css';

class TableList extends Component{

    constructor(props){
        super(props);

        this.state = {
            searchName : '',
            searchProjectId : '',
            searchStudyTitle : '',

            selectSearchName : false,
            selectprojectId : false,
            selectStudyTitle : false
        }
    }

    render() {

        let filteredArray = this.props.location.state
        
        if(this.state.selectSearchName === true){
            filteredArray = this.props.location.state.filter(record => record.PrincipalInvestigator.toLowerCase().includes(this.state.searchName.toLowerCase()));
        }
        else if(this.state.selectprojectId === true){
             filteredArray = this.props.location.state.filter(record => record.ProjectID.toLowerCase().includes(this.state.searchProjectId.toLowerCase()));
        }
        else if(this.state.selectStudyName === true){
             filteredArray = this.props.location.state.filter(record => record.StudyTitle.toLowerCase().includes(this.state.searchStudyTitle.toLowerCase()));
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
                        <Input className='input-gap' name="searchName" placeholder="Enter Principle Investigator to Filter" onChange={handleChange} onClick={()=>{this.setState({selectSearchName : true , selectprojectId: false , selectStudyTitle : false})}}/>
                    </div>

                    <div className='col-lg-4'>     
                        <Input className='input-gap' name="projectId" placeholder="Enter projectId to Filter" onChange={handleChange} onClick={()=>{this.setState({selectprojectId : true , selectSearchName : false , selectStudyTitle : false })}}/>
                    </div>

                    <div className='col-lg-4'>     
                        <Input className='input-gap' name="studyName" placeholder="Enter Topic Name to Filter" onChange={handleChange} onClick={()=>{this.setState({selectStudyTitle : true , selectprojectId : false, selectSearchName : false})}}/>
                    </div>
                </div>

                
                    
                </div>

                <Table striped>
                    <thead>
                        <tr>
                            
                            <th>Principal Investigator</th>
                            <th>Grant Preparation</th>
                            <th>Grant Current Status</th>
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
                            <th>Research Area/Theme/Sub-Theme</th>
                            <th>Type of research Impact</th>
                            <th>Staff/ faculty to take a follow up </th>

                        
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                            filteredArray.map((record) => {
                                return(
                                    <tr>
                                        <td> {record.PrincipalInvestigator} </td>
                                        <td> {record.GrantPreparation} </td>
                                        <td> {record.GrantCurrentStatus} </td>
                                        <td> {record.CoPrincipalInvestigator}/{record.endDate} </td>
                                        <td> {record.ProjectID} </td>
                                        <td> {record.StudyTitle} </td>
                                        <td> {record.GrantingAgency} </td> 
                                        <td> {record.GrantingAgency} </td> 
                                        <td> {record.FundType} </td> 
                                        <td> {record.DateOfSubmission} </td> 
                                        <td> {record.TypeOfStudy} </td> 
                                        <td> {record.collaborators} </td> 
                                        <td> {record.DateOfResponse} </td> 
                                        <td> {record.Rejection} </td> 
                                        <td> {record.NoOfSubjects} </td> 
                                        <td> {record.humanSubjects} </td> 
                                        <td> {record.TenureOfGrant} </td>
                                        <td> {record.Amount} </td> 
                                        <td> {record.StartPeriod} </td> 
                                        <td> {record.Status} </td>  
                                        <td> {record.theme} </td>  
                                        <td> {record.researchImpact} </td>  
                                        <td> {record.followUp} </td>  

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
