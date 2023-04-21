import { Table } from 'react-bootstrap';
import React,{ useState , useEffect , useRef , useLayoutEffect} from 'react';
import axios from 'axios';

function MyTable({myData}){
    const data = [
        {
          no : 1,
          name : "Jack",
          zoo : "NEW YORK",
          id : "ny01a",
          piece: "Elephant",
          age: "12 years "
        },
        {
          no : 2,
          name : "Mie",
          zoo : "HA NOI",
          id : "hn03a",
          piece: "Tiger",
          age: "5 years "
        },
        {
          no : 3,
          name : "Tiny",
          zoo : "NEW YORK",
          id : "ny06b",
          piece: "Panda",
          age: "3 years "
        },
        {
          no : 4,
          name : "Randy",
          zoo : "BANGKOK",
          id : "bk03c",
          piece: "Monkey",
          age: "2 months "
        }
    ];
    // console.log(data);
    // console.log(`this is ${myData}`)
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
                {data.map(item => (
                    <tr key = {item.no}>
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