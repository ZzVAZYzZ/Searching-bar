import React , {useState,useEffect} from "react";

function MyIdInput({dataSearch,placeHolder}){
    const [input,setInput] = useState('');

    function handleChange(e){
        const newSelect = e.target.value;
        
        dataSearch(newSelect);
    }
    return(
        <input
            className="border border-gray-400 mr-2 py-2 px-4 rounded w-1/6 "
            type="text" 
            onChange={handleChange}
            placeholder={placeHolder}
        />
    )
}

export default MyIdInput;