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

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const [data,setData] = useState('');

useEffect(() => {
    axios.get('https://raw.githubusercontent.com/ZzVAZYzZ/My_Quiz/main/JSON/myQuiz1.json?token=GHSAT0AAAAAACBJVBWZYSL5RXC3LWGCBWHOZCA3I5Q')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

console.log(data);

  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default  SearchBar;