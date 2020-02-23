import React, { Component } from "react";
import Menue from './Components/Menue';
import Articles from './Components/Articles';
import AddArticles from "./Components/AddArticles";
import MyArticles from "./Components/MyArticles";
import Contact from "./Components/Contact";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url:
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-01-23&sortBy=publishedAt&apiKey=136430c128bc40ffb3148df6ed72b2a9"
    })
      .then(res => {
        this.setState({
          articles: res.data.articles
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
         
        <h1> app work </h1>
        <Menue/>
      

      </div>
    );
  }
}
