import React, { Component } from "react";
import { getArticles } from "../api";
import ArticlesFilter from "./ArticlesFilter";
import ArticlesList from "./ArticlesList";
import Loader from "./Loading";

class Articles extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    getArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  handleQuery = (queryKey, queryValue, order) => {
    getArticles(queryKey, queryValue, order).then((articles) => {
      this.setState({ articles });
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <div>
        <ArticlesFilter handleQuery={this.handleQuery} />
        <h2>Click on a title to expand the article</h2>
        <ArticlesList articles={articles} />
      </div>
    );
  }
}
export default Articles;
