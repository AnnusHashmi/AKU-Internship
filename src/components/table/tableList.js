import React from 'react';
import { Table } from 'reactstrap';

const TableList = (props) => {
        return(
            <div>
                <Table striped>
                    <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Last Name</th>
                        
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                            props.records.map((record) => {
                                return(
                                    <tr>
                                        <td> {record.spName} </td>
                                        <td> {record.staffName} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    
}

export default TableList;