import React, { Component } from "react";
import Articles from "./Articles";
import ReadingList from "./ReadingList";
import AddArticles from "./AddArticles";
import AboutUs from "./AboutUs";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//menue is link all Component with Component exapt the Item Component
export default class Menue extends Component {
  render() {
    return (
      //here props all the function by the menue page to send it
      <div>
        <Router>
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark style=background-color: #e3f2fd;">
              <div class="navbar navbar-inverese">
                <a class="navbar-brand" href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Bitcoin.png/220px-Bitcoin.png" />
                </a>{" "}
              </div>
              <Link class="navbar-brand" to="/">
                {" "}
                Articles{" "}
              </Link>
              <Link class="navbar-brand" to="/ReadingList">
                {" "}
                Reading List{" "}
              </Link>
              <Link class="navbar-brand" to="/AddArticles">
                {" "}
                Add Articles{" "}
              </Link>
              <Link class="navbar-brand" to="/AboutUs">
                {" "}
                About Us{" "}
              </Link>
            </nav>
          </div>

          <div>
            <Route
              exact
              path="/"
              component={() => (
                <Articles
                  allArticles={this.props.allArticles}
                  ReadArticleFunc={this.props.ReadArticleFunc}
                />
              )}
            />
            <Route
              exact
              path="/project-2"
              component={() => (
                <Articles
                  allArticles={this.props.allArticles}
                  ReadArticleFunc={this.props.ReadArticleFunc}
                />
              )}
            />
            <Route
              path="/ReadingList"
              render={() => (
                <ReadingList
                  ReadArticle_2={this.props.ReadArticle_2}
                  DeleteArticles={this.props.DeleteArticles}
                  EditArticles={this.props.EditArticles}
                  ClearAllArticles={this.props.ClearAllArticles}
                />
              )}
            />
            <Route
              path="/AddArticles"
              component={() => (
                <AddArticles addNewArticle={this.props.addNewArticle} />
              )}
            />
            <Route path="/AboutUs" component={AboutUs} />
          </div>
        </Router>
      </div>
    );
  }
}
