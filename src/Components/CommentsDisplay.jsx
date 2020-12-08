const { default: CommentCard } = require("./CommentsCard")

function Comments(props) {
  console.log(props)
return (

  <div className="comments-box">
  <p>Comments Here</p>
  <p>{JSON.stringify(props.comments[0])}</p>
  <CommentCard comments={props.comments} />
  </div>
)
}

export default Comments;