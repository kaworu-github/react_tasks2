import React, { useState } from 'react';
import Button from '../components/Button/Button';

export default function ThemeChanger() {
    let [isDarkTheme, setIsDarkTheme] = useState(true);

        // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        //     document.documentElement.classList.add('dark');
        // } else {
        //     document.documentElement.classList.remove('dark');
        // }
      if(isDarkTheme){
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.theme = 'dark'
      }else{
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'
      }

      console.log('theme',localStorage.theme);
      
    return(
        <div >{/* className={isDarkTheme ? "dark-theme" : "light-theme"} */}
			<Button onTouch={() => setIsDarkTheme(!isDarkTheme)}>
			{isDarkTheme?"Темная тема":"Светлая тема"}
			</Button>
            <h1 className='text-blue-500 dark:text-gray-300'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati aliquam repellat voluptatum voluptatibus. Mollitia temporibus, dolor consectetur debitis illo quibusdam, voluptatum minima placeat dignissimos excepturi totam, sint inventore modi ipsa?
            </h1>
            <br />
            <div style={{height: isDarkTheme ? '50px' : '0px'}} className='w-[250px] h-[0px] bg-black text-white  transition-all duration-750'  >
               <p style={{opacity: isDarkTheme ? '1' : '0'}}>
                Мы открыли блок по нажатию
               </p>
            </div>
		</div>
    )
}