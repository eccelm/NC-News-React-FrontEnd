import React from 'react';
import styled from 'styled-components';

function ArticlesFilter(props) {
	return (
		
		<StyledFilterContainer>	
			<StyledFilterGroup>
			<StyledLabel htmlFor='topic'>TOPIC: </StyledLabel>
			<StyledSelect
				className='filterSelect'
				name='topic'
				id='topic'
				onClick={props.handleFilter}>
				<optgroup label='Topic'>
					<option value=''>All Topics</option>
					<option value='coding'>Coding</option>
					<option value='football'>Football</option>
					<option value='cooking'>Cooking</option>
				</optgroup>
				</StyledSelect>
				</StyledFilterGroup>

				<StyledFilterGroup>
			<StyledLabel htmlFor='sort_by'>SORT BY: </StyledLabel>
			<StyledSelect
				className='filterSelect'
				name='sort_by'
				id='sort_by'
				onClick={props.handleFilter}>
				<optgroup label='Sort By'>
					<option value='author'>Author</option>
					<option value='comment_count'>Comments</option>
					<option value='votes'>Votes</option>
				</optgroup>
			</StyledSelect>
			</StyledFilterGroup>		<StyledFilterGroup>
			<StyledButton name='order' id='order' value='asc' onClick={props.handleFilter}>
				ASC
			</StyledButton>
			<StyledButton id='order' name='order' value='desc' onClick={props.handleFilter}>
				DESC
			</StyledButton>
			</StyledFilterGroup>	
			</StyledFilterContainer>
	);
}

export default ArticlesFilter;

const StyledFilterContainer = styled.div`
display: flex;
flex-flow: row wrap;
text-align: center;
align-items: baseline;
justify-content: center;
background-color: #CEDEE7;
`
const StyledFilterGroup = styled.div`
padding: 1%;
`
const StyledLabel = styled.label`
font-size: 1.5rem;
padding: 5px;
`

const StyledSelect = styled.select`
font-size: 1.2rem;
max-width: 60%;
border-radius: 12px;  
border: 2px solid #7FB069;
box-shadow: 2px 5px #63934D;
background-color: white;
padding: 0.5rem;
margin: 0.5rem;
font-size: inherit;
color: black;

`

const StyledButton = styled.button`
border-radius: 12px;  
border: 2px solid #7FB069;
box-shadow: 2px 5px #63934D;
background-color: white;
padding:  0.5rem 2.5rem;
margin: 0.5rem;
font-size: inherit;
color: black;

:active {
	box-shadow: 1px 1px #51783F;
	transform: translateY(3px);
  `;
/*
OLD 

	<StyledButton onClick={props.handleFilter} value='' name='topic' id='topic'>
				All Topics
			</StyledButton>
			<StyledButton
				onClick={props.handleFilter}
				value='coding'
				name='topic'
				id='topic'>
				Coding
			</StyledButton>
			<StyledButton
				onClick={props.handleFilter}
				value='football'
				name='topic'
				id='topic'>
				Football
			</StyledButton>
			<StyledButton
				onClick={props.handleFilter}
				value='cooking'
				name='topic'
				id='topic'>
				Cooking
			</StyledButton>


*/