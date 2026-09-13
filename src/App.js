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

  const getStoredTheme = () => {
    if (typeof window === 'undefined') return true;

    try {
      const saved = window.localStorage.getItem('portfolioTheme');
      return saved ? saved === 'dark' : true;
    } catch (error) {
      return true;
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(getStoredTheme);

  useEffect(() => {
    try {
      window.localStorage.setItem('portfolioTheme', isDarkMode ? 'dark' : 'light');
    } catch (error) {
      // Ignore storage access issues in restricted environments.
    }

    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
      document.body.style.background = '#0f172a';
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
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

      <footer className="site-footer">
        <p>Available for work • Open to freelance, contract, and full-time roles</p>
      </footer>

    </div>
  );
}

export default App;
