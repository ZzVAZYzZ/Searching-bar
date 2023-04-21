import React , {useState,useEffect} from "react";

function MyInput({dataSearch}){
    const [input,setInput] = useState('');

    function handleChange(e){
        setInput(e.target.value);
        dataSearch(input);
    }

    return(
        <input
            type="text" 
            onChange={handleChange}
        />
    )
}

export default MyInput;