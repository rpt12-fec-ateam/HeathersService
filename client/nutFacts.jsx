import React from 'react';
import styled from 'styled-components';

const Titles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Heebo:800');
  font-family: 'Heebo', sans-serif;
  font-size: 12px;
  font-weight: normal;
`;

const Block = styled.div`
  max-width: 400px;
  word-wrap: break-word;
  margin-left: 45%;
`;

const nutFacts = (props) => {
  const ingsArr = props.data.ingredients.split(' ');
  const ings = ingsArr.join(', ');
  const facts = props.data.nutritionFacts;
  return (
    <div>
      <Block>
      <div>
        <Titles>
        <div>Ingredients</div>
        </Titles>
        <div>{ings}</div>
      </div>
      </Block>
      <Block>
      <div>
      <Titles>
        <div>Nutrition Facts</div>
        </Titles>
        <div>{facts}</div>
      </div>
      </Block>
    </div>
  )
}

export default nutFacts;