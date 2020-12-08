import React, { Component } from "react";
import { getArticleById, getArticleComments } from "../api";
import Comments from './CommentsDisplay'

class Article extends Component {
  state = { article: [], comments: [] };

  componentDidMount() {
    getArticleById(this.props["article_id"]).then((article) => {
      this.setState({ article });
    })
    getArticleComments(this.props["article_id"]).then((comments) => {
      this.setState({comments})
    });
  }

  render() {
    const {article, comments} = this.state;
    return (
      <div>
        <button>Go Back</button>
        <button>Next Article</button>
        <h1>Welcome to the Article page</h1>
        <p>There shouldn't be anything else on the page</p>
        <p>{JSON.stringify(article)}</p>
      <Comments />
      </div>
     
    );
  }
}

export default Article;
