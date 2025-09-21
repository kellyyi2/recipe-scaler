import React from "react"


export default function NewServings({ newServings, setNewServings }) {
    return (
        <input 
        value={newServings}
        onChange={(e) => setNewServings(e.target.value)}
        onKeyDown={(e) => {
            if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
            e.preventDefault();
            }
        }}
        className="w-9 h-6 p-[0.25rem] rounded-md text-sm bg-[rgb(229,104,116)]"
        type="text"
        placeholder="1"/>
    );
}

