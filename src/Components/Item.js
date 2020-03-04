import React, { Component } from "react";
//this a child of Articles 
export default class Item extends Component {
  render() {
    return (
      //props the data and send it to map in articles page
      <div class="container">
       <div class=" card-columns-row ">
              <div class="card bg-light shadow">
              <h5 class="card-title" >{this.props.element.title}</h5>
                <img
                  class="card-img-top"
                  src={this.props.element.urlToImage}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p class="card-text text-center ">{this.props.element.description}</p>
                  <label>written by <h6>{this.props.element.author}</h6></label> <br/>
                  <br/>
                  <button  class="form-control input-lg " id="formGroupExampleInput" onClick={() => this.props.ReadArticleFunc(this.props.element)}>
              Read Later
              </button>
        </div>
        </div>
        </div>
        </div>
    );
  }
}
