import React, { Component } from "react";
import Menue from "./Components/Menue";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      Add_articles: [],
      checkComplet :[]
    };
    
  }
  componentWillMount() {
    axios({
      method: "get",
      url:
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-10&sortBy=publishedAt&apiKey=136430c128bc40ffb3148df6ed72b2a9"
    })
      .then(res => {
        console.log(res);
        this.setState({
          articles: res.data.articles
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }
  AddArticle = element => {
    // console.log("uuu", i);
    this.setState({
      Add_articles: [ element,...this.state.Add_articles]
    });
  };

  HandelToDelete = (elem) => {
    const Add_articles = [...this.state.Add_articles];
    Add_articles.splice(elem,1);
    this.setState({
      Add_articles
    })
  };

  HandelToClearAll = ()=> {
    let Add_articles = [...this.state.Add_articles];
    console.log("all")
    Add_articles=[]
    this.setState({
      Add_articles
    });}

HandelAsComplete =()=>{
console.log("ascomplete")
this.setState({
  checkComplet: [...this.state.checkComplet]
});
    }
  
  render() {
    return (
      <div>
        <Menue
          allArticles={this.state.articles}
          AddArticleFunc={this.AddArticle}
          AddArticle_2={this.state.Add_articles}
          DeleteArticles={this.HandelToDelete}
          ClearAllArticles={this.HandelToClearAll}
          MarkeAsComplete={this.HandelAsComplete}
          
        />
      </div>
    );
  }
}
