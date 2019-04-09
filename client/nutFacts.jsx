import React from 'react';

const nutFacts = (props) => {
  const ingsArr = props.data.ingredients.split(' ');
  const ings = ingsArr.join(', ');
  const facts = props.data.nutritionFacts;
  return (
    <div>
      <div>
        <h3>Ingredients</h3>
        <div>{ings}</div>
      </div>
      <div>
        <h3>Nutrition Facts</h3>
        <div>{facts}</div>
      </div>
    </div>
  )
}

export default nutFacts;