// this is working without importing React in??


function CommentCard(props){
return (
  <ul>
    {props.comments.map((comment) => {
      return (
       
      <li key={comment.comment_id}>
          
      <p> User: {comment.author} Votes:{comment.votes}</p>

      <p>{comment.body}</p>
     
      </li>
      
      )
    })}
  </ul>
)

}

export default CommentCard;