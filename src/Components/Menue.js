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
          <Link to="/contact"> Contact Us </Link>{" "}
          <div>
            <Route
              exact
              path="/"
              component={() => (
                <Articles
                  allArticles={this.props.allArticles}
                  readLaterFunc={this.props.readLaterFunc}
                />
              )}
            />{" "}
            <Route
              path="/MyArticles"
              component={() => (
                <MyArticles readLater_2={this.props.readLater_2} />
              )}
            />{" "}
            <Route path="/AddArticles" component={AddArticles} />{" "}
            <Route path="/contact" component={Contact} />{" "}
          </div>
        </Router>
      </div>
    );
  }
}
