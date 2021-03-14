import React, { Component } from 'react';
import { upVote } from '../api';
import styled from 'styled-components';
/*
NOT working properly

- can send vote again in comments (preventDefault? disabled not working correctly? or working within the limits of app e.g. because no user saved a refresh is like a new user again, but confirmed have to refresh the page in order to vote again)

change stylingon StyledButton so clear cannot be reclicked
*/

class Voter extends Component {
	state = {
		hasVoted: false,
		vote_change: 0,
		hasError: false,
		errorMessage: '',
	};

	handleClick = (event) => {
		console.log(this.props);
		if (this.props.comment) {
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
				<StyledContainer>
					<StyledButton
						onClick={this.handleClick}
						value={1}
						disabled={hasVoted}>
						upvote
					</StyledButton>
					<p>Votes: </p>
					<p>
						{this.props.comment
							? this.props.comment.votes + vote_change
							: this.props.article.votes + vote_change}
					</p>
				</StyledContainer>
			);
		}
	}
}

export default Voter;

const StyledContainer = styled.div`
	display: flex;
	align-items: baseline;
`;

const StyledButton = styled.button`
width: fit-content;
height: fit-content;
border-radius: 12px;  
border: 2px solid #fb951d;
box-shadow: 2px 5px  #ff550d;
background-color: white;
padding: 0.5rem;
margin: 0.5rem;
font-size: inherit;
color: black;
font-size: 1.5rem;

:hover {
	background-color: #fb951d; /* Green */
	color: white;

:active {
	box-shadow: 1px 1px  #ff550d;
	transform: translateY(3px);
  `;
