import React, { useState } from "react"
import IngredientDisplay from "./IngredientDisplay";
import AddIngredientButton from "./AddIngredientButton";
import NewServings from "./NewServings";
import ScaleButton from "./Scalebutton";
import OriginalServings from "./OriginalServings.jsx";

  export default function InputPanel( { ingredients, setIngredients, showForm, setShowForm, originalServings, setOriginalServings, newServings, setNewServings, handleScale }) {
            return (
            <section className="flex flex-col justify-start items-center flex-1 border-box max-w-1/2 p-[3%] justify-center gap-[3%] rounded-2xl font-['Orbit'] bg-[rgb(118,65,65)]">
                <IngredientDisplay showForm={showForm} setShowForm={setShowForm} ingredients={ingredients} setIngredients={setIngredients}/>
                <div id="inputs" className="flex flex-col items-center justify-evenly w-full h-full">

                        <AddIngredientButton onClick={() => setShowForm(true)} />
                        <div id="servingInputs" className="flex justify-between w-full">

                            <div id="originalServings" className="flex items-center gap[2%]">
                                <span style={{color: "white", fontFamily:"'Orbit', sans-serif", fontWeight:400, fontSize:"0.8rem"}}>Original Servings: </span>
                                <OriginalServings originalServings={originalServings} setOriginalServings={setOriginalServings} />
                            </div>

                            <div id="peopleInput" className="flex items-center gap-[2%]">
                                <span style={{color: "white", fontFamily:"'Orbit', sans-serif", fontWeight:400, fontSize:"0.8rem"}}>I want to feed: </span>
                                <NewServings newServings={newServings} setNewServings={setNewServings}/>
                            </div>

                        </div>
                    <ScaleButton handleScale={handleScale}/>

                </div>
            </section>
    );
}
