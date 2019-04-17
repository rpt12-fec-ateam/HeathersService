import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 300px;
  width: 300px;
  float: left;
  margin-top: 0px;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;


const recipePhoto = (props) => {
  const url = props.data.photoUrl;
  console.log('image url ====', url)

  return (
    <div>
      <Box>
      <div>
      <Img src={url}>
      {/* <img src={url}/> */}
      </Img>
      </div>
      </Box>
    </div>
   
  )
}

export default recipePhoto;