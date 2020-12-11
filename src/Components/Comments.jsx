import React from "react";
import Voter from "./Voter";
// before continuing will also need a refactor to class comp in order to access the comment_id ??
function Comments(props) {
  function handleClick(event) {
    const comment_id = event.target.value;
    console.log(props);
    console.log("clickedy click");
    console.log(event.target.value);
    props.removeComment(comment_id);
    // reset state in parent class component
  }

  return (
    <div className="comments-box">
      <h2>Comments</h2>

      <ul>
        {props.comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              {comment.author === "tickle122" ? (
                <button
                  value={comment.comment_id}
                  onClick={handleClick}
                  className="delete-comment-button"
                >
                  X
                </button>
              ) : null}
              <p> User: {comment.author}</p>
              <Voter comment={comment} />
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Comments;