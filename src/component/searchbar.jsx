import React , {useState,useEffect} from "react";
import MyInput from "./searchchild.jsx/myinput";
import MyButton from "./searchchild.jsx/mybutton";
import MyTable from "./searchchild.jsx/mytable";
import axios from 'axios';

function SearchingBar(){
    const [data,setData] = useState('')
    useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/ZzVAZYzZ/Searching-bar/main/src/mydata.json')
        .then(response => setData(response.data))
        .catch(error => console.error(error))
    },[])
    
    

    return(
        <>
            <MyInput />
            <MyButton />
            <MyTable data = {data.data}/>
        </>
        
    )
}

export default SearchingBar;