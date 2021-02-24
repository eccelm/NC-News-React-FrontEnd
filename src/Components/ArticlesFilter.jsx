import React from 'react';

function ArticlesFilter(props) {
	return (
		<>
			<button name='order' id='order' value='asc' onClick={props.handleFilter}>
				Ascending
			</button>
			<button id='order' name='order' value='desc' onClick={props.handleFilter}>
				Descending
			</button>
			<p>Topic:</p>
			<button onClick={props.handleFilter} value='' name='topic' id='topic'>
				All Topics
			</button>
			<button
				onClick={props.handleFilter}
				value='coding'
				name='topic'
				id='topic'>
				Coding
			</button>
			<button
				onClick={props.handleFilter}
				value='football'
				name='topic'
				id='topic'>
				Football
			</button>
			<button
				onClick={props.handleFilter}
				value='cooking'
				name='topic'
				id='topic'>
				Cooking
			</button>

			<label htmlFor='sort_by'>Sort By: </label>
			<select
				className='filterSelect'
				name='sort_by'
				id='sort_by'
				onClick={props.handleFilter}>
				<optgroup label='Sort By'>
					<option value='author'>Author</option>
					<option value='comment_count'>Comments</option>
					<option value='votes'>Votes</option>
				</optgroup>
			</select>
		</>
	);
}

export default ArticlesFilter;
