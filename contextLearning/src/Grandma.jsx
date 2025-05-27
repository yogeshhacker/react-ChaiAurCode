import React from 'react'
import Parent from './Parent';
import { Recipe } from './RecipeContext';

function Grandma() {
  return (
    <Recipe value="Secret Cookie Recipe 🍪">
      <Parent/>
    </Recipe>
  );
}

export default Grandma
