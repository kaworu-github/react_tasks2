import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function TaskSix() {
    let [changeWidth, setChangeWidth] = useState(10);

    return(
        <div style={{margin:50}} className="progress_bar_component">
			<div style={{width:`${changeWidth}%`, backgroundColor:"green", height:50}} className="progress"></div>
			<Button onTouch={() => setChangeWidth(wider=>wider+=2.5)}>Увеличить</Button>
			<Button onTouch={() => setChangeWidth(wider=>wider-=2.5)}>Уменьшить</Button>
		</div>
    )
}