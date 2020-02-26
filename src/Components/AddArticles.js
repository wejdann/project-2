import React, { Component } from "react";
import axios from "axios";
export default class AddArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      urlToImage: "",
      description: "",
      author: ""
    };
  }

  HandelChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  HandelChangeUrlToImage = event => {
    this.setState({ urlToImage: event.target.value });
  };

  HandelChangeDeesc = event => {
    this.setState({ description: event.target.value });
  };
  HandelChangeAuthor = event => {
    this.setState({ author: event.target.value });
  };

  onAddButtonClick = e => {
    e.preventDefault(); // sstop thefrom
    console.log("About to add an article");

    const newArticle = {
      title: this.state.title,
      urlToImage: this.state.urlToImage,
      description: this.state.description,
      author: this.state.author

    };

    this.props.addNewArticle(newArticle);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.HandelChangeTitle}
          placeholder="Please write the title here"
        />
        <hr />
        <textarea
          type="text"
          onChange={this.HandelChangeUrlToImage}
          placeholder="Please put the url of pic here"
        />{" "}
        <hr />
        <textarea
          type="text"
          onChange={this.HandelChangeDeesc}
          placeholder="Please write the description here"
        />{" "}
        <hr />
        <input
          type="text"
          onChange={this.HandelChangeAuthor}
          placeholder="Please write your name  here"
        />
        <div>
          <button onClick={this.onAddButtonClick}>Add New Article </button>
        </div>
      </div>
    );
  }
}
