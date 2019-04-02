import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: ['Test Recipe']
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
        this.setState ({
          recipes: data
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
        <h3>THIS IS A RENDER TEST</h3>
        <div>{this.state.recipes}</div>
      </div>
    )
  }

}

ReactDOM.render(<App></App>, document.getElementById('app'));

