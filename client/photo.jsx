import React from 'react';

const recipePhoto = (props) => {
  const url = props.data.photoUrl;
  console.log('image url ====', url)

  return (
    <div>
      <div><img src={url}/></div>
    </div>
  )
}

export default recipePhoto;