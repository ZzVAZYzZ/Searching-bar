import { Table } from 'react-bootstrap';
import React, { useState , useEffect , useRef , useLayoutEffect, useMemo, useCallback, useContext} from 'react';
import { DataSearch } from '../searchbar';
import _ from 'lodash';

function MyTable({data,zooSelect,idSelect,piecesSelect,ageSelect}) {
    const [filteredData,setFilteredData] = useState([]);
    const [prevDataSearch, setPrevDataSearch] = useState("");
    const dataSearch = useContext(DataSearch);
    useEffect(()=>{
        console.log(dataSearch);
    },[dataSearch])

    const filteredItems = useMemo(() => {
        if (Array.isArray(data) && dataSearch !== '') {
          return _.filter(data, item => {
            const isMatchedName = item._Name.toLowerCase().includes(dataSearch.name.toLowerCase())
            const isMatchedZoo = item._Zoo === dataSearch.zoo || dataSearch.zoo === '';
            const isMatchedId = item._Id.toLowerCase().includes(dataSearch.id.toLowerCase())
            const isMatchedPieces = item._Piece.toLowerCase().includes(dataSearch.pieces.toLowerCase())
            const isMatchedAge = item._Age.toLowerCase().includes(dataSearch.age.toLowerCase())
            
            return isMatchedName && isMatchedZoo && isMatchedId && isMatchedPieces && isMatchedAge;
          });
        }
        return data;
      }, [data, dataSearch, zooSelect, idSelect, piecesSelect, ageSelect]);

    const handleFilterData = useCallback(() => {
        if (prevDataSearch !== "" && dataSearch === "") {
            setFilteredData(data);
        } else {
            setFilteredData(filteredItems);
        }
        setPrevDataSearch(dataSearch);
    }, [prevDataSearch, dataSearch, data, filteredItems]);

    useEffect(() => {
        if (dataSearch === "") {
            setFilteredData(data);
        } else {
            handleFilterData();
        }
    }, [handleFilterData, dataSearch, data]);

    return (
        <>
            {Array.isArray(data) && data.length > 0 && (
                <Table striped bordered hover border="1px solid #333">
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
                    {(dataSearch === '' ? data : filteredData).map((item) => (
                            <tr key={item._No}>
                                <td>{item._No}</td>
                                <td>{item._Name}</td>
                                <td>{item._Zoo}</td>
                                <td>{item._Id}</td>
                                <td>{item._Piece}</td>
                                <td>{item._Age}</td>
                            </tr>
                    ))}
                    </tbody>
                </Table>
            )}
        </>
    );
}

export default MyTable;