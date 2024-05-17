import { useState } from 'react'
import Home from './pages/home'
import ImageSlider from './pages/home/components/imageSlider'
import './App.css';
import Navbar from './components/navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />

  )
}

export default App
