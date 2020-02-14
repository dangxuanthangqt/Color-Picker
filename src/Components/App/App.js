
import React, { Component } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import Change from '../ChangeSize/Change';
import Result from '../Result/Result';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorDefault: "red",
      sizeDefault: 12
    }
  }
  changeSize = (value) =>{
    if(this.state.sizeDefault + value >= 8 && this.state.sizeDefault +value <=36){
      this.setState({
        sizeDefault: this.state.sizeDefault + value
      })
    }
  }
  reset=()=>{
    this.setState({
      colorDefault: "red",
      sizeDefault: 12
    })
  }
  changeColor = (color) => {
    this.setState({ colorDefault: color })
  }
  render() {
    console.log(this.state.colorDefault)
    return (
      <div className="container mt-5 ">
        <div className="row col-md-12">
          <ColorPicker color={this.state.colorDefault} changeColor={this.changeColor}></ColorPicker>
          <Change reset={this.reset} changeSize={(value)=>{this.changeSize(value)}} size={this.state.sizeDefault}></Change>
        </div>
        <div className="row col-md-12">
          <Result color={this.state.colorDefault} size={this.state.sizeDefault}></Result>
        </div>


      </div>
    );
  }
}

export default App;





