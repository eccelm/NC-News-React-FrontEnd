import React from 'react'

function ArticlesFilter(props) {
  return (
  <label>
    Filter articles by:
    <span><button>ASC</button><button>DESC</button></span>
    <select>
    <optgroup label="Filter Options">
      <option value="">1</option>
      <option value="">2</option>
    </optgroup>
    </select>
  </label>
  )
}

export default ArticlesFilter;