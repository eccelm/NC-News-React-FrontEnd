import React from "react";
/*
Next Step: Refactor into a controlled component
Why --> current accessing of values would be disrupted by a new element altering the array and making the inputted indexes incorrect (see example in Pauls thurs lecture)
*/
function CommentAdder(props) {
  console.log(props);

  function handleSubmit(event) {
    event.preventDefault();

    // refactor into controlled component
    const comment = {
      username: event.target[0].value,
      body: event.target[1].value,
    };
    props.handleNewComment(comment);
  }
  /*
handleSubmit(event) func here?
- needs to collect data into the {k:v} pairs to send 
run handleNewComment()
*/
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
