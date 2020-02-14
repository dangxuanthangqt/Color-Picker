import React, { Component } from 'react';
import '../../index.css'
export class Item extends Component {
    onClick = ()=>{
        this.props.changeColorP(this.props.color)
    }
    render() {
        var className = "rounded col-md-2 "+this.props.active
        return (
            
                <button onClick={this.onClick} className={className} style={{ backgroundColor: this.props.color, height: 50 }} >

                </button>
            


        );
    }
}

export default Item;
