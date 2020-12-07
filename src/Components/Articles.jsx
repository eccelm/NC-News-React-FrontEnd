import React, { Component } from 'react' 
import{ getArticles} from '../api'
import ArticlesFilter from './ArticlesFilter'
import ArticlesList from './ArticlesList'

class Articles extends Component {
state = {articles: []}

componentDidMount(){
  console.log('mounted')
  getArticles().then((articles) => {
    console.log(typeof articles)
    this.setState({articles})
  }).then(()=> {
  console.log(typeof this.state.articles)
  })
}

render() {
return (
  <div>
  <h2>Routing testing for articles page</h2>
  <ArticlesFilter />
  <ArticlesList articles={this.state.articles} />
  </div>)}
}

export default Articles;