import React from 'react';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import {withRouter} from 'react-router-dom';

const MonthCard = (props) => {
    return(
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <Card>
                <CardHeader> {props.month} </CardHeader>
                <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText><Button color="primary" onClick={()=>{props.history.push('/dummy');}}>Click me to console</Button></CardText>
                </CardBody>
                
            </Card>
        </div>
    )
}
export default withRouter(MonthCard);