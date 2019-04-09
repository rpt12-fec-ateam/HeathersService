import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
import Key from './keyIngredients.jsx';
import Nut from './nutFacts.jsx';
import Dir from './directions.jsx';
import Photo from './photo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe: null
    }
  }

  getData() {
    $.ajax ({
      url: '/test',
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
      <div>
        
        <div>
          <div>{this.state.recipe
            ?
            <div><Photo data={this.state.recipe}/></div>
            :
            null}
          </div>  
        </div>

        <div>
        <h2>Key Ingredients</h2>
          <div>{this.state.recipe
            ?
            <div><Key data={this.state.recipe}/></div>
            :
            null}
          </div>  
        </div>

        <div>
          <h2>Ingredients & Nutrition Facts</h2>
          <div>{this.state.recipe
            ?
            <div><Nut data={this.state.recipe}/></div>
            :
            null}
          </div> 
        </div>

        <div>
          <div>{this.state.recipe
            ?
            <div><Dir data={this.state.recipe}/></div>
            :
            null}
          </div> 
        </div>
    
      </div>
    )
  }

}

ReactDOM.render(<App></App>, document.getElementById('app'));

