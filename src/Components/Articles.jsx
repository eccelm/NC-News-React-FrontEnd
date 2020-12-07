import React, { Component } from 'react' 
import {Router} from '@reach/router'
import{ getArticles} from '../api'
import ArticlesFilter from './ArticlesFilter'
import ArticlesList from './ArticlesList'
import Article from './ArticlePage'

class Articles extends Component {
state = {articles: []}

componentDidMount(){
//  console.log('mounted')
  getArticles().then((articles) => {
  //  console.log(typeof articles)
    this.setState({articles})
  })
}

render() {
return (
  <div>
  <h2>Routing testing for articles page</h2>
  <ArticlesFilter />
    <ArticlesList articles={this.state.articles} />
    <Router>
    <Article path =":article_id" />
  </Router>
  </div>)}
}

export default Articles;