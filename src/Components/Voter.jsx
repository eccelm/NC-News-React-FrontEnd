import React, { Component } from "react";
import { upVote } from "../api";
/*
API needs articleUpvote func
export const upVote = (id) => {
  return ncGamersApi.patch(`path`, content to patch)
}

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
    const { article_id } = this.props.article;
    console.log(article_id);
    // upVote(comment_id); // sending axios
    // this.setState({
    //   hasVoted: true,
    //   vote_change: 1,
    // });
  };

  render() {
    const { votes } = this.props;
    const { vote_change, hasVoted, hasError, errorMessage } = this.state;

    if (hasError) {
      return <p>{errorMessage}</p>;
    } else {
      return (
        <div>
          <p>Votes: {votes + vote_change}</p>
          <button onClick={this.handleClick} disabled={hasVoted}>
            upvote!
          </button>
        </div>
      );
    }
  }
}

export default Voter;
