import React, { Component } from 'react'
import Articles from './Articles';
import MyArticles from "./MyArticles";
import AddArticles from "./AddArticles";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Menue extends Component {
    render() {
        return (
            <div>
                 <Router>
          <Link to="/"> Home </Link> ||{" "}
          <Link to="/MyArticles"> My Articles </Link> ||{" "}
          <Link to="/AddArticles"> Add Articles </Link> ||{" "}
          <Link to="/contact"> Contact Us </Link>{" "}
          <div>
            <Route exact path="/" component={Articles} />{" "}
            <Route path="/MyArticles" component={MyArticles} />{" "}
            <Route path="/AddArticles" component={AddArticles} />{" "}
            <Route path="/contact" component={Contact} />{" "}
          </div>
        </Router>
            </div>
        )
    }
}
