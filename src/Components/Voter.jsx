import React, { Component } from "react";
import { upVote } from "../api";
/*
NOT working properly
- can send vote again in comments (preventDefault? disabled not working correctly? or working within the limits of app e.g. because no user saved a refresh is like a new user again, but confirmed have to refresh the page in order to vote again)

change stylingon button so clear cannot be reclicked
*/

class Voter extends Component {
  state = {
    hasVoted: false,
    vote_change: 0,
    hasError: false,
    errorMessage: "",
  };

  handleClick = (event) => {
    console.log(this.props);
    if (this.props.comment) {
      console.log("I'm not breaking anymore");
      const { article_id } = this.props.comment;
      const { comment_id } = this.props.comment;
      console.log(article_id, comment_id);
      upVote(article_id, comment_id).catch((err) => {
        const {
          response: { status, statusText },
        } = err;

        this.setState({
          hasVoted: false,
          vote_change: 0,
          hasError: true,
          errorMessage: `Whoops... ${status}! ${statusText}`,
        });
      });
      this.setState({ vote_change: 1, hasVoted: true });
    } else {
      const { article_id } = this.props.article;
      console.log(article_id);
      upVote(article_id).catch((err) => {
        const {
          response: { status, statusText },
        } = err;

        this.setState({
          hasVoted: false,
          vote_change: 0,
          hasError: true,
          errorMessage: `Whoops... ${status}! ${statusText}`,
        });
      });
      this.setState({ vote_change: 1, hasVoted: true });
    }
  };

  render() {
    const { vote_change, hasVoted, hasError, errorMessage } = this.state;

    if (hasError) {
      return <p>{errorMessage}</p>;
    } else {
      return (
        <div>
          <p>
            Votes:{" "}
            {this.props.comment
              ? this.props.comment.votes
              : this.props.article.votes + vote_change}
          </p>
          <button onClick={this.handleClick} disabled={hasVoted}>
            upvote!
          </button>
        </div>
      );
    }
  }
}

export default Voter;
