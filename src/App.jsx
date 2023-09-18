import { useState } from 'react';
import './App.css';
import Home from './jsx files/Home';
import Nav from './components/Nav';
import { ThemeContext } from './jsx files/Context';

function App() {
  const [getTheme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ getTheme, setTheme }}>
      <div className={`${getTheme} ${getTheme === 'dark' ? 'bg-black' : 'bg-white' }`}>
        <Nav />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
