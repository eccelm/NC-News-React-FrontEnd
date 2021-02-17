import React, { Component } from "react";
import {
  getArticleById,
  getArticleComments,
  postCommentToArticle,
  deleteArticleComment,
} from "../api";
import { Link } from "@reach/router";
import Loader from "./Loading";
import Comments from "./Comments";
import CommentAdder from "./CommentAdder";

/*
  Next Steps:
   need component did update to get the url to do something different for the next page button
  */
class ArticlePage extends Component {
  state = { article: [], comments: [], isLoading: true };

  componentDidMount() {
    getArticleById(this.props["article_id"]).then((article) => {
      this.setState({ article, isLoading: false });
    });
    getArticleComments(this.props["article_id"]).then((comments) => {
      this.setState({ comments });
    });
  }

  componentDidUpdate(prevState, prevProps) {
    // console.log(prevProps);
    //  console.dir(prevState);
  }
  handleNewComment = (commentContent) => {
    const { article_id } = this.state.article;
    return postCommentToArticle(article_id, commentContent).then(
      (newComment) => {
        this.setState((currentState) => {
          return {
            article: currentState.article,
            comments: [newComment, ...currentState.comments],
          };
        });
      }
    );
  };
  /*
  filter isn't working as should !== doesn't change anything and === removes all
*/
  removeComment = (comment_id) => {
    deleteArticleComment(comment_id).then((response) => {
      console.log(response);
      console.log(comment_id);

      this.setState((currentState) => {
        const filteredComments = currentState.comments.filter((comment) => {
          console.log(
            `arg1: ${
              comment.comment_id
            }typeof:${typeof comment.comment_id} arg2: ${comment_id}typeof:${typeof comment_id} `
          );
          return comment.comment_id !== parseInt(comment_id);

          // console.log("comment", comment.comment_id);
        });
        console.log(filteredComments, `should no longer contain ${comment_id}`);
        return {
          comments: filteredComments,
        };
      });
    });
  };

  render() {
    const { article, comments, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <div>
        <div className="article-page-links">
          <Link to="/articles">
            <button>Go Back</button>
          </Link>
          <Link to={`/articles/${article["article_id"] + 1}`}>
            <button>Next Article</button>
          </Link>

          <h1>Welcome to the Article page</h1>
        </div>

        <div className="article-grid-container">
          <div className="main-article">
            <h2>{article.title}</h2>
            <p>By: {article.author}</p>
            <p>{article.body}</p>
          </div>

          <div className="article-comments">
            <Comments comments={comments} removeComment={this.removeComment} />
          </div>

          <div className="add-comment">
            <CommentAdder handleNewComment={this.handleNewComment} />
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlePage;
