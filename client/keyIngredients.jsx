import React from 'react';

const keyIngredients = (props) => {
  const keyArr = props.data.keyIngredients.split(' ');
  const keys = keyArr.map((key, index) => {
    return <div>{key}</div>
  })
  return (
    <div>
      {keys}
    </div>
  )
}

export default keyIngredients;