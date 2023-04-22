import { Table } from 'react-bootstrap';
import React,{ useState , useEffect , useRef , useLayoutEffect, useCallback, useContext} from 'react';
import { DataSearch } from '../searchbar';

function MyTable({data}) {
    const [filteredData,setFilteredData] = useState([]);
    const [prevDataSearch, setPrevDataSearch] = useState("");
    const dataSearch = useContext(DataSearch);

    useEffect(() => {
        if (prevDataSearch !== "" && dataSearch === "") {
          setFilteredData({});
        }
        setPrevDataSearch(dataSearch);
    }, [dataSearch]);

    useEffect(()=>{
        if (Array.isArray(data) && dataSearch !== ''){
            const filteredItem = data.filter((item) => {
                const values = Object.values(item).join(" ").toLowerCase();
                return values.includes(dataSearch.toLowerCase());
              });
            setFilteredData(filteredItem || []);
        }else if(Array.isArray(data)){
            setFilteredData([]);
        }
    },[data,dataSearch])
    return (
        <>
            {Array.isArray(data) && data.length > 0 &&(
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

                    filteredData.map((item) => (
                        <tr key={item.no}>
                            <td>{item.no}</td>
                            <td>{item.name}</td>
                            <td>{item.zoo}</td>
                            <td>{item.id}</td>
                            <td>{item.piece}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))

                    )}
                    </tbody>
                </Table>
            )}
        </>
    );
}

export default MyTable;