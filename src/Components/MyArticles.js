import React, { Component } from "react";

export default class MyArticles extends Component {
  render() {
    return (
      <div>
        {this.props.readLater_2.map(elem => {
          //   return <p>{elem.title}</p>;
          return (
            <div>
              <h4>{elem.title}</h4>
              <img src={elem.urlToImage} />
              <p>{elem.description}</p>
              <h6>{elem.author}</h6>
            </div>
          );
        })}
      </div>
    );
  }
}
