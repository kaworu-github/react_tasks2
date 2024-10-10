import { useState } from "react";

const laptops = [
    'Lenovo', 'Acer', 'Asus', 'LG', 'MacBook', 'HP'
];


export default function ShowItem() {
    
    // let [inputValue, setInputValue] = useState("");
    let [filteredLaptops, setFilteredLaptops] = useState([...laptops]);

    // const onInputHandler = (e) => {
    //     setInputValue(e.target.value);
    //     let newFilteredLaptops = laptops.filter( laptop => laptop.includes(e.target.value));
    //     console.log('newFilteredLaptops',newFilteredLaptops);
    //     setFilteredLaptops(newFilteredLaptops);
    // }

    const onInputHandler = (e) => {
        setFilteredLaptops(laptops.filter( laptop => laptop.includes(e.target.value)));
    }

    return(
        <div className="mt-10 ml-5">
            <input
            placeholder="enter brend title"
            // value={inputValue}
            onChange={onInputHandler}
            type="text"
            />
            <h1 className="ml-10 my-5 font-bold">List of Laptops</h1>
            <ul>
                {
                  filteredLaptops.length   //!!  - конвертация в булеан значени {!!state && <li></li>}
                    ? filteredLaptops.map(laptop => <li key={laptop} className="mb-3 ml-5">{laptop}</li>)
                    : <li>Простите, по вашему запросу ничего не найдено :-(</li>  
                }
            </ul>
        </div>
    )
}