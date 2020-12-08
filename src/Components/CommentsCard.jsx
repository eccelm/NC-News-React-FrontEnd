
function CommentCard(props){
return (
  <ul>
    {props.comments.map((comment) => {
      return (
       
      <li key={comment.comment_id}>
         
     <p>{comment.comment_id} </p> 
      <p> User: {comment.author}</p>
      <p>Votes:{comment.votes} </p>
      <h3>{comment.body}</h3>
     
      </li>
      
      )
    })}
  </ul>
)

}

export default CommentCard;