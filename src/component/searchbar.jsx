import React , {useState,useEffect,createContext,useContext, useLayoutEffect} from "react";
import MyInput from "./searchchild.jsx/myinput";
import MyTable from "./searchchild.jsx/mytable5input";
// import ToggleSearch from "./searchchild.jsx/togglesearch";
import axios from 'axios';
import RadioList from "./searchchild.jsx/zoofilter";
import MyIdInput from "./searchchild.jsx/idfilter";

export const DataSearch = createContext({});

function SearchingBar(){
    const [data,setData] = useState('');
    const [input,setInput] = useState('');
    const [dataSearch,setDataSearch] = useState('');
    const [searchSelect,setSearchSelect] = useState('');
    const [selectZoo,setSelectZoo] = useState('');
    const [selectId,setSelectId] = useState('');
    const [selectPieces,setSelectPieces] = useState('');
    const [selectAge,setSelectAge] = useState('');

    useEffect(()=>{
        // axios.get('https://raw.githubusercontent.com/ZzVAZYzZ/Searching-bar/main/src/mydata.json')
        axios.get('http://localhost:8000/api/test')
        .then(response => setData(response.data))
        .catch(error => console.error(error))
    },[])
    function handleClick(){
        const searchData = {
            name: input,
            zoo: selectZoo,
            id: selectId,
            pieces: selectPieces,
            age: selectAge
        };
        setDataSearch(searchData);
    }
    
    function zooSelect(e){
        setSelectZoo(e);
    }
    function idSelect(e){
        setSelectId(e);
    }
    function piecesSelect(e){
        setSelectPieces(e);
    }
    function ageSelect(e){
        setSelectAge(e);
    } 
    return(
        <>
            <DataSearch.Provider value={dataSearch}>
                    <div className="flex flex-col w-4/5 mx-auto">
                        <div className="flex flex-row">
                            <MyInput 
                                dataSearch={setInput}
                                placeHolder="Name"
                            />
                            <RadioList 
                                changeSelect={zooSelect}
                                placeHolder="Zoo"
                            />
                            <MyIdInput 
                                dataSearch={idSelect}
                                placeHolder="ID"
                            />
                            <MyIdInput 
                                dataSearch={piecesSelect}
                                placeHolder="PIECES"
                            />
                            <MyIdInput 
                                dataSearch={ageSelect}
                                placeHolder="AGE"
                            />
                            {/* <MyInput 
                                dataSearch={setInput}
                                placeHolder="Id"
                            />
                            <MyInput 
                                dataSearch={setInput}
                                placeHolder="Piece"
                            />
                            
                            <MyInput 
                                dataSearch={setInput}
                                placeHolder="Age"
                            /> */}
                            {/* <ToggleSearch 
                                changeSelect={changeSelect}
                            /> */}
                            <button onClick={handleClick}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/5"
                            >
                                Search
                            </button>
                        </  div>
                        
                        <MyTable
                            
                            data={data}
                            // searchSelect={searchSelect}
                            dataSearch={dataSearch}
                            zooSelect = {selectZoo}
                            idSelect = {selectId}
                            piecesSelect = {selectPieces}
                            ageSelect = {selectAge}
                        />
                    </div>   
                
                
            </DataSearch.Provider>
        </>
        
    )
}

export default SearchingBar;