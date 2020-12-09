import React, { Component } from "react";
import { getArticleById, getArticleComments } from "../api";
import {Link} from '@reach/router'
import Comments from './CommentsDisplay'
import AddComment from './CommentAdder'

class Article extends Component {

  state = { article: [], 
            comments: [] 
          };

  componentDidMount() {
    getArticleById(this.props["article_id"])
    .then((article) => {
      this.setState({ article });
    })
    getArticleComments(this.props["article_id"])
    .then((comments) => {
      this.setState({comments})
    });
  }
// need component did update to get the url to do something different

  handleSumbit(event) {
    console.log(event)
    console.dir(event.target)
  }
  render() {
    const {article, comments} = this.state;

    return (
      <div>
        <Link to="/articles"><button>Go Back</button></Link>
       <Link to={`/articles/${article["article_id"]+1}`}><button>Next Article - not changing page</button></Link>
       
        <h1>Welcome to the Article page</h1>
 <p>Temporary to display keys{JSON.stringify(Object.keys(article))}</p>
 
    <div className="article-grid-container">
      <div className="main-article">
         <h2>{article.title}</h2>
         <p>{article.body}</p>
      </div>

    <div className="article-comments">
         <Comments comments={comments}/>
     </div>
  <div className="add-comment">
      <AddComment handleSumbit={this.handleSumbit}/>
  

</div>

    
     
      </div>
        </div>
    );
  }
}

export default Article;
