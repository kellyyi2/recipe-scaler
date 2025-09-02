import React, { useState } from "react"
import IngredientInputForm from "./IngredientInputForm";

export default function IngredientDisplay({ showForm, setShowForm }) {

    return (
        <div className="flex flex-col w-full h-full bg-[rgb(174,100,100)]">
            {showForm && (
                <IngredientInputForm setShowForm={setShowForm} />
            )}
        </div>
    );
}


