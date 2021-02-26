import React, { useContext,  useState } from 'react';
import { Link } from '@reach/router';
import UserContext from '../Context/UserContext';
import {getUserByUsername} from '../api'
import styled from "styled-components";
//import {login} from '../Context/userFunctions'

function Homepage() {
// context
	const {user, setUser} = useContext(UserContext);
// state
	const [returningUser, setReturningUser] = useState('');
	const [newUser, setNewUser] = useState({
		name: '',
		username: '',
		avatar:
			'https://cdn.pixabay.com/photo/2017/01/31/17/48/animal-2025913_960_720.png',
	});

	// functions
	function storeReturningUser(event) {
		const { value } = event.target;
		setReturningUser(value);
		console.log(returningUser);
	}

	function login(username) {
		console.log(username);
		getUserByUsername(username)
			.then((user) => {
			//	console.log(user);
				setUser(user)
			})
			.catch((err) => {
				console.log(err);
			});
	
	}
	function handleNewUserInput(event) {
		const { value, name } = event.target;
		console.log(value, name, newUser);
		setNewUser((prevUser) => {
			return { ...prevUser, [name]: value };
		});
		console.log(newUser);
	}
	function handleNewUser(event) {
		event.preventDefault();
		console.log(newUser);
	}
	return (
		<StyledHomePage>
		<StyledContainer>
		
			<StyledH1>NC NEWS</StyledH1>

			</StyledContainer> 	<StyledContainer>
			<Link style={{width: `100%`}} to='/articles'>
		
				<StyledButton>CONTINUE AS A GUEST</StyledButton>
			</Link>
			<StyledHR/>
			<StyledButton>LOGIN</StyledButton>

		
			<h2>Returning member? Login:</h2>
			<form
				onSubmit={(event) => {
					console.log('actually inside');
					event.preventDefault();
					login(returningUser);
				}}>
				<label htmlFor='newusername'>Username:</label>
				<input
					type='text'
					name='username'
					id='newusername'
					minLength='6'
					maxLength='20'
					pattern='[A-Za-z0-9]+'
					onChange={storeReturningUser}
				/>
				<input type='submit' value='Login' />
			</form>
			{/*



				*/}
					<StyledButton>CREATE ACCOUNT</StyledButton>
			<h2>New Member? Create your login</h2>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleNewUser}>
				<fieldset>
					<legend>
						Create your new user login here. Minimum 5 characters and only
						numbers and letters can be used.
					</legend>
					<label htmlFor='newname'>Name:</label>
					<input
						type='text'
						name='name'
						id='newname'
						onChange={handleNewUserInput}
						pattern='[\w ]+'
						minLength='6'
						maxLength='20'
					/>
					<label htmlFor='newusername'>Username:</label>
					<input
						type='text'
						name='username'
						id='newusername'
						onChange={handleNewUserInput}
						minLength='6'
						maxLength='20'
						pattern='[A-Za-z0-9]+'
					/>
					<input type='submit' value='create your account' />
				</fieldset>
			</form>
			</StyledContainer>
		</StyledHomePage>
	);
}
export default Homepage;

const StyledHomePage = styled.div`
	background-color: #7FB069; /* Green */
	display: flex;
flex-flow: row nowrap;
text-align: center;


`
const StyledContainer = styled.div`

width: 50%;
display: flex;
flex-flow: column nowrap;

justify-content: center;
 align-items: center;
`

const StyledH1 = styled.h1`
font-size: 15rem;

`
const StyledHR = styled.hr`
data-content: 'hello';
width: 50%;
margin: 2rem;
` 

const StyledButton = styled.button`
height: fit-content;
width: 80%;
font-size: 2em;
border-radius: 20px;
box-shadow: 5px 5px 8px blue;
`