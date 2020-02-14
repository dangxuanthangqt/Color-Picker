import React, { Component } from 'react';
import Item from './Item';

export class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state={
            colors:[ "red", "blue","green", "gray","black"]
        }
    }
    
    render() {
       
        return (
            <div className="col-md-8">
                <div className="card ">
                    <div className="card-header progress-bar">
                        ColorPicker
                    </div>
                    <div className="card-body row justify-content-around">
                     {
                        this.state.colors.map((element, index)=>{
                           return  (<Item changeColorP={this.props.changeColor} active={element === this.props.color ? "active" : ""} key={index} color={element}></Item>)
                         })
                     }
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
