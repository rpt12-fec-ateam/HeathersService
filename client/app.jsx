import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
import Key from './keyIngredients.jsx';
import Nut from './nutFacts.jsx';
import Dir from './directions.jsx';
import Photo from './photo.jsx';
import styled from 'styled-components';

const Block = styled.div`
  font-family: Sailec, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: lighter;
`;

const ImageStyle = styled.img`
  width: 100%;
  height: auto;
`;

const Titles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Heebo:800');
  font-family: 'Heebo', sans-serif;
  font-size: 16px;
  font-weight: normal;
  margin-top: 30px;
`;

const TitlesTop = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Heebo:800');
  font-family: 'Heebo', sans-serif;
  font-size: 16px;
  font-weight: normal;
  margin-top: 50px;
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



class Heather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe: null,
      keyOpen: false,
      ingsOpen: false,
      dirOpen1: false,
      dirOpen2: false
    }
    this.handleKeyClick = this.handleKeyClick.bind(this);
    this.handleIngClick = this.handleIngClick.bind(this);
    this.handleDir1Click = this.handleDir1Click.bind(this);
    this.handleDir2Click = this.handleDir2Click.bind(this);
  }

  handleKeyClick(e) {
    e.preventDefault();
    console.log('Key Ingredients was clicked!', this);
    this.setState ({
      keyOpen: !this.state.keyOpen,
      ingsOpen: false,
      dirOpen1: false,
      dirOpen2: false
    });
  }

  handleIngClick(e) {
    e.preventDefault();
    this.setState ({
      keyOpen: false,
      ingsOpen: !this.state.ingsOpen,
      dirOpen1: false,
      dirOpen2: false
    });
  }

  handleDir1Click(e) {
    e.preventDefault();
    this.setState ({
      keyOpen: false,
      ingsOpen: false,
      dirOpen1: !this.state.dirOpen1,
      dirOpen2: false
    });
  }

  handleDir2Click(e) {
    e.preventDefault();
    this.setState ({
      dirOpen2: !this.state.dirOpen2,
      keyOpen: false,
      ingsOpen: false,
      dirOpen1: false,
    });
  }

  getData() {
    $.ajax ({
      url: '/ingredients',
      method: 'GET',
      error: (err) => {
        if (err) {
          console.log('Error from getData in client: -->', err);
        }
      },
      success: (data) => {
        console.log('results from getData in client: --> ', data);
        var index= _.random(data.length - 1);
        console.log('index', index)
        console.log('item', data[index])
        this.setState ({
          recipes: data,
          recipe: data[index]
        });
      }
    });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="row blend-ingredients">
        <Block>
        <div>
          <div>{this.state.recipe
            ?
            <div><Photo data={this.state.recipe}/></div>
            :
            null}
          </div>  
        </div>

        <div>
        <TitlesTop>
        <HalfPos onClick={this.handleKeyClick}>Key Ingredients -</HalfPos>
        </TitlesTop>
          <div>{this.state.recipe
            ?
            <HalfPos className={this.state.keyOpen ? 'open' : 'closed'}><Key data={this.state.recipe}/></HalfPos>
            :
            null}
          </div>  
        </div>

        <div>
          <Titles>
          <HalfPos onClick={this.handleIngClick}>Ingredients & Nutrition Facts -</HalfPos>
          </Titles>
          <HalfPos className={this.state.ingsOpen ? 'open' : 'closed'}>{this.state.recipe
            ?
            <div ><Nut data={this.state.recipe}/></div>
            :
            null}
          </HalfPos> 
        </div>

        <div>
          <div>{this.state.recipe
            ?
            <div><Dir clickFunc1={this.handleDir1Click} clickFunc2={this.handleDir2Click} data={this.state.recipe} one={this.state.dirOpen1} two={this.state.dirOpen2}/></div>
            :
            null}
          </div> 
        </div>
        </Block>
      </div>
    )
  }
  
};

ReactDOM.render(<Heather></Heather>, document.getElementById('heather'));

