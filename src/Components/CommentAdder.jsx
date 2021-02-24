import React, { useState } from 'react';
/*
Will need refactor to not have a hard-coded user 
*/
function CommentAdder(props) {

	const [body, setBody] = useState('');

	function handleInput(key, value) {
		//console.log(key, value);
		setBody(value);
		console.log(body);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const comment = {
			username: props.tempUser,
			body: body,
		};
		console.log(comment);
		props.handleNewComment(comment);
	}

	return (
		<div>
			<p>Hello {props.tempUser}</p>
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
		</div>
	);
}

export default CommentAdder;
