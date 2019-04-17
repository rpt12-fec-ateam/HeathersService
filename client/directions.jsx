import React from 'react';
import styled from 'styled-components';

var heatSoup = 'Step 1 \n' + 'Fill cup with milk of choice ¾ of the way to the top. Stir. \n' + 'Step 2 \n' +  'Heat in a saucepan over stovetop or microwave 3 - 6 minutes - stirring halfway through heating time until desired consistency is reached. \n' + 'Step 3 \n' + 'Stir before eating and enjoy. Add lid back to cup and take to go!';
var soak = 'Step 1 \n' + 'Fill cup with milk of choice ¾ of the way to the top. Stir. \n' + 'Step 2 \n' +  'Put lid back on cup and soak in the fridge overnight. \n' + 'Step 3 \n' + 'Stir before eating and enjoy cold! Add lid back to cup and take to go!';
var blend = 'Step 1 \n' + 'Choose your liquid base (milk, almond milk, coconut water, water, etc). \n' + 'Step 2 \n' +  'Fill cup to top with liquid and toss it all into a blender. \n' + 'Step 3 \n' + 'Blend and pour everything back into your cup - you\'re set!';
var heatBowl = 'Step 1 \n' + 'Empty cup into a nonstick pan or microwave-safe bowl. \n' + 'Step 2 \n' +  'For stovetop, add 1/2 cup of water and stir over medium-high heat for 4-6 minutes, until water has been absorbed and texture is thick and creamy (like grits). For microwave, add 1/2 cup of water and heat for 4 minutes. \n' + 'Step 3 \n' + 'Return to cup or transfer to your favorite bowl!';
var lattePrep = 'Remove one latte pod, run under hot water for 10 seconds, then peel off foil seal. \n' + 'HOT LATTE: \n' + 'Pop contents into saucepan (for stovetop) or microwave-safe mug (for microwave). Add 10oz liquid (we recommend your go-to milk) and heat for 1–2 minutes, or until steaming. Stir well to combine.  \n' + 'ICED LATTE:  \n' +  'Pop contents into blender, add 10oz liquid (we recommend your go-to milk), and blend for 10 seconds, or until frothy. Pour over ice. \n' + 'Optional: \n' + 'Add a spoonful of your favorite sweetener to taste.';


const Titles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Heebo:800');
  font-family: 'Heebo', sans-serif;
  font-size: 16px;
  font-weight: normal;
  margin-top: 30px;
`;

const Block = styled.div`
  max-width: 400px;
  margin-left: 45%;
  word-wrap: break-word
`;

const HalfPos = styled.div`
  margin-left: 45%;

  &.open {
    height: auto;
    margin-left: 0%;
  }

  &.closed {
    height: 0;
    overflow: hidden;
  }
`;


const directions = (props) => {
  const cat = props.data.category;
  const click1 = props.clickFunc1;
  const click2 = props.clickFunc2;
  const one = props.one; 
  const two = props.two;
  
  if (cat === 'soup' || cat === 'chilledBlendedSoup') {
    return (
      <div>
        <Block>
        <div>
          <Titles onClick={click1}>How To Heat</Titles>
        </div>
        <HalfPos className={one ? 'open' : 'closed'}>{heatSoup.split('\n').map((line, i) => {
            return <div>{line}</div>
        })}
        </HalfPos>
        <div>
          <Titles onClick={click2}>How To Soak -</Titles>
        </div>
        <HalfPos className={two ? 'open' : 'closed'}>{soak.split('\n').map((line, i) => {
            return <div>{line}</div>
        })}
        </HalfPos>
        </Block>
      </div>
    )
  } else if (cat === 'smoothie') {
    return (
        <div>
          <Block>
          <div>
            <Titles onClick={click1}>How To Blend -</Titles>
          </div>
          <HalfPos className={one ? 'open' : 'closed'}>{blend.split('\n').map((line, i) => {
              return <div>{line}</div>
          })}
          </HalfPos>
          </Block>
        </div>
    )
  } else if (cat === 'harvestBowl') {
    return (
        <div>
          <Block>
          <div>
            <Titles onClick={click1}>How To Heat -</Titles>
          </div>
          <HalfPos className={one ? 'open' : 'closed'}>{heatBowl.split('\n').map((line, i) => {
              return <div>{line}</div>
          })}
          </HalfPos>
          </Block>
        </div>
    )
  } else if (cat === 'latte') {
    return (
        <div>
          <Block>
          <div>
            <Titles onClick={click1}>How To Prepare -</Titles>
          </div>
          <HalfPos className={one ? 'open' : 'closed'}>{lattePrep.split('\n').map((line, i) => {
              return <div>{line}</div>
          })}
          </HalfPos>
          </Block>
        </div>
    )  
  } else if (cat === 'chiaBowl' || cat === 'oatBowl') {
    return (
        <div>
          <Block>
          <div>
            <Titles onClick={click1}>How To Heat -</Titles>
          </div>
          <HalfPos className={one ? 'open' : 'closed'}>{heatBowl.split('\n').map((line, i) => {
              return <div>{line}</div>
          })}
          </HalfPos>
          <div>
            <Titles onClick={click2}>How To Soak -</Titles>
          </div>
          <HalfPos className={two ? 'open' : 'closed'}>{soak.split('\n').map((line, i) => {
              return <div>{line}</div>
          })}
          </HalfPos>
          </Block>
        </div>
      )
  } else {
      return (
        <div>
          <Block>
          <div>
            <Titles onClick={click1}>How To Heat -</Titles>
          </div>
    
          <HalfPos className={one ? 'open' : 'closed'}>{heatBowl.split('\n').map((line, i) => {
              return <div>{line}</div>
          })}
          </HalfPos>
   
          </Block>
        </div>
    )  
  }
}

export default directions;