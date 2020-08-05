import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import Dummy from '../components/dummy';
import TableList from './table/tableList';

class MonthCard extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            showComponent : false
        }
    }

    handleOnClick = () => {
        this.setState({showComponent : true});
    }
    
    render(){
        const filterRecords = this.props.records.filter(record => record.month.toLowerCase().includes(this.props.month.toLocaleLowerCase()));
        console.log("This is THE ARRAY: ", filterRecords);
        return(
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <Card>
                    <CardHeader> {this.props.month} </CardHeader>
                    <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                        <CardText><Button color="success" onClick={this.handleOnClick}>Click me to console</Button>
                            {
                                this.state.showComponent ?
                                <TableList /> :
                                null
                            }
                        </CardText>
                    </CardBody>
                    
                </Card>
            </div>
        )
    }
}
    
export default withRouter(MonthCard);