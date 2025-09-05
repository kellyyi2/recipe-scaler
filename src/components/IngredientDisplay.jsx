import React, { useState } from "react"
import IngredientInputForm from "./IngredientInputForm";

export default function IngredientDisplay({ showForm, setShowForm }) {
    const [ingredients, setIngredients] = useState([]);

    return (
        <div className="flex flex-col w-full h-full bg-[rgb(174,100,100)]">
            {showForm && (
                <IngredientInputForm 
                setShowForm={setShowForm}
                ingredients={ingredients}
                setIngredients={setIngredients}
                />
            )}
            {!showForm && (
                <ul className=" text-md font-['Orbit'] text-white">
                {ingredients.map((ing, i) => (
                <li key={i}>
                    {ing.numUnit} {!(ing.unit === "") ? `${ing.unit} of` : ""} {ing.ingName}
                </li>
                ))}
            </ul>
            )}
 
        </div>
    );
}


