import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header.jsx';
import ContentBox from './components/ContentBox.jsx';
import { RecipeScaler } from './components/RecipeScaler.jsx';

function App() {
  const [originalServings, setOriginalServings] = useState(1);
  const [newServings, setNewServings] = useState(1);

  return (
  
    <div className="flex flex-col justify-center items-center max-w-screen h-screen overflow-hidden bg-[rgb(255,237,179)]">
          <Header />
          <ContentBox />
    </div>
          
 
  )
}

export default App
