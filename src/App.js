// import the react
import React, { Component } from "react";
//import the Menue 
import Menue from "./Components/Menue";
//import the axios to fetch the data from API  
import axios from "axios";
// create a Component App
export default class App extends Component {
  constructor(props) {
    super(props);
    // add three states to use it 
    this.state = {
      articles: [],
      Use_articles: [],
      newTitle: "",
    };
  }
  //fetch the from API using axios
  componentWillMount() {
    axios({
      method: "get",
      url:
        "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-10&sortBy=publishedAt&apiKey=136430c128bc40ffb3148df6ed72b2a9"
    })
      .then(res => {
        this.setState({
          articles: res.data.articles
        });
      })
      .catch(err => {
        // console.log("err", err);
      });
  }
  // this function for button read later 
  ReadLater = element => {
    this.setState({
      Use_articles: [element, ...this.state.Use_articles]
    });
  };
 // this function for button Delete article one element in (readinglist) page
  HandelToDelete = elem => {
    const Use_articles = [...this.state.Use_articles];
    Use_articles.splice(elem, 1);
    this.setState({
      Use_articles
    });
  };
 // this function to button Edit the title of article in (readinglist) page
  HandelToEdit = (e, id) => {
    const articleClone = Object.assign({}, this.state.Use_articles[id]);

    articleClone.title = e.target.value;

    const artclesCopy = [...this.state.Use_articles];

    artclesCopy.splice(id, 1, articleClone);

    this.setState({
      Use_articles: artclesCopy
    });
  };
   // this function for button Clear All articles in (readinglist) page
  HandelToClearAll = () => {
    alert("Are you sure to delete all");
    let Use_articles = [...this.state.Use_articles];
    Use_articles = [];
    this.setState({
      Use_articles
    });
  };
   // this function for button add new article in (AddArticles) page
  addNewArticle = NewArticle => {
    this.setState({
      articles: [...this.state.articles, NewArticle]
    });
  };

  render() {
    return (
      //here send all the functions by call the Component (Menue)
      <div>
        <Menue
          allArticles={this.state.articles}
          ReadArticleFunc={this.ReadLater}
          ReadArticle_2={this.state.Use_articles}
          DeleteArticles={this.HandelToDelete}
          EditArticles={this.HandelToEdit}
          ClearAllArticles={this.HandelToClearAll}
          addNewArticle={this.addNewArticle}
        />
      </div>
    );
  }
}
