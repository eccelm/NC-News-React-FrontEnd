import React, { Component } from "react";
import {
  getArticleById,
  getArticleComments,
  postCommentToArticle,
} from "../api";
import { Link } from "@reach/router";
import Comments from "./CommentsDisplay";
import CommentAdder from "./CommentAdder";

class Article extends Component {
  state = { article: [], comments: [] };

  componentDidMount() {
    getArticleById(this.props["article_id"]).then((article) => {
      this.setState({ article });
    });
    getArticleComments(this.props["article_id"]).then((comments) => {
      this.setState({ comments });
    });
  }
  // need component did update to get the url to do something different

  handleNewComment = (article_id, commentContent) => {
    postCommentToArticle(article_id, commentContent).then((newComment) => {
      console.log(newComment);
      // eventually set state here?
      /*
      this.setState((currentState) => {
        return { article: currentState.article,
                comments: [...currentState.comments, newComment]
        }       
      })  */
    });
  };

  render() {
    const { article, comments } = this.state;

    return (
      <div>
        <div className="temp-div-to-remove">
          <Link to="/articles">
            <button>Go Back</button>
          </Link>
          <Link to={`/articles/${article["article_id"] + 1}`}>
            <button>Next Article - not changing page</button>
          </Link>

          <h1>Welcome to the Article page</h1>
          <p>Temporary to display keys{JSON.stringify(Object.keys(article))}</p>
        </div>
        <div className="article-grid-container">
          <div className="main-article">
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </div>

          <div className="article-comments">
            <Comments comments={comments} />
          </div>

          <div className="add-comment">
            <CommentAdder
              handleNewComment={this.handleNewComment}
              article_id={article.article_id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
