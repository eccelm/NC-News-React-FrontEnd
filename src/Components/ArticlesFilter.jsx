import React, { Component } from "react";

class ArticlesFilter extends Component {
  /*
  Next Task: 
    Refactor api req so that it can simultaneously the different queries i.e. stay on asc order while changing between topics or a diff sort by
  */
  state = { currentQuery: "", currentQueryValue: "", order: "" };

  handleClick = (event) => {
    let key = event.target.id;
    console.log(key);
    let value = event.target.value;
    //console.log(key, "key<<< >>>value", value);
    if (key === "order") {
      this.setState({ order: value });
    } else {
      this.setState({ currentQuery: key, currentQueryValue: value });
    }
    console.log(this.state);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    const { currentQuery, currentQueryValue, order } = this.state;
    if (
      prevState.currentQueryValue !== this.state.currentQueryValue ||
      prevState.order !== this.state.order
    ) {
      console.log("testing conditional logic in the update func");
      this.props.handleQuery(currentQuery, currentQueryValue, order);
    }
  }
  render() {
    return (
      <>
        <button name="order" id="order" onClick={this.handleClick} value="asc">
          Ascending
        </button>
        <button onClick={this.handleClick} id="order" value="desc">
          Descending
        </button>
        <p>Topic:</p>
        <button onClick={this.handleClick} value="" id="topic">
          All Topics
        </button>
        <button onClick={this.handleClick} value="coding" id="topic">
          Coding
        </button>
        <button onClick={this.handleClick} value="football" id="topic">
          Football
        </button>
        <button onClick={this.handleClick} value="cooking" id="topic">
          Cooking
        </button>

        <p>Sort By:</p>
        <select
          className="filterSelect"
          name="sort_by"
          id="sort_by"
          onClick={this.handleClick}
        >
          <optgroup label="Sort By">
            <option value="author">Author</option>
            <option value="topic" disabled>
              Topic
            </option>
          </optgroup>
        </select>
      </>
    );
  }
}

export default ArticlesFilter;

/*
Broken the radio buttons by altering the htmlFOr to order from asc and desc, now both return desc 
- check what htmlfor needs to match if it can be changed ?? 
- alternate fix  change writing to match query and use innerHTML or innerText

        <p>Order:</p>
        <div className="radio-order-container">
          <input
            type="radio"
            name="order"
            id="order"
            value="desc"
            onClick={this.handleClick}
          />
          <label htmlFor="order">Desc</label>
          <input
            type="radio"
            name="order"
            id="order"
            value="asc"
            onClick={this.handleClick}
          />
          <label htmlFor="order">Asc</label>
        </div>


*/
