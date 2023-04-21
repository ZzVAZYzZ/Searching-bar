import { Table } from 'react-bootstrap';
import React,{ useState , useEffect , useRef , useLayoutEffect, useCallback} from 'react';

function MyTable({data,dataSearch}) {
    const [filteredData,setFilteredData] = useState({});
    const [prevDataSearch, setPrevDataSearch] = useState("");

    useEffect(() => {
        if (prevDataSearch !== "" && dataSearch === "") {
          setFilteredData({});
        }
        setPrevDataSearch(dataSearch);
    }, [dataSearch]);

    useEffect(()=>{
        if (Array.isArray(data) && typeof dataSearch === 'string' && dataSearch !== ''){
            const filteredItem = data.find((item) => item.name.toLowerCase().includes(dataSearch.toLowerCase()));
            setFilteredData(filteredItem || {});
        }else if(Array.isArray(data)){
            setFilteredData({});
        }
    },[data,dataSearch])
    console.log(filteredData)
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
                    {dataSearch === '' ? (
                    // Nếu không có giá trị tìm kiếm, hiển thị toàn bộ dữ liệu
                        data.map((item) => (
                            <tr key={item.no}>
                                <td>{item.no}</td>
                                <td>{item.name}</td>
                                <td>{item.zoo}</td>
                                <td>{item.id}</td>
                                <td>{item.piece}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))
                    ) : (
                // Nếu có giá trị tìm kiếm, hiển thị các kết quả phù hợp

                        <tr key={filteredData.no}>
                            <td>{filteredData.no}</td>
                            <td>{filteredData.name}</td>
                            <td>{filteredData.zoo}</td>
                            <td>{filteredData.id}</td>
                            <td>{filteredData.piece}</td>
                            <td>{filteredData.age}</td>
                        </tr>

                    )}
                    </tbody>
                </Table>
            )}
        </>
    );
}

export default MyTable;