import React, { Component } from "react";
import Menue from "./Components/Menue";
import Articles from './Components/Articles';
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url:
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-10&sortBy=publishedAt&apiKey=136430c128bc40ffb3148df6ed72b2a9"
    })
      .then(res => {
        console.log(res);
        this.setState({
articles : res.data.articles
        })
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  render() {
    // const allArticles = this.state.articles.map((element, index) => (
    //   <div key={index}>
    //     <h2>{element.title}</h2>
    //     <img src={element.urlToImage} />
    //     <p>{element.description}</p>
    //     <h3>{element.author}</h3>
    //   </div>
    // ));
    return (
      <div>
        <Menue />
        <Articles allArticles={this.state.articles}/>
      </div>
    );
  }
}
