import React from "react";
// before continuing will also need a refactor to class comp in order to access the comment_id ??
function Comments(props) {
  function handleClick(event) {
    console.log(props);
    console.log("clickedy click");
    console.log(event);
    // props.removeComment();
  }

  return (
    <div className="comments-box">
      <h2>Comments</h2>

      <ul>
        {props.comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              {comment.author === "tickle122" ? (
                <button onClick={handleClick} className="delete-comment-button">
                  X
                </button>
              ) : null}
              <p>
                {" "}
                User: {comment.author} Votes:{comment.votes}
              </p>

              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Comments;
