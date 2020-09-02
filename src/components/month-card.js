import React ,{ useState }  from 'react';
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../components/table/tableList.css';
import { useSpring , animated } from 'react-spring';
import './monthCard.css';


const MonthCard = (prop) => {
    const filterRecords = prop.records.filter(record => record.month.toLowerCase().includes(prop.month.toLowerCase()));

    const filterPublicationRecords = prop.publicationRecords.filter(publicationRecord => publicationRecord.publicationMonths.toLowerCase().includes(prop.month.toLowerCase()));

    const filterCommunicationRecords = prop.communicationRecords.filter(communicationRecord => communicationRecord.month.toLowerCase().includes(prop.month.toLowerCase()));

    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
    return(
            <animated.div
            style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <Card className='card'>
                    <CardHeader> {prop.month} </CardHeader>
                    <CardBody>
                <CardTitle>Total numebr of Records this month : {filterRecords.length + filterPublicationRecords.length + filterCommunicationRecords.length}</CardTitle>
                        <CardText>
                            <div onClick={() => toggle(!state)}>
                                <animated.div
                                style={{ 
                                opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                transform: x
                                  .interpolate({
                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                  })
                                  .interpolate(x => `scale(${x})`)
                              }}>
                                    <Button color="success" className='btnSpacing'>
                                        <Link to={{
                                            pathname: `table`,
                                            state: filterRecords
                                        }} style={{textDecoration:"none", color:"white"}}>
                                            Show Manuscript records
                                        </Link>    
                                    </Button>

                                    <Button color="success" className='btnSpacing'>
                                        <Link to={{
                                            pathname: `pubTable`,
                                            state: filterPublicationRecords
                                        }} style={{textDecoration:"none", color:"white"}}>
                                            Show Publication records
                                        </Link>    
                                    </Button>

                                    <Button color="success" className='btnSpacing'>
                                        <Link to={{
                                            pathname: `comTable`,
                                            state: filterCommunicationRecords
                                        }} style={{textDecoration:"none", color:"white"}}>
                                            Show Conference records
                                        </Link>    
                                    </Button>

                                   
                                </animated.div>
                            </div>
                            
    
                        </CardText>
                    </CardBody>
                    
                </Card>
            </animated.div>
    )
        
}
    
export default withRouter(MonthCard);