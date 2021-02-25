import React, {useContext} from "react";
import UserContext from '../Context/UserContext';
// import Voter from "./Voter";


function Comments(props) {
	const {  user } = useContext(UserContext);
  function handleClick(event) {
    const comment_id = event.target.value;
    console.log(comment_id)
    props.removeComment(comment_id);
  
  }

  return (
    <div className="comments-box">
      <h2>Comments</h2>

      <ul>
        {props.comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              {comment.author === user.username ? (
                <button
                  value={comment.comment_id}
                  onClick={handleClick}
                  className="delete-comment-button"
                >
                  delete X
                </button>
              ) : null}
              <p>{comment.body}</p>
              <p> User: {comment.author}</p>
              {/* <Voter comment={comment} /> */}
              <p>Written: {comment.created_at.slice(0, 10)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Comments;
