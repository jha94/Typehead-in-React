import React, {useState} from 'react';
import {searchResult} from './Utils.js'
import './Typehead.css'
const Typehead = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [inputValue, setInputValue] = useState('');
  return (
    <div id="wrapper">
        <input value={inputValue} onChange={({target:{value}})=>{
                if(value){
                    searchResult(value).then(results=>setSearchResults(results))
                }
                setInputValue(value)
        }} />
        {
            searchResults.length?searchResults.map(value=>{
                return(
                    <div key={value} onClick={()=>{
                        setInputValue(value)
                        setSearchResults([])
                    }} >{value}</div>
                )
            }):''
        }
    </div>
  )
}

export default Typehead