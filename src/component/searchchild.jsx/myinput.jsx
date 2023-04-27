import React , {useState,useEffect} from "react";

function MyInput({dataSearch}){
    const [input,setInput] = useState('');

    function handleChange(e){
        setInput(e.target.value);
        dataSearch(input);
    }

    return(
        <input
            className="border border-gray-400 mr-2 py-2 px-4 rounded w-4/5 "
            type="text" 
            onChange={handleChange}
        />
    )
}

export default MyInput;