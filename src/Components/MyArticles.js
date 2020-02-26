import React, { Component } from "react";

export default class MyArticles extends Component {
  EditArticles = (e, id) => {
    e.preventDefault(); // sstop thefrom
    console.log("edit b22");
    // const newTitle = {
    //   newTitle: e.target.value     }
    this.props.EditArticles(e, id);
  };
  render() {
    //     DeleteArticles= (e)=>{
    // console.log("remove")
    //         this.props.Delete()
    //     }
    return (
      <div>
        <h1>
          {" "}
          <button onClick={() => this.props.ClearAllArticles()}>
            Clear All
          </button>
        </h1>
        <h2>
          {" "}
          <button>Clear</button>
        </h2>
        {this.props.ReadArticle_2.map((elem, index) => {
          return (
            <div>
              <h4>{elem.title}</h4>
              <img src={elem.urlToImage} />
              <p>{elem.description}</p>
              <h6>{elem.author}</h6>
              <button onClick={() => this.props.DeleteArticles()}>
                Delete
              </button>
              {/* <button  onClick={() => this.props.MarkeAsComplete()}>
               Complete
              </button> */}
              <button onClick={this.EditArticles}>Edit</button>
              <input
                type="text"
                placeholder="You can Edit the title"
                value={this.props.newTitle}
                onChange={e => this.EditArticles(e, index)}
              />
              <input
                type="checkbox"
                checked={this.props.CheckMe}
                onChange={this.handleCheck}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
