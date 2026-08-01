import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollRunner';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {

  // DEFAULT DARK MODE
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolioTheme');

    // agar pehli baar open ho to dark mode
    return saved ? saved === 'dark' : true;
  });

  // THEME APPLY
  useEffect(() => {

    localStorage.setItem(
      'portfolioTheme',
      isDarkMode ? 'dark' : 'light'
    );

    if (isDarkMode) {

      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');

      // body background bhi dark
      document.body.style.background = '#0f172a';

    } else {

      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');

      // light mode background
      document.body.style.background = '#ffffff';
    }

  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>

      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <ScrollProgress />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}

export default App;
