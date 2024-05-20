import { useState } from 'react'
import Home from './pages/home'
import ImageSlider from './pages/home/components/imageSlider'
import './App.css';
import Navbar from './components/navbar';
function App() {
  
  const [isDark, setIsDark] = useState(false);

  const handleDarkToggle = () => {
    setIsDark(!isDark);
  };
  return (
    <Home />

  )
}

export default App
