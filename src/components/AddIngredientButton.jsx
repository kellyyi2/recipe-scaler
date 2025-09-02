import React from "react"
import PlusSign from '../images/plus-sign.svg'

export default function AddIngredientButton({ onClick }) {
            return (
                <button onClick={onClick} className="flex w-40 justify-center items-center gap-[10px] border-box p-2 rounded-lg text-sm bg-[rgb(253,174,104)]">
                    Add Ingredient                   
                    <img src={PlusSign} />
                </button>
            );
        }

