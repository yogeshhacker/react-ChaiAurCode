import React from 'react'
import RecipeContext from './RecipeContext';

function GrandChild() {
  const recipe = React.useContext(RecipeContext);
  return <p>Grandchild got the recipe: {recipe}</p>;
}

export default GrandChild
