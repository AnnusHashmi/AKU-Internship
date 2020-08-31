import React, { Component } from 'react'
import Logo from '../../assets/akuLogo.png'
import {  Input, Form, FormGroup, Label, Button } from 'reactstrap'
import './Login.css'
import auth from '../../components/auth';
import {withRouter} from 'react-router-dom'


class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            actualUser : 'aku',
            actualPass : 'aku',
        }
    }

        checkCreds = () => {
            if(this.state.username == this.state.actualUser && this.state.password == this.state.actualPass){
                auth.setLogin(() => {
                    localStorage.setItem("user",{username:this.state.actualUser, password:this.state.actualPass})
                    this.props.history.push("/home");
                });
                }
            }
    
        handleInputChange = (e) => {
            let {name, value} = e.target;
            this.setState({[name] : value});
        }

    render(){
        console.log("this is the email: ", this.state.email);
        return(
            <div className='container user_card'>
                <div className='marginTop '>
                    <div>
                        <img src={Logo} width='100' style={{marginLeft : 'auto' , marginRight : 'auto'}} />
                    </div>

                    <div className='col-lg-6'>

                    
                    <Form autoComplete="off">

                        <FormGroup autoComplete="false">
                            <Label for="spName">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Enter username" value={this.state.username} onChange={this.handleInputChange} />
                        </FormGroup>

                        <FormGroup autoComplete={false}>
                            <Label for="staffName">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter the password" value={this.state.password} onChange={this.handleInputChange}/>
                        </FormGroup>  
                    </Form>
                     

                    <Button color='success' size="lg" onClick={this.checkCreds} type='submit'>Login</Button> 
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(Login);