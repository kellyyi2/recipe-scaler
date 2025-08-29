import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header.jsx'
import ContentBox from './components/ContentBox.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className="flex flex-col justify-center items-center max-w-screen h-screen overflow-hidden bg-[rgb(255,237,179)]">
          <Header />
          <ContentBox />
    </div>
          
 
  )
}

export default App
