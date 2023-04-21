import { Table } from 'react-bootstrap';
import React,{ useState } from 'react';

function MyTable(data){
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Zoo</th>
                    <th>ID</th>
                    <th>PIECE</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Jack</td>
                    <td>NEW YORK</td>
                    <td>ny01a</td>
                    <td>Elephent</td>
                    <td>12 Years</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mie</td>
                    <td>HA NOI</td>
                    <td>hn03a</td>
                    <td>Tiger</td>
                    <td>5 Years</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Tiny</td>
                    <td>NEW YORK</td>
                    <td>ny06b</td>
                    <td>Panda</td>
                    <td>3 Years</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>RANDY</td>
                    <td>BANGKOK</td>
                    <td>bk03c</td>
                    <td>Monkey</td>
                    <td>2 Months</td>
                </tr>
                <tr>
                    <td>{data[1]}</td>
                    <td>RANDY</td>
                    <td>BANGKOK</td>
                    <td>bk03c</td>
                    <td>Monkey</td>
                    <td>2 Months</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default MyTable;