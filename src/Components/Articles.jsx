import React, { Component } from 'react' 
//import {Router} from '@reach/router'
import{ getArticles} from '../api'
import ArticlesFilter from './ArticlesFilter'
import ArticlesList from './ArticlesList'

class Articles extends Component {
state = {articles: []}

componentDidMount(){
//  console.log('mounted')
  getArticles().then((articles) => {
  //  console.log(typeof articles)
    this.setState({articles})
  })
}

handleQuery = (queryValue) => {
 getArticles(queryValue).then((articles) => {
   this.setState({articles})
 })
}

render() {
return (
  <div>
  <h2>Routing testing for articles page</h2>
  <ArticlesFilter handleQuery={this.handleQuery}/>
    <ArticlesList articles={this.state.articles} />

  </div>)}
}
// NOTE: Removed * from app level path as meant everything onto articles
export default Articles;