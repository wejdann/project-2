import React, { Component } from "react";
import Item from "./Item";

export default class Articles extends Component {
  render() {
    //here is a map which acsees to all elemen in allArticles
    let allArticles = null;
    if (this.props.allArticles !== undefined) {
      allArticles = this.props.allArticles.map((element, index) => (
        <Item
          key={index}
          element={element}
          ReadArticleFunc={this.props.ReadArticleFunc}
        />
      ));
    }
    return (
      //display
      <div>
      
        <h1>{allArticles}</h1>
      </div>
    );
  }
}
