import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header.jsx';
import ContentBox from './components/ContentBox.jsx';
import { RecipeScaler } from './components/RecipeScaler.jsx';




export default function App() {
  //toggle states
  const [showForm, setShowForm] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);

  //Scaling logic states
  const [originalServings, setOriginalServings] = useState(1);
  const [newServings, setNewServings] = useState(1);
  const [scaledRecipe, setScaledRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  //function to handle scaling logic
  const handleScale = () => {
    const scaled = new RecipeScaler(originalServings, newServings, ingredients).scale();
    setScaledRecipe(scaled);
    setShowRecipe(true);

  }


  return (
  
    <div className="flex flex-col justify-center items-center max-w-screen h-screen overflow-hidden bg-[rgb(255,237,179)]">
          <Header />
          <ContentBox 
          ingredients={ingredients} 
          setIngredients={setIngredients} 
          showForm={showForm} 
          setShowForm={setShowForm} 
          scaledRecipe={scaledRecipe} 
          originalServings={originalServings} 
          setOriginalServings={setOriginalServings} 
          newServings={newServings} 
          setNewServings={setNewServings}
          showRecipe={showRecipe}    
          handleScale={handleScale} 
          />
          
    </div>
          
 
  )
}



