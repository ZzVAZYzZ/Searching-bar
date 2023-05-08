import React, { useState , useEffect , useRef , useLayoutEffect, useMemo, useCallback, useContext, createContext} from 'react';



function ToggleSearch({changeSelect}){
    const[select,setSelect]=useState('_Name');
    function handleSelect(e) {
        const newSelect = e.target.value;
        setSelect(newSelect);
        changeSelect(newSelect);
    }

    return (
        <div className='flex flex-row w-1/5 mx-auto justify-between'>
            <div className='flex flex-col '>
                NAME
                <input type="radio"  value="_Name" checked={select==='_Name'} onChange={handleSelect}/>
            </div>
            <div className='flex flex-col '>
                ZOO
                <input type="radio" value="_Zoo" checked={select==='_Zoo'} onChange={handleSelect}/> 
            </div>
            <div className='flex flex-col '>
                ID
                <input type="radio" value="_Id" checked={select==='_Id'} onChange={handleSelect}/>
            </div>
            <div className='flex flex-col '>
                PIECE
                <input type="radio" value="_Piece" checked={select==='_Piece'} onChange={handleSelect}/>
            </div> 
            <div className='flex flex-col '>
                AGE
                <input type="radio" value="_Age" checked={select==='_Age'} onChange={handleSelect}/>
            </div>
        </div>
    )
}

export default ToggleSearch;