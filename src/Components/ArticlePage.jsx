import React, { Component } from "react";
import { getArticleById, getArticleComments } from "../api";
import Comments from './CommentsDisplay'

class Article extends Component {
  state = { article: [], comments: [] };

  componentDidMount() {
    getArticleById(this.props["article_id"]).then((article) => {
      this.setState({ article });
    })
    getArticleComments(this.props["article_id"]).then((comments) => {
      this.setState({comments})
    });
  }

  render() {
    const {article, comments} = this.state;
    return (
      <div>
        <button>Go Back</button>
        <button>Next Article</button>
        <h1>Welcome to the Article page</h1>
 <p>{JSON.stringify(Object.keys(article))}</p>
    <div class="article-grid-container">
  <div class="main-article">
  
      
    <h2>{article.title}</h2>
    <p>{article.body}</p>
  </div>

  <div class="article-comments">
      <p>Hello from inside this diiiiiiiiiiiv</p>
 <Comments comments={comments}/>
  </div>
  <div class="add-comment">I will let you add your own comment once Martha gets around to coding me</div>  

</div>

    
     
      </div>
     
    );
  }
}

export default Article;
