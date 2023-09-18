import React, { useContext } from 'react';
import { ThemeContext } from '../jsx files/Context';

function Home() {
  const { getTheme } = useContext(ThemeContext);
  
  return (
    <div className={getTheme}>
        <div className='genre'>

        </div>
        <div className='gameContent'>

        </div>
    </div>
  );
}

export default Home;
