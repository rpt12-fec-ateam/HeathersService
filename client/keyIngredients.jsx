import React from 'react';
import styled from 'styled-components';

const HalfPos = styled.div`
  margin-left: 45%;
`;

const Bold = styled.div`
  font-weight:bold;
`;

const keyIngredients = (props) => {
  const filler = props.data.nutritionFacts;
  const keyArr = props.data.keyIngredients.split(' ');
  const keys = keyArr.map((key, index) => {
    return <div><Bold>{key}</Bold><div>{filler}</div></div>
  })
  return (
      <HalfPos>{keys}</HalfPos>
  )
}

export default keyIngredients;