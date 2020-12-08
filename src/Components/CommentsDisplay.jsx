const { default: CommentCard } = require("./CommentsCard")

function Comments(props) {
  console.log(props)
return (

  <div className="comments-box">
  <p>Comments</p>
  <CommentCard comments={props.comments} />
  </div>
)
}

export default Comments;