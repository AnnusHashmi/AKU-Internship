import React, { Component } from 'react'
import Logo from '../../assets/akuLogo.png'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Form, FormGroup, Label, Button } from 'reactstrap'
import './Login.css'
import auth from '../../components/auth';
import {withRouter} from 'react-router-dom'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            actualUser : 'aku.oars',
            actualPass : '123'
        }
    }

    checkCreds = () => {
        if(this.state.username == this.state.actualUser && this.state.password == this.state.actualPass){
            auth.setLogin(() => {
                localStorage.setItem("user",{username:this.state.actualUser, password:this.state.actualPass})
                this.props.history.push("/home");
              });
            }
            console.log("this is fired");
        }
    
        handleInputChange = (e) => {
            let {name, value} = e.target;
            this.setState({[name] : value});
        }

    render(){
        return(
            <div className='container user_card'>
                <div className='marginTop '>
                    <div>
                        <img src={Logo} width='100' />
                    </div>
                    <FormGroup>
                        <Label for="spName">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="Enter username" value={this.state.username} onChange={this.handleInputChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="staffName">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter the password" value={this.state.password} onChange={this.handleInputChange}/>
                    </FormGroup>   

                    <Button color='success' size="lg" onClick={this.checkCreds}>Submit</Button> 
                </div>
                
            </div>
        );
    }
}

export default withRouter(Login);