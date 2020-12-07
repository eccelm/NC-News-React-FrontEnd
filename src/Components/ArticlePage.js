import React, { Component } from "react";
import { getArticleById } from "../api";

class Article extends Component {
  state = { article: [], comments: [] };

  componentDidMount() {
    console.log(this.props);
    console.log("Im in!");
    getArticleById(33).then((article) => {
      this.setState({ article });
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Article page</h1>
        <p>There shouldn't be anythingelse on the page</p>
      </div>
    );
  }
}

export default Article;
