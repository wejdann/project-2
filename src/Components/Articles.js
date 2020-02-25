import React, { Component } from "react";
import Item from "./Item";

export default class Articles extends Component {
  render() {
    let allArticles = null;
    if (this.props.allArticles !== undefined) {
      allArticles = this.props.allArticles.map((element, index) => (
        <Item
          key={index}
          element={element}
          AddArticleFunc={this.props.AddArticleFunc}
        />
      ));
    }
    return (
      <div>
        <h1>{allArticles}</h1>
      </div>
    );
  }
}
