import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container  } from 'reactstrap'
import './inputForm.css';
import FirebaseDB from '../firebase';

class InputForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            PrincipalInvestigator: '',
            GrantPreparation : '',
            GrantCurrentStatus: '',
            CoPrincipalInvestigator : '',
            ProjectID  : '',
            StudyTitle : '',
            GrantingAgency : '',
            FundType : '', 
            DateOfSubmission : '',
            TypeOfStudy : '',
            collaborators: '',
            DateOfResponse : '',
            Rejection : '',
            NoOfSubjects : '',
            humanSubjects : '',
            LocationOfstudy: '',
            TenureOfGrant  :'',
            Amount : '',
            StartPeriod : '',
            EndDate : '',
            Status : '',
            ResearchArea : '',
            researchImpact : '',
            Objective : '',
            followUp : ''
        }
    }


    handleInputChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name] : value});
    }

    hanleSubmit = (e) => {
        e.preventDefault();
        FirebaseDB.child('record').push(
            this.state
        )
    }

    render(){
        
        return(
            <div>
                <div className='container'>

                <div style={{paddingBottom: "5%"}}>
                    <Jumbotron fluid>
                        <Container fluid>
                        <h1 className="display-3">Research Faculty and Officer Monthly Report</h1>
                        <p className="lead">Fill in the form, the data would be automatically placed in the admin panal</p>
                        </Container>
                    </Jumbotron>
                </div>

                <Form onSubmit={this.hanleSubmit} autoComplete="off">

                <FormGroup autoComplete="false" style={{paddingBottom : "70px"}}>
                    <Label for="spName">User entering the record: Enter your mail</Label>
                    <Input type="email" name="email" id="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} />
                </FormGroup>
                    <h3 style={{paddingBottom : 20}}>Record entry</h3>
                    <FormGroup>
                        <Label for="spName">Principle Investigator</Label>
                        <Input type="text" name="PrincipalInvestigator" id="PrincipalInvestigator" placeholder="Enter the name" value={this.state.PrincipalInvestigator} onChange={this.handleInputChange} />
                    </FormGroup>
                    <div className='row'>
                    <FormGroup className='col-lg-6'>
                        <Label> Grant Preparations </Label>
                        <Input type="select" name="GrantPreparation" id="GrantPreparation" value={this.state.GrantPreparation} onChange={this.handleInputChange}>
                        <option>preparation</option>
                        <option> DRC Submission</option>
                        <option> ERC Submission</option>
                        <option> ERC Approval</option>
                        <option> Submitted </option>
                        </Input>
                    </FormGroup>
                    <FormGroup className='col-lg-6'>
                        <Label> Grant Preparations </Label>
                        <Input type="select" name="GrantCurrentStatus" id="GrantCurrentStatus" value={this.state.GrantCurrentStatus} onChange={this.handleInputChange}>
                            <option> Submited </option>
                            <option> Approved </option>
                            <option> Rejected </option>
                        </Input>
                    </FormGroup>
                    </div>
                    <FormGroup>
                        <Label for="spName">Co Principle Investigator</Label>
                        <Input type="text" name="CoPrincipalInvestigator" id="CoPrincipalInvestigator" placeholder="Enter the name" value={this.state.CoPrincipalInvestigator} onChange={this.handleInputChange} />
                    </FormGroup>
                    <div className='row'>
                    <FormGroup className='col-lg-6'>
                        <Label for="spName">Project ID/ Grant # / Budget Code </Label>
                        <Input type="text" name="ProjectID" id="ProjectID" placeholder="Enter the ProjectID" value={this.state.ProjectID} onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup className='col-lg-6'>
                        <Label for="spName">Study Title /Title of Research Study</Label>
                        <Input type="text" name="StudyTitle" id="StudyTitle" placeholder="Enter the StudyTitle" value={this.state.StudyTitle} onChange={this.handleInputChange} />
                    </FormGroup>
                    </div>

                    <div className='row'>
                    <FormGroup className='col-lg-6'>
                        <Label for="spName"> Granting Agency, Funding source </Label>
                        <Input type="text" name="GrantingAgency" id="GrantingAgency" placeholder="Enter the GrantingAgency" value={this.state.GrantingAgency} onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup className='col-lg-6'>
                        <Label for="spName">Funded Local / Foreign</Label>
                        <Input type="select" name="FundType" id="FundType" placeholder="Enter the FundType" value={this.state.FundType} onChange={this.handleInputChange} >
                            <option> Local </option>
                            <option> Forigen </option>
                        </Input>
                    </FormGroup>
                    </div>

                    <div className='row'>
                        <FormGroup className='col-lg-6'>
                            <Label for="spName"> Date of Submission </Label>
                            <Input type="date" name="DateOfSubmission" id="DateOfSubmission" placeholder="Enter the DateOfSubmission" value={this.state.DateOfSubmission} onChange={this.handleInputChange} />
                        </FormGroup>

                        <FormGroup className='col-lg-6'>
                            <Label for="spName"> Expected Date of Response after Grant Submitted  </Label>
                            <Input type="date" name="DateOfResponse" id="DateOfResponse" placeholder="Enter the expected DateOfResponse" value={this.state.DateOfResponse} onChange={this.handleInputChange} />
                        </FormGroup>
                    </div>

                    <div className='row'>
                    <FormGroup className='col-lg-6'>
                        <Label for="spName">Type of Study</Label>
                        <Input type="text" name="TypeOfStudy" id="TypeOfStudy" placeholder="Enter the TypeOfStudy" value={this.state.TypeOfStudy} onChange={this.handleInputChange} />
                    </FormGroup>

                    <FormGroup className='col-lg-6'>
                        <Label for="spName">Other Department as collaborators </Label>
                        <Input type="text" name="collaborators" id="collaborators" placeholder="Enter the collaborators" value={this.state.collaborators} onChange={this.handleInputChange} />
                    </FormGroup>
                    </div>
                    
                    <FormGroup>
                        <Label for="spName">Reason for Rejection (If any) </Label>
                        <Input type="text" name="Rejection" id="Rejection" placeholder="Enter the reason for Rejection" value={this.state.Rejection} onChange={this.handleInputChange} />
                    </FormGroup>

                    <div className='row' style={{paddingTop : '20px'}}>
                    <FormGroup className='col-lg-4'>
                        <Label for="spName">No. of Subjects</Label>
                        <Input type="number" name="NoOfSubjects" id="NoOfSubjects" placeholder="Enter the NoOfSubjects" value={this.state.NoOfSubjects} onChange={this.handleInputChange} />
                    </FormGroup>

                    <FormGroup className='col-lg-4'>
                        <Label for="spName"> Will AKUH patients be used as human subjects? (Yes/No)</Label>
                        <Input type="text" name="humanSubjects" id="humanSubjects"  value={this.state.humanSubjects} onChange={this.handleInputChange} >
                            <option>YES</option>
                            <option>NO</option>
                        </Input>
                    </FormGroup>

                    <FormGroup className='col-lg-4'>
                        <Label for="spName">Location of study (Stadium Rd, secondary hospital, field site etc. (mention all if more than 1)</Label>
                        <Input type="text" name="LocationOfstudy" id="LocationOfstudy" placeholder="Enter the LocationOfstudy" value={this.state.LocationOfstudy} onChange={this.handleInputChange} />
                    </FormGroup>
                    </div>


                    <Button color='success' size="lg" type='submit'>Submit</Button>
                </Form>
                <div style={{padding: "10% 0"}}></div>
                    
                </div>
            </div>
            
        )
    }
}

export default InputForm;