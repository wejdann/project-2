import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.element.title}</h4>
        <img src={this.props.element.urlToImage} />
        <p>{this.props.element.description}</p>
        <h6>{this.props.element.author}</h6>
        <button onClick={() => this.props.readLaterFunc(this.props.element)}>
          Read Later
        </button>
      </div>
    );
  }
}
