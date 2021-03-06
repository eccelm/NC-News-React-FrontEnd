import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';
import styled from 'styled-components';
// import Voter from "./Voter";

function Comments(props) {
	const { user } = useContext(UserContext);
	function handleClick(event) {
		const comment_id = event.target.value;
		console.log(comment_id);
		props.removeComment(comment_id);
	}

	return (
		<StyledContainer>
			<h2>Comments</h2>
			<StyledUl>
				{props.comments.map((comment) => {
					return (
						<StyledLi key={comment.comment_id}>
							<p> User: {comment.author}</p>
							{/* <Voter comment={comment} /> */}
							<p>Written: {comment.created_at.slice(0, 10)}</p>
							{comment.author === user.username ? (
								<button
									value={comment.comment_id}
									onClick={handleClick}
									className='delete-comment-button'>
									delete X
								</button>
							) : null}

							<hr />
							<p>{comment.body}</p>

							<hr />
						</StyledLi>
					);
				})}
			</StyledUl>
		</StyledContainer>
	);
}

export default Comments;
const StyledContainer = styled.div``;
const StyledUl = styled.ul`
	margin: auto;
	padding: 10px 0px;
	align-items: center;
	width: 90%;
`;

const StyledLi = styled.li`
	padding: 10px;
	margin: 1%;
	color: black;
	background-color: #ffffff;
	list-style: none;
`;
