import React, { Component } from "react";
import Menue from "./Components/Menue";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      Use_articles: [],
      newTitle: "",
      CheckMe: true
      // checkComplet :[]
    };
  }
  componentWillMount() {
    axios({
      method: "get",
      url:
        "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-10&sortBy=publishedAt&apiKey=136430c128bc40ffb3148df6ed72b2a9"
    })
      .then(res => {
        // console.log(res);
        this.setState({
          articles: res.data.articles
        });
      })
      .catch(err => {
        // console.log("err", err);
      });
  }
  ReadLater = element => {
    // console.log("uuu", i);
    this.setState({
      Use_articles: [element, ...this.state.Use_articles]
    });
  };

  HandelToDelete = elem => {
    const Use_articles = [...this.state.Use_articles];
    Use_articles.splice(elem, 1);
    this.setState({
      Use_articles
    });
  };
  HandelToEdit = (e, id) => {
    console.log("edit me");
    // const title = this.props.elem
    // // const newTitle = this.props.title
    // console.log("to edit", this.state.Use_articles[id]);
    // const updatedArticle = Object.assign({}, this.state.Use_articles[id])
    // this.setState({
    //   Use_articles:
    // })
    //     this.setState({
    // // Use_articles: [element, ...this.state.Use_articles],
    //       newTitle: e.target.value

    //     });
  };

  HandelToClearAll = () => {
    alert("Are you sure to delete all");
    let Use_articles = [...this.state.Use_articles];
    Use_articles = [];
    this.setState({
      Use_articles

      // message : "No articles in your list ,Add more"
    });
  };
  handleCheck = event => {
    this.setState({ CheckMe: event.target.checked });
  };
  addNewArticle = NewArticle => {
    this.setState({
      articles: [...this.state.articles, NewArticle]
    });
  };

  // HandelAsComplete =()=>{
  // console.log("ascomplete")
  // this.setState({
  //   checkComplet: [...this.state.checkComplet]
  // });
  //     }

  render() {
    return (
      <div>
        <Menue
          allArticles={this.state.articles}
          ReadArticleFunc={this.ReadLater}
          ReadArticle_2={this.state.Use_articles}
          DeleteArticles={this.HandelToDelete}
          EditArticles={this.HandelToEdit}
          ClearAllArticles={this.HandelToClearAll}
          // MarkeAsComplete={this.HandelAsComplete}
          addNewArticle={this.addNewArticle}
        />
      </div>
    );
  }
}
