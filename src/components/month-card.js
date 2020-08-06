import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../components/table/tableList.css';

class MonthCard extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            showComponent : false
        }
    }

    handleOnClick = () => {
        this.setState({showComponent : !this.state.showComponent});
    }
    
    render(){
        const filterRecords = this.props.records.filter(record => record.month.toLowerCase().includes(this.props.month.toLocaleLowerCase()));
        console.log("This is THE ARRAY: ", filterRecords);
        return(
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <Card>
                    <CardHeader> {this.props.month} </CardHeader>
                    <CardBody>
        <CardTitle>Total numebr of Records this month : {filterRecords.length}</CardTitle>
                        <CardText>

                            <Button color="success">
                                <Link to={{
                                    pathname: `table`,
                                    state: filterRecords
                                }} style={{textDecoration:"none", color:"white"}}>
                                    Show Records
                                </Link>    
                            </Button>
    
                        </CardText>
                    </CardBody>
                    
                </Card>
            </div>
        )
    }
}
    
export default withRouter(MonthCard);