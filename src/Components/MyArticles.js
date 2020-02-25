import React, { Component } from "react";

export default class MyArticles extends Component {
  render() {
    //     DeleteArticles= (e)=>{
    // console.log("remove")
    //         this.props.Delete()
    //     }
    return (
      <div>
            <h1> <button onClick={() => this.props.ClearAllArticles()}>
                 Clear All
               </button></h1>
        {this.props.AddArticle_2.map(elem => {
          return (
            <div>
              <h4>{elem.title}</h4>
              <img src={elem.urlToImage} />
              <p>{elem.description}</p>
              <h6>{elem.author}</h6>
              <button onClick={() => this.props.DeleteArticles()}>
                Delete
              </button>
              <button  onClick={() => this.props.MarkeAsComplete()}>
               Complete
              </button>
              <button>Edit</button>
             
            </div>
          );
        })}
      
      </div>
    );
  }
}
