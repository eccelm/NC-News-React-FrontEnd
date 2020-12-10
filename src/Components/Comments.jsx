function Comments(props) {
  return (
    <div className="comments-box">
      <h2>Comments</h2>

      <ul>
        {props.comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
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
