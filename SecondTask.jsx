import React, { useState } from 'react';
//import Button from '../components/Button/Button';

export default function SecondTask() {
    // task 2
    let [fontSize, setFontSize] = useState(15);
    let [inputValue, setInputValue] = useState("")

    function ChangerBlur() {//onBlurHandler
        let newSize = inputValue;
        //let str = 'sb12';
        //console.log(Number.isInteger(+str));
        if (newSize!==NaN) {
            setFontSize(newSize);
        };
    };

    const onChangeHandler = (event) => {
        if (event.target.value!==NaN) {
            setInputValue(event.target.value);
        };
    }
    
    return(
        <main>
			<input 
			className='px-2 py-1 mt-5 ml-5 rounded-2xl bg-blue-300 outline-none border-blue-400'
			type="text"
            placeholder='введи желаемый размер'
            value={inputValue}
            //onChange={(event)=>setInputValue(event.target.value)}
            //onChange={(event)=>onChangeHandler(event)}
            onChange={onChangeHandler}//event - попадает автоматически в первый параметр функции
            // onBlur={ChangerBlur}
			/>
			<h1 style={{fontSize:`${inputValue}px`, textAlign:"center"}}>ИЗМЕНИ МОЙ РАЗМЕР ШРИФТА</h1>
		</main>
    );
};