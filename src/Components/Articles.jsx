import React, { Component } from 'react' 
//import {Router} from '@reach/router'
import{ getArticles} from '../api'
import ArticlesFilter from './ArticlesFilter'
import ArticlesList from './ArticlesList'
import Loader from './Loading'

class Articles extends Component {
state = {articles: [],
          isLoading: true}

componentDidMount(){
//  console.log('mounted')
  getArticles().then((articles) => {
  //  console.log(typeof articles)
    this.setState({articles, isLoading: false})
  })
}

handleQuery = (queryKey, queryValue) => {
  //console.log(queryKey, queryValue)
 getArticles(queryKey, queryValue).then((articles) => {
   this.setState({articles})
 })
}

render() {
  const {articles, isLoading} = this.state;
   if(isLoading) {
    return (
      <Loader />
    )}
return (
  <div>
  <h2>Use the filters below to choose a topic and click on a title to expand the article</h2>
  <ArticlesFilter handleQuery={this.handleQuery}/>
 
  
    <ArticlesList articles={articles} />

  </div>)}
}
// NOTE: Removed * from app level path as meant everything onto articles
export default Articles;