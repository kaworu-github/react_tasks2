import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function ThirdTask() {
    let [inputValue, setInputValue] = useState("");
    let [heading, setHeading] = useState("");

    function ChangeHeader() {
        let header = inputValue;
        setHeading(header);
    };
    return(
        <div>
            <input
            className='px-2 py-1 mt-5 ml-5 rounded-2xl bg-blue-300 outline-none border-blue-400' 
            type="text"
            placeholder='введи заголовок'
            value={inputValue}
            onChange={(event)=>setInputValue(event.target.value)}
            />
            <Button onTouch={ChangeHeader}>изменить заголовок</Button>
            <h1 style={{textAlign:'center'}}>{inputValue/* heading */}</h1>
        </div>
    );
};