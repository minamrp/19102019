import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <div className="container">
            <div className="image_home">
              <button className="btn_change">
                Click
              </button>
            </div>
            <div className="data_home">
              <h1 className="data_title">Boda de May & Oscar</h1>
              <div>19.10.2019</div>
              <div>tincidunt, tellus tempus malesuada parturient aenean vehicula duis faucibus. Tortor donec potenti bibendum velit senectus phasellus ac penatibus tincidunt ante</div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
