import React, { Component } from "react";
import Menue from "./Components/Menue";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      readLaterArt: []
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
  readLater = i => {
    console.log("uuu", i);
    this.setState({
      readLaterArt: [i]
    });
    // this.setState(element=>{
    //   element =[i, ...this.state.element]
    //   console.log("uuu", i);

    // })
    // this.element =[i, ...state.element]
    // this.setState({
    //   element: this.state.i
    //   this.element :[i, ...state.element]

    // });
  };
  render() {
    return (
      <div>
        <Menue
          allArticles={this.state.articles}
          readLaterFunc={this.readLater}
          readLater_2={this.state.readLaterArt}
        />
      </div>
    );
  }
}
