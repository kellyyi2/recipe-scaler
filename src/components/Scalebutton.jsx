import React from "react"


export default function ScaleButton({ handleScale }) {
    return (
        <button onClick={() => handleScale()}className="w-full h-fit p-[0.5em] rounded-lg font-['Orbit'] text-[rgb(57,61,25)] bg-[rgb(223,234,137)]">
            Scale it!
        </button>
    );
}

//get the scale button to actually display the updated recipe