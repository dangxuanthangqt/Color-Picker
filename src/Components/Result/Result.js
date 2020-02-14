import React, { Component } from 'react';

export class Result extends Component {
    render() {
        var result = {
            fontWeight:"bold",
            color : this.props.color,
            fontSize: this.props.size

        }
        return (
            <div className="col-md-12 mt-5">
                <div className="card">
                    <div className="card-header progress-bar">
                        Color: {this.props.color} - FontSize: {this.props.size}
                    </div>
                    <div className="card-body row justify-content-around">
                        <p style={result}>ĐÂY LÀ KÊT QUẢ</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;
