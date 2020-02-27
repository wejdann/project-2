import React, { Component } from "react";
export default class AddArticles extends Component {
  constructor(props) {
    super(props);
    // let all the elements in a obj as empty 
    this.state = {
      title: "",
      urlToImage: "",
      description: "",
      author: ""
    };
  }
// function to take the value of (title)from input 
  HandelChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  // function to take the value of (urlToImage)from input 
  HandelChangeUrlToImage = event => {
    this.setState({ urlToImage: event.target.value });
  };
  // function to take the value of (description)from input 
  HandelChangeDeesc = event => {
    this.setState({ description: event.target.value });
  };
    // function to take the value of (author)from input 
  HandelChangeAuthor = event => {
    this.setState({ author: event.target.value });
  };
// function onclick the button Add New Article to add Article
  onAddButtonClick = e => {
    e.preventDefault(); //stop form 
//obj of state element
    const newArticle = {
      title: this.state.title,
      urlToImage: this.state.urlToImage,
      description: this.state.description,
      author: this.state.author
    };
//props the function from App
    this.props.addNewArticle(newArticle);
    alert("successfully added to articles page");
  };

  render() {
    return (
      // here a form where a user writting  
      //here a label which have a fixed name
      //here input and textarea ,allow to user to write inside it
      // here a button to add a new article
      <form class="container">
      <div class="form-group">
        <br/>
        <label for="formGroupExampleInput">Article Title :</label>
        <br />
        <input
          type="text" class="form-control input-lg " id="formGroupExampleInput"
          onChange={this.HandelChangeTitle}
          placeholder="Please write the title here"
        />
        <br />
        <label for="formGroupExampleInput">Article Picture :</label>
        <br />
        <input
          type="text" class="form-control input-lg " id="formGroupExampleInput"
          onChange={this.HandelChangeUrlToImage}
          placeholder="Please put the url of pic here"
        />
        <br />
        <label for="formGroupExampleInput">Article Description :</label>
        <br />
        <textarea 
          type="text" class="form-control input-lg " id="formGroupExampleInput"
          onChange={this.HandelChangeDeesc}
          placeholder="Please write the description here"
        />
        <br />
        <label for="formGroupExampleInput">Author Name</label>
        <br />
        <input
          type="text" class="form-control input-lg " id="formGroupExampleInput"
          onChange={this.HandelChangeAuthor}
          placeholder="Please write your name  here"
        />
        <br />
        <div>
        <br />
          <button class="btn btn-secondary" onClick={this.onAddButtonClick}>Add New Article </button>
        </div>
       
      </div>
      </form>
    );
  }
}
