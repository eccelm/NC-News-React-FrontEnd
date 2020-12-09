import React, { Component } from 'react' 

class Loader extends Component {
  state = {isLoading: true}

  render() {
    return (
      <div>
      <h2>Content is loading...</h2>
      <h2>📰</h2>
      </div>
    )
  }
}

export default Loader;