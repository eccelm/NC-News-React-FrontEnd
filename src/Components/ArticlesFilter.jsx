import React, { useState } from 'react';

function ArticlesFilter(props) {
	const [filters, setFilters] = useState({
		topic: '',
		sort_by: 'author',
		order: 'desc',
	});
	// state = { currentQuery: "", currentQueryValue: "", order: "" };
	function handleFilter(event) {
		const { name, value } = event.target;
		console.log(name, value);
		setFilters((prevFilters) => {
			return { ...prevFilters, [name]: value };
		});
    console.log(filters)
	}
	// handleClick = (event) => {
	//   let key = event.target.id;
	//   console.log(key);
	//   let value = event.target.value;
	//   //console.log(key, "key<<< >>>value", value);
	//   if (key === "order") {
	//     this.setState({ order: value });
	//   } else {
	//     this.setState({ currentQuery: key, currentQueryValue: value });
	//   }
	//   console.log(this.state);
	// };

	// componentDidUpdate(prevProps, prevState) {
	//   console.log(prevProps);
	//   console.log(prevState);
	//   const { currentQuery, currentQueryValue, order } = this.state;
	//   if (
	//     prevState.currentQueryValue !== this.state.currentQueryValue ||
	//     prevState.order !== this.state.order
	//   ) {
	//     console.log("testing conditional logic in the update func");
	//     this.props.handleQuery(currentQuery, currentQueryValue, order);
	//   }
	// }

	return (
		<>
			<button name="order" id="order" value="asc" onClick={handleFilter}>
          Ascending
        </button>
        <button id="order" name="order" value="desc" onClick={handleFilter}>
          Descending
        </button>
			{/* <p>Topic:</p>
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
        </button> */}

			<label htmlFor='sort_by'>Sort By: </label>
			<select
				className='filterSelect'
				name='sort_by'
				id='sort_by'
				onClick={handleFilter}>
				<optgroup label='Sort By'>
					<option value='author'>Author</option>
					<option value='comment_count'>
						Comments
					</option>
					<option value='votes'>Votes</option>
				</optgroup>
			</select>
		</>
	);
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
