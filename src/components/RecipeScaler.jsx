import React, { useState } from "react";

export class RecipeScaler {
    constructor(originalServings, newServings, ingredients) {
        this.originalServings = originalServings;
        this.newServings = newServings;
        this.ingredients = ingredients;
    }

    scale() {
        if (Number(this.originalServings) === 0) return this.ingredients;
        return this.ingredients.map(ing => ({
            ...ing, numUnit: (ing.numUnit / Number(this.originalServings)) * Number(this.newServings)
        }));
    }
}