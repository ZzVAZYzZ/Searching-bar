// import React,{useState,useEffect} from "react";
// import axios from 'axios';


// function SearchBar({myplaceholder,label}){

//     const [inputValue,setInputValue] = useState('');
//     const [data,setData] = useState('');


//     useEffect(() => {
//         axios.get('https://raw.githubusercontent.com/ZzVAZYzZ/My_Quiz/main/JSON/myQuiz1.json?token=GHSAT0AAAAAACBJVBWZ6R4HLBODRG7R22I4ZCA25TQ')
//           .then(response => setData(response.data))
//           .catch(error => console.error(error));
//       }, []);

//     console.log(data);

//     function handleChange(e){
//         setInputValue(e.target.value);
//     }

//     return(
//         <>
//             <label>{label}</label>
//             <input type="text"
//                 placeholder = {myplaceholder}
//                 onChange={handleChange}
//             />
//             <p>{inputValue}</p>
//         </>
        
//     )
// }

// CHATGPT

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar() {
    const [data,setData] = useState('');
    const [input,setInput] = useState('');
    const [state,setState] = useState('');
    const [show,setShow] = useState('');
    
    function handleChange(e){
        setInput(e.target.value)
    }
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/ZzVAZYzZ/Searching-bar/main/src/mydata.json')
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, []);
    function handleChange(e){
        setInput(e.target.value);
    }
    function handleData(){
  
        if(input === data[0].Name){
            setState('Đã tìm thấy dữ liệu');
        }else setState('Không tìm thấy dữ liệu');
    }
   
    function handleClick(){
        handleData();
        setShow(state);
    }
    return (
        <div>
        <input 
            type="text"
            onChange={handleChange}
        />
        <button
            onClick={handleClick}
        >
            Search
        </button>
        <p>{show}</p>
        </div>
  );
}

export default  SearchBar;