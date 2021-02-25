import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';
/*
Will need refactor to not have a hard-coded user 
*/
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
		<div>
			<p>Hello {user.username}</p>
			{user.username !== 'guest'?  
						<form onSubmit={handleSubmit}>
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
							<button type='submit'>Submit Comment</button>
						</label>
					</form>
			: 
			<p>Please Login to leave a comment</p>}

		</div>
	);
}

export default CommentAdder;
