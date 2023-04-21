import React , {useState,useEffect} from "react";
import MyInput from "./searchchild.jsx/myinput";
import MyTable from "./searchchild.jsx/mytable";
import axios from 'axios';

function SearchingBar(){
    const [data,setData] = useState('')
    const [input,setInput] = useState('');
    const [dataSearch,setDataSearch] = useState('');

    useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/ZzVAZYzZ/Searching-bar/main/src/mydata.json')
        .then(response => setData(response.data))
        .catch(error => console.error(error))
    },[])
    
    function handleClick(){
        setDataSearch(input);
    }
    return(
        <>
            <MyInput 
                dataSearch={setInput}
            />
            <button onClick={handleClick}>Search</button>
            <MyTable
                data={data.data}
                dataSearch={dataSearch}
            />
        </>
        
    )
}

export default SearchingBar;