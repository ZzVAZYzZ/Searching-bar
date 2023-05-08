import React, { useState } from 'react';

function RadioList({changeSelect}) {
  const [isOpen, setIsOpen] = useState(false);
  const[select,setSelect]=useState("");
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  function handleSelect(e) {
    const newSelect = e.target.value;
    setSelect(newSelect);
    changeSelect(newSelect);
  }
  return (
    <div className='bg-red-300 hover:bg-red-500 text-white font-bold  rounded w-1/5 relative'>
      <button onClick={handleButtonClick} className='w-full py-2 px-4'>ZOO</button>
      {isOpen && (
        <div className='flex flex-col absolute border-2 border-black bg-white w-full text-black'>
          <label className='cursor-pointer bg-white hover:bg-gray-200'>
            <input type="radio" name="option" value="NEW YORK" checked={select==='NEW YORK'} onChange={handleSelect}/> NEW YORK	
          </label>
          <label className='cursor-pointer bg-white hover:bg-gray-200'>
            <input type="radio" name="option" value="HA NOI" checked={select==='HA NOI'} onChange={handleSelect}/> HA NOI
          </label>
          <label className='cursor-pointer bg-white hover:bg-gray-200'>
            <input type="radio" name="option" value="BANGKOK" checked={select==='BANGKOK'} onChange={handleSelect}/> BANGKOK
          </label>
          <label className='cursor-pointer bg-white hover:bg-gray-200'>
            <input type="radio" name="option" value="TOKYO" checked={select==='TOKYO'} onChange={handleSelect}/> TOKYO
          </label>
          <label className='cursor-pointer bg-white hover:bg-gray-200'>
            <input type="radio" name="option" value="SHANGHAI" checked={select==='SHANGHAI'} onChange={handleSelect}/> SHANGHAI
          </label>
          <label className='cursor-pointer bg-white hover:bg-gray-200'>
            <input type="radio" name="option" value="KOERA" checked={select==='KOERA'} onChange={handleSelect}/> KOERA
          </label>
          <label className='cursor-pointer bg-white hover:bg-gray-200'>
            <input type="radio" name="option" value="" checked={select===""} onChange={handleSelect}/> ALL
          </label>
        </div>
      )}
    </div>
  );
}

export default RadioList;