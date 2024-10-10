//import {тут импортируються компоненты}
import React, { useState } from 'react';

	

export default function FirstTaskSection() {

	let [notes, setNotes] = useState([]);

    // //task1
	// let [color, setColor] = useState("white");
	// // isShown, isDisplayed, isHidden,
	// // isModalShown
	// // isTextShown / isTextDisplayed / 
	// let color_arr = ["red", "blue", "green", "orange", "pink", "purple", "yellow"];
	// let random_color = color_arr[Math.floor(Math.random() * color_arr.length)];
	// console.log(random_color);
    // return(

    //     <section>
	// 					<div style={{backgroundColor:`${color}`}}>
	// 						<Button onTouch={() => setColor(color=random_color)}>change color</Button>	
	// 					</div>
	// 				</section>
    // )

	const onBlurHandler = (e) => {
		let note = {
			title: e.target.value,
			id: new Date().getTime(),
		};

		setNotes([...notes, note]);
	}


	const onDelateNoteHandler = (ID) => {
		setNotes(notes => notes.filter(({id})=> id !== ID));
	}

	return (
		<div className='mt-10 ml-10'>
			<input type="text" placeholder='Текст заметики...' onBlur={onBlurHandler}/>
			<h1 className='text-blue-600 text-center text-2xl font-bold'>Тут будут ваши записки</h1>
			<ul>
                {
                  notes.length 
                    ? notes.map(({title, id}) => <li onClick={()=>onDelateNoteHandler(id)} key={id} className="mb-3 ml-5">{title}</li>)
                    : <li>Сейчас у вас нет заметок</li>  
                }
            </ul>
		</div>
	)
	
}
