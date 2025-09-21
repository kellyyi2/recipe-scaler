import React from "react";
import ShareButton from "./ShareButton";
import ResetButton from "./ResetButton";

export default function OutputPanel({ scaledRecipe, showRecipe }) {
    return (
        <section className="flex flex-col flex-1 max-w-1/2 h-full justify-start items-center p-[2%] border-box rounded-sm font-['Orbit'] bg-[rgb(255,233,208)]">
            <p id="recipeOutput" className="flex flex-1 overflow-y-auto mb-4">
                My Recipe:
            </p>
            <p>
                 {showRecipe && (
                    <ul className="flex flex-col flex-1 overflow-y-auto mb-4 list-disc list-inside">
                    {scaledRecipe.map((ing, i) => (
                        <li key={i}>
                            {ing.numUnit} {ing.unit !== "" ? `${ing.unit} of` : ""} {ing.ingName}
                        </li>
                    ))}
                </ul>
                )}
            </p>
            
            <div id="shareAndReset" className="flex gap-5">
                <ShareButton />
                <ResetButton />
            </div>
        </section>
    );
}

