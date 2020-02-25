import React, { Component } from "react";
import Articles from "./Articles";
import MyArticles from "./MyArticles";
import AddArticles from "./AddArticles";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Menue extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/"> Articles </Link> ||{" "}
          <Link to="/MyArticles"> My Articles </Link> ||{" "}
          <Link to="/AddArticles"> Add Articles </Link> ||{" "}
          <Link to="/contact"> Contact Us </Link>
          <div>
            <Route
              exact
              path="/"
              component={() => (
                <Articles
                  allArticles={this.props.allArticles}
                  AddArticleFunc={this.props.AddArticleFunc}
                />
              )}
            />
            <Route
              path="/MyArticles"
              component={() => (
                <MyArticles 
                AddArticle_2={this.props.AddArticle_2} 
                DeleteArticles={this.props.DeleteArticles}     
                ClearAllArticles={this.props.ClearAllArticles}
                MarkeAsComplete={this.props.MarkeAsComplete}
                />
              )}
            />
            <Route path="/AddArticles" component={AddArticles} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}
