import React from 'react'

function ArticlesFilter(props) {
  return (
  <label>
    Filter articles by:
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