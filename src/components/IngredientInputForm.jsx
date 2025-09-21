import React, { useState } from "react"

export default function IngredientInputForm({ setShowForm, ingredients, setIngredients }) {
    const units = [
    "", "tablespoons", "teaspoons", "fluid ounces", "cups", "pints",
    "quarts", "gallons", "milliliters", "liters",
    "grams", "kilograms", "ounces", "pounds",
    "pieces", "slices", "cloves", "pinches", "drops"
    ];
    const [numUnit, setNumUnits] = useState("");
    const [ingName, setIngName] = useState("");
    const [unit, setUnit] = useState("tablespoons");

    return (
        <div id="inputForm" className="flex flex-col z-100 min-w-full h-full bg-[rgb(174,100,100)] items-start gap-[1rem] border-box px-[1rem] py-[0.5em] max-w-[400px] font-['Orbit'] text-white bg-[rgb(205, 177, 161)]">
            <div id="numUnits" className="flex flex-col items-start">
                <span>Number of Units</span>
                <input value={numUnit} onChange={(e) => setNumUnits(e.target.value)} type="text" placeholder="1" className="border-box rounded-sm p-[0.1em] bg-[rgb(188,120,120))]"></input>
            </div>
            
            <div id="ingName" className="flex flex-col items-start">
                <span>Ingredient Name</span>
                <input value={ingName} onChange={(e) => setIngName(e.target.value)} type="text" placeholder="New Ingredient" className="flex item-start border-box rounded-sm p-[0.1em] bg-[rgb(188,120,120))]"></input>
            </div>

            <div id="unit" className="relative flex flex-col items-start">
                <span>Unit</span>
                <div id="unitDropDown" className="flex gap-auto items-center border-box p-[0.25em] rounded-sm bg-[rgba(151,67,67,1)]">
                    <select value={unit} onChange={(e) => setUnit(e.target.value)} className="appearance-none text-[0.5em]">
                        {units.map((u, index) => (<option key={index} value={u}>{u}</option>))}
                    </select>
                    <span className="pointer-events-none text-[6px] text-white">
                        ▼
                    </span>
                </div>
            </div>
            <button onClick={() => {
                if (!numUnit || !ingName) return;
                setIngredients([...ingredients, { numUnit, ingName, unit }]);
                setShowForm(false);
                }} id="addButton" className="px-[0.5em] py-[0.1em] border-box rounded-sm text-sm bg-[rgb(118,50,50)]">
                Add
            </button>
                
        </div>
    );
}