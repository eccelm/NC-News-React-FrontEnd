import React from "react";

function ArticlesFilter(props) {
  /*
  Next Task: 
    Refactor api req so that it can simultaneously the different queries i.e. stay on asc order while changing between topics or a diff sort by
  */
  function handleClick(event) {
    let key = event.target.id;
    let value = event.target.value;
    console.log(key, "key<<< >>>value", value);
    props.handleQuery(key, value);
  }

  return (
    <>
      <p>Order:</p>
      <button name="order" id="order" onClick={handleClick} value="asc">
        Ascending
      </button>
      <button onClick={handleClick} value="desc">
        Descending
      </button>
      <p>Topic:</p>
      <button onClick={handleClick} value="" id="topic">
        All Topics
      </button>
      <button onClick={handleClick} value="coding" id="topic">
        Coding
      </button>
      <button onClick={handleClick} value="football" id="topic">
        Football
      </button>
      <button onClick={handleClick} value="cooking" id="topic">
        Cooking
      </button>

      <p>Sort By:</p>
      <select
        className="filterSelect"
        name="sort_by"
        id="sort_by"
        onClick={handleClick}
      >
        <optgroup label="Sort By">
          <option value="author">Author</option>
          <option value="topic">Topic</option>
        </optgroup>
      </select>
    </>
  );
}

export default ArticlesFilter;
