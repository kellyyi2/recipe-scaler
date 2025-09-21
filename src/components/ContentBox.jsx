import React from "react"
import InputPanel from './InputPanel.jsx'
import OutputPanel from './OutputPanel.jsx'

export default function ContentBox({ ingredients, setIngredients, showForm, setShowForm, scaledRecipe, originalServings, setOriginalServings, newServings, setNewServings, showRecipe, handleScale }) {
    return (
        <div className="flex gap-[5%] w-[70%] h-[70%] rounded-2xl p-[24px] box-border border-[12px] border-[rgb(89,55,49)] bg-[rgb(208,127,150)]">
            <InputPanel 
                ingredients={ingredients} 
                setIngredients={setIngredients} 
                showForm={showForm} 
                setShowForm={setShowForm} 
                originalServings={originalServings} 
                setOriginalServings={setOriginalServings} 
                newServings={newServings} 
                setNewServings={setNewServings}
                handleScale={handleScale}
                />
            <OutputPanel scaledRecipe={scaledRecipe} showRecipe={showRecipe}/>
        </div>
    );
}

