import React, { useContext } from 'react';
import { ThemeContext } from '../jsx files/Context';
import Genre from '../components/Genre.jsx';

function Home() {
  const { getTheme } = useContext(ThemeContext);
  
  return (
    <div className={getTheme}>
        <div className='grid grid-cols-4'>
            <div className='genre h-full hidden md:block'>
              <Genre/>
            </div>
            <div className='gameContent col-span-4 md:col-span-3'>

            </div>
        </div>
        
    </div>
  );
}

export default Home;
