import React, { Component } from 'react';

export class Change extends Component {
    render() {
        return (
            <div className="col-md-4 " >
                <div className="card ">
                    <div className="card-header progress-bar">
                        FontSize: {this.props.size}
                    </div>
                    <div className="card-body row justify-content-around ">
                        <button style={{ height: 50 }} type="button" className="btn btn-primary" onClick={()=>{this.props.changeSize(2)}}>Tăng</button>
                        <button style={{ height: 50 }} type="button" className="btn btn-primary" onClick={()=>{this.props.changeSize(-2)}}>Giảm</button>
                        <button style={{ height: 50 }} type="button" className="btn btn-primary" onClick={this.props.reset}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Change;

