const { default: CommentCard } = require("./CommentsCard")

function Comments(props) {
  console.log(props)
return (

  <div className="comments-box">
  <h2>Comments</h2>
  <CommentCard comments={props.comments} />
  </div>
)
}

export default Comments;