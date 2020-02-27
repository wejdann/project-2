import React, { Component } from "react";
export default class ReadingList extends Component {
  //by this function user can edit the title of article in this page
  EditArticles = (e, id) => {
    e.preventDefault();
    this.props.EditArticles(e, id);
  };
  render() {
    return (
      //here a map to accses to element  
      ////here in ReadingList user can see the article that marked as  (read later)
/// user can clear all Articles and delete one article
      <div>
        <h1>
          <button class="btn btn-secondary" onClick={() => this.props.ClearAllArticles()}>
            Clear All
          </button>
        </h1>
        {this.props.ReadArticle_2.map((elem, index) => {
          return (
            <div class=" card-group">
              <div class="card bg-light shadow">
              <h5 class="card-title" >{elem.title}</h5>
                <img
                  class="card-img-top"
                  src={elem.urlToImage}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p class="card-text text-center ">{elem.description}</p>
                  <label>written by <h6>{elem.author}</h6></label> <br/>
                  <button  class="btn btn-secondary" onClick={() => this.props.DeleteArticles()}>
                    Delete
                  </button>
                  <br/>
                  <label for="formGroupExampleInput">Rename Title :</label>
        <br />
              <input
                type="text" class="form-control input-lg " id="formGroupExampleInput"
                placeholder="Write the new title"
                value={this.props.newTitle}
                onChange={e => this.EditArticles(e, index)}
              />
              
          
              </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
