import React from 'react';
import styled from 'styled-components';

const HalfPos = styled.div`
  margin-left: 45%;
`;
const keyIngredients = (props) => {
  const filler = props.data.nutritionFacts;
  const keyArr = props.data.keyIngredients.split(' ');
  const keys = keyArr.map((key, index) => {
    return <div><div>{key}</div><div>{filler}</div></div>
  })
  return (
      <HalfPos>{keys}</HalfPos>
  )
}

export default keyIngredients;