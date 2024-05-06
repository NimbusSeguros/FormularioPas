import { useState } from 'react'
import './App.css'
import { ContactUss } from './assets/contactUss/ContactUss'
import Main from './assets/Main/Main'
import FondoImg from './assets/FondoImg/FondoImg'
import Sumarse from './assets/Sumarse/Sumarse'
import Footer from './assets/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
<div className='contenedor'>
<FondoImg/>
<Main/>
<Sumarse/>
<Footer/>
  
   </div>
  )
}

export default App
