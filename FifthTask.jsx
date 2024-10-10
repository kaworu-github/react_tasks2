import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function FifthTask() {
    let [enter, setEnter] = useState("red");
    return(
        <div style={{backgroundColor:`${enter}`}} className="hoverChange_component">
			<Button onEnter={() => setEnter(entered=>entered="lightseagreen")}
			onLeave={() => setEnter(leaved=>leaved="red")}>
			</Button>
		</div>
    );
};