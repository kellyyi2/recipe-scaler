import React, { useState } from "react";

export class RecipeScaler {
    constructor(originalServings, newServings, ingredients) {
        this.originalServings = originalServings;
        this.newServings = newServings;
        this.ingredients = ingredients;
    }

    scale() {
        return this.ingredients.map(ing => ({
            ...ing, numUnit: (ing.numUnit / this.originalServings) * this.newServings
        }));
    }
}