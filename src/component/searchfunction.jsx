
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import MyTable from './searchchild.jsx/table';


// function SearchBar() {
//     const [data,setData] = useState('');
//     const [input,setInput] = useState('');
//     const [state,setState] = useState('');
//     const [show,setShow] = useState('');

//     function handleChange(e){
//         setInput(e.target.value)
//     }
//     useEffect(() => {
//         axios.get('https://raw.githubusercontent.com/ZzVAZYzZ/Searching-bar/main/src/mydata.json')
//         .then(response => setData(response.data))
//         .catch(error => console.error(error));
//     }, []);
//     console.log(data)
//     function handleChange(e){
//         setInput(e.target.value);
//     }
//     function handleData(){
//         let a = false;
//         let b = 0;
//         for(let i=0;i<data.length;i++){
//             if(input === data[i].name){
//                 a = true;
//                 b = i;
//             }
//             if(a){
//                 setState(`Name: ${data[b].name} - Zoo: ${data[b].zoo}`);
//             }else{
//                 setState('Không tìm ra dữ liệu');
//             }
//         }

//     }
   
//     function handleClick(){
//         handleData();
//         setShow(state);
//     }
//     return (
//         <div>
//             <input 
//                 type="text"
//                 onChange={handleChange}
//             />
//             <button
//                 onClick={handleClick}
//             >
//                 Search
//             </button>
//             <p>{show}</p>
//             <br />  
//             <MyTable
//                 myData = {data}
//             />
//         </div>
//     );
// }

// export default  SearchBar;
