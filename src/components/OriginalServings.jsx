import React from "react"


export default function OriginalServings({ originalServings, setOriginalServings}) {
    return (
        <input 
        value={originalServings}
        onKeyDown={(e) => {
            if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
            e.preventDefault();
            }
        }}
        onChange={(e) => setOriginalServings(e.target.value)}
        className="w-9 h-6 p-[0.25rem] rounded-md text-sm bg-[rgb(169,179,226)]"
        type="text"
        placeholder="1"/>
    );
}

