import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';
import styled from 'styled-components';
 import Voter from "./Voter";

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
									<StyledInnerContainer>
							<Voter comment={comment}></Voter>
							{comment.author === user.username ? (
						
					
								<StyledButton
									value={comment.comment_id}
									onClick={handleClick}
									className='delete-comment-button'>
									delete
								</StyledButton>
						
							) : null}
		</StyledInnerContainer>

							<p>{comment.author}</p>
							{/* <Voter comment={comment} /> */}
							<p>Written: {comment.created_at.slice(0, 10)}</p>
						
							<p className='body'>{comment.body}</p>

							<hr />
						</StyledLi>
					);
				})}
			</StyledUl>
		</StyledContainer>
	);
}

export default Comments;
const StyledContainer = styled.div`

`;
const StyledInnerContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
`;
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

	.body {
		border-top: 2px solid lightgrey;
		border-bottom: 2px solid lightgrey;
	}
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
