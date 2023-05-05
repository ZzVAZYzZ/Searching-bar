import React , {useState,useEffect,createContext} from "react";
import MyInput from "./searchchild.jsx/myinput";
import MyTable from "./searchchild.jsx/mytable";
import axios from 'axios';
/////////
// const express = require("express")
// const app = express()
// const cors = require("cors")
// app.use(cors({
//     origin: 'http://127.0.0.1:8000',
//     credentials:true,
// }))
/////////
export const DataSearch = createContext();

function SearchingBar(){
    const [data,setData] = useState('')
    const [input,setInput] = useState('');
    const [dataSearch,setDataSearch] = useState('');
    
    useEffect(()=>{
        // axios.get('https://raw.githubusercontent.com/ZzVAZYzZ/Searching-bar/main/src/mydata.json')
        axios.get('http://localhost:8000/api/test')
        .then(response => setData(response.data))
        .catch(error => console.error(error))
    },[])
    console.log(data);
    function handleClick(){
        setDataSearch(input);
    }
    return(
        <>
            <DataSearch.Provider value={dataSearch}>
                <div className="flex flex-col w-4/5 mx-auto">
                    <div className="flex flex-row">
                        <MyInput 
                            
                            dataSearch={setInput}
                        />
                        <button onClick={handleClick}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/5"
                        >
                            Search
                        </button>
                    </div>
                    
                    <MyTable
                        
                        data={data}
                        dataSearch={dataSearch}
                    />
                </div>
                
            </DataSearch.Provider>
        </>
        
    )
}

export default SearchingBar;