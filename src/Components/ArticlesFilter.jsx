import React from 'react'

function ArticlesFilter(props) {
 
  function handleClick(event) {
  
    let key = event.target.id;
    let value = event.target.value;
    console.log(key,"key<<< >>>value", value)
    props.handleQuery(key, value)
  }

  return (
    <>
  <label>
    Sort by:
    <button name="order" id="order" onClick={handleClick} value="asc">Ascending Order</button>
    <button onClick={handleClick} value="desc">Descending button</button>
        </label>
  
    <select
    className="filterSelect"
    name="topic"
    id="topic"
    onClick={handleClick}
    >
    <optgroup label="Topics">
      <option value="">All Topics</option>
      <option value="coding">Coding</option>
      <option value="cooking">Cooking</option>
      <option value="football">Football</option>
    </optgroup>
    </select>

  </>
  )
}

export default ArticlesFilter;