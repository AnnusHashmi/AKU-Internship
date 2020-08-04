import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container  } from 'reactstrap'
import './inputForm.css';
import FirebaseDB from '../firebase';

class InputForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            month : '',
            spName : '',
            staffName : '',
            studyName : '',
            startDate : '',
            endDate : '',
            completedTasks : '',
            plannedTasks : '', 
            timeSpent : ''

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

                <Form onSubmit={this.hanleSubmit}>
                    
                    <FormGroup>
                        <Label for="spName">Supervisor Name</Label>
                        <Input type="text" name="spName" id="spName" placeholder="Enter the name" value={this.state.SPname} onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="staffName">Staff Name</Label>
                        <Input type="text" name="staffName" id="staffName" placeholder="Enter the name" value={this.state.staffName} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="studyName">Study Name</Label>
                        <Input type="text" name="studyName" id="studyName" placeholder="Enter the study name" value={this.state.studyName} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <div className='row'>
                    <FormGroup className='col-lg-3'>
                        <Label for="startDate">Start Date</Label>
                        <Input type="date" name="startDate" id="startDate" placeholder="Date when the study started" value={this.state.startDate} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup className='col-lg-6'>
                        <Label for="exampleSelect">Select Month</Label>
                        <Input type="select" name="month" id="month" value={this.state.month} onChange={this.handleInputChange}>
                        <option>January</option>
                        <option>Febuary</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className='col-lg-3'>
                        <Label for="endDate">Expected End Date</Label>
                        <Input type="date" name="endDate" id="endDate" placeholder="Date when the study started" value={this.state.endDate} onChange={this.handleInputChange}/>
                    </FormGroup>
                    </div>
                    <div className='row'>
                        <FormGroup className='col-lg-6'>
                            <Label for='content'>Tasks completed this Month</Label>
                            <Input type="textarea" name="completedTasks" id="completedTasks" placeholder='Enter text in bullets' value={this.state.completedTasks} onChange={this.handleInputChange}/>
                        </FormGroup>
                        <FormGroup className='col-lg-6'>
                            <Label for='content'>Tasks planned for next Month</Label>
                            <Input type="textarea" name="plannedTasks" id="plannedTasks" placeholder='Enter text in bullets' value={this.state.plannedTasks} onChange={this.handleInputChange}/>
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <Label for="timeSpent">Hours spent by reseracher</Label>
                        <Input type='number' name="timeSpent" id="timeSpent" placeholder="(this week)" value={this.state.timeSpent} onChange={this.handleInputChange}/>
                    </FormGroup>

                    <Button color='success' size="lg" type='submit'>Submit</Button>
                </Form>
                <div style={{padding: "10% 0"}}></div>
                    
                </div>
            </div>
            
        )
    }
}

export default InputForm;