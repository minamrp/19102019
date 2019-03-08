import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      addClass: false
      //cuando haga click le quitamos la opacidad al texto y aparece
      //poner una transicion
    }
    this.handleClickbtn=this.handleClickbtn.bind(this);
  }

  handleClickbtn(){
      this.setState({addClass : !this.state.addClass
      })
  }
  render() {

    let boxClass =["data_home"]
    if(this.state.addClass){
      boxClass.push("appear");
    }

    return (
      <div className="App">
        <header className="App-header">
        </header>
          <div className="container">
            {/* <div className="video_container">
              <video width="100%" height="100%" autoPlay loop muted poster="images/may-oscar.jpg">
                <source src="src/images/may-oscar.mp4" type="video/mp4"></source>
                <source src="images/may-oscar.webm" type="video/webm"></source>
			        </video>
		        </div>  */}
          </div>

            <div className="image_home">
              <button className="btn_change" onClick={this.handleClickbtn}>
                    Click
              </button>
            </div>
          <div className={boxClass.join("")}>
            <h1 className="data_title">Boda de May & Oscar</h1>
            <div>19.10.2019</div>
            <div>tincidunt, tellus tempus malesuada parturient aenean vehicula duis faucibus. Tortor donec potenti bibendum velit senectus phasellus ac penatibus tincidunt ante</div>
          </div>


      </div>
          );
        }
      }
      
      export default App;
