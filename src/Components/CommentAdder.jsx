import React from "react";
/*
Will need refactor to not have a hard-coded user 

*/

function CommentAdder(props) {

  // const [username, setUsername] = useState('')
  // const [body, setBody] = useState('')

  function handleSubmit(event) {
    event.preventDefault();

    // refactor into controlled component
    const comment = {
      username: event.target[0].value,
      body: event.target[1].value,
    };
    props.handleNewComment(comment);
  }

  return (
    <div>
      <p>Hello</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-user">
          Your username:
          <input value="tickle122" id="comment-user " type="text" disabled />
        </label>
        <br />
        <label htmlFor="comment-body">
          Add your comment here:
          <textarea
            id="comment-body"
            cols="25"
            rows="5"
            maxLength="250"
            required
          ></textarea>
          <button type="submit">Submit Comment</button>
        </label>
      </form>
    </div>
  );
}

export default CommentAdder;
