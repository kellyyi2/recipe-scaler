import React, { useState } from "react"
import IngredientDisplay from "./IngredientDisplay";
import AddIngredientButton from "./AddIngredientButton";
import NumPeopleInput from "./NumPeopleInput";
import ScaleButton from "./Scalebutton";

  export default function InputPanel() {
    const [showForm, setShowForm] = useState(false);
            return (
            <section className="flex flex-col justify-start items-center flex-1 border-box max-w-1/2 p-[3%] justify-center gap-[3%] rounded-2xl font-['Orbit'] bg-[rgb(118,65,65)]">
                <IngredientDisplay showForm={showForm} setShowForm={setShowForm} />
                <div id="inputs" className="flex flex-col justify-evenly w-full h-full">
                    <div id="recipeInputs" className="flex justify-between w-full">
                        <AddIngredientButton onClick={() => setShowForm(true)} />
                        <div id="peopleInput" className="flex items-center gap-[2%]">
                            <span style={{color: "white", fontFamily:"'Orbit', sans-serif", fontWeight:400, fontSize:"0.75rem"}}>This feeds:</span>
                            <NumPeopleInput />
                        </div>
                    </div>
                    <ScaleButton />
                </div>
            </section>
    );
}
