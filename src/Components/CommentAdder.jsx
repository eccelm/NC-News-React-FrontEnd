import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../Context/UserContext';

function CommentAdder(props) {
	const {  user } = useContext(UserContext);
	const [body, setBody] = useState('');

	function handleInput(key, value) {
		//console.log(key, value);
		setBody(value);
		console.log(body);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const comment = {
			username: user.username,
			body: body,
		};
		console.log(comment);
		props.handleNewComment(comment);
	}

	return (
		<StyledDiv>
			<p>Hello {user.username}</p>
			{user.username !== 'guest'?  
						<StyledForm onSubmit={handleSubmit}>
						<label htmlFor='comment-body'>
							Add your comment here:
							<textarea
								id='comment-body'
								cols='25'
								rows='5'
								maxLength='250'
								required
								onChange={(event) => {
									handleInput('body', event.target.value);
								}}></textarea>
							<StyledButton type='submit'>Submit Comment</StyledButton>
						</label>
					</StyledForm>
			: 
			<p>Please Login to leave a comment</p>}

		</StyledDiv>
	);
}

export default CommentAdder;

const StyledDiv = styled.div`
display: flex;
flex-flow: column wrap;
min-height: fit-content;

`

const StyledForm = styled.form`
textarea {
	width: 100%;
}

`

const StyledButton = styled.button`
border-radius: 12px;  
border: 2px solid #7FB069;
box-shadow: 2px 5px #63934D;
background-color: white;
padding: 0.5rem;
margin: 0.5rem;
font-size: inherit;
color: black;

:hover {
	background-color: #7FB069; /* Green */
	color: white;

:active {

	box-shadow: 1px 1px #51783F;
	transform: translateY(3px);
  `;