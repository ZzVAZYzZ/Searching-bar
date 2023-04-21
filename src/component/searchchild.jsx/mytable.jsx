import { Table } from 'react-bootstrap';
import React,{ useState , useEffect , useRef , useLayoutEffect} from 'react';

function MyTable(props){
    const {data} = props;
    console.log(data)
    const yData = [
        {
            no: '1',
            name: 'Jack',
            zoo: 'New York',
            id: 'ny01a',
            piece: 'Elephant',
            age: '12 years'
        },
        {
            no: '2',
            name: 'Mie',
            zoo: 'Ha Noi',
            id: 'hn03a',
            piece: 'Tiger',
            age: '5 years'
        },
        {
            no: '3',
            name: 'Tiny',
            zoo: 'New York',
            id: 'ny06b',
            piece: 'Panda',
            age: '3 years'
        },
        {
            no: '4',
            name: 'Randy',
            zoo: 'Bangkok',
            id: 'bk03c',
            piece: 'Monkey',
            age: '2 months'
        }
    ];

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
                {yData.map((item)=>(
                    <tr key={item.no}>
                        <td>{item.no}</td>
                        <td>{item.name}</td>
                        <td>{item.zoo}</td>
                        <td>{item.id}</td>
                        <td>{item.piece}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default MyTable;