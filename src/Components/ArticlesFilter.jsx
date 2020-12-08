import React from 'react'

function ArticlesFilter(props) {
 
  function handleClick(event) {
    console.log(event)
    props.handleQuery(event.target.value)
  }

  return (
  <label>
    Sort by:
    <button onClick={handleClick} value="asc">Ascending Order</button>
    <button onClick={handleClick} value="desc">Descending button</button>
Filter By:
      <button>Coding</button>
      <button>Football </button>
      <button>Cooking</button>
    <select>
    <optgroup label="Topics">
      <option value="">All Topics</option>
      <option value="coding">Coding</option>
      <option value="cooking">Cooking</option>
      <option value="football">Football</option>
    </optgroup>
    </select>
  </label>
  )
}

export default ArticlesFilter;