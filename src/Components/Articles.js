import React, { Component } from "react";

export default class Articles extends Component {
  render() {
    let allArticles = null;

    if (this.props.allArticles !== undefined) {
      allArticles = this.props.allArticles.map((element, index) => (
        <div key={index}>
          <h2>{element.title}</h2>
          <img src={element.urlToImage} />
          <p>{element.description}</p>
          <h3>{element.author}</h3>
        </div>
      ));
    }
    return (
      <div>
        <h1>{allArticles}</h1>
      </div>
    );
  }
}
