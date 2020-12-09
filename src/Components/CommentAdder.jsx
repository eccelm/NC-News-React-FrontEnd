import React from "react";
// class comp??  with state to catch the data?
// keep it out of the url good practice? not sensitive
function CommentAdder(props) {
  console.log(props);

  function handleSubmit(event) {
    console.log("I'm through", event);
    console.log(event.target.value);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    event.preventDefault();
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
          <input id="comment-user " type="text" required />
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
