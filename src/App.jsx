import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'
import Professional from './components/Professional'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-white max-w-full'>
        <Navbar />
        <Profile />
        <About />
        <Professional />
        <Project />
        <Footer />
      </div>
    </>
  )
}

export default App
