import React, { useContext, useState } from 'react';
import { Link } from '@reach/router';
import UserContext from '../Context/UserContext';
import { getUserByUsername } from '../api';
import styled from 'styled-components';
//import {login} from '../Context/userFunctions'

function Homepage() {
	// context
	const { setUser } = useContext(UserContext);
	// state for context
	const [returningUser, setReturningUser] = useState('');
	const [newUser, setNewUser] = useState({
		name: '',
		username: '',
		avatar:
			'https://cdn.pixabay.com/photo/2017/01/31/17/48/animal-2025913_960_720.png',
	});
	// page display toggles
	const [loginToggle, setLoginToggle] = useState(false);
	const [newAccountToggle, setNewAccountToggle] = useState(false);

	// functions
	function storeReturningUser(event) {
		const { value } = event.target;
		setReturningUser(value);
		console.log(returningUser);
	}
	function handleVisiblity(event) {
		const { id } = event.target;
		console.log(id);
		console.log('before', loginToggle, newAccountToggle);
		if (id === 'create-account-toggle') {
			setNewAccountToggle(!newAccountToggle);
		}
		if (id === 'create-login-toggle') {
			setLoginToggle(!loginToggle);
		}
		console.log('after', loginToggle, newAccountToggle);
	}

	function login(username) {
		console.log(username);
		getUserByUsername(username)
			.then((user) => {
				//	console.log(user);
				setUser(user);
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
			</StyledContainer>

			<StyledContainer>
				
					<StyledButton><Link style={{ width: `100%` }} to='/articles'>CONTINUE AS A GUEST		</Link> </StyledButton>
		
				<StyledHR />
				<StyledButton
					id='create-login-toggle'
					onClick={(event) => {
						handleVisiblity(event);
					}}>
					LOGIN
				</StyledButton>

				{/* <h2>Returning member? Login:</h2> */}
				<StyledForm
					open={loginToggle}
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
				</StyledForm>
				{/*



				*/}
						<StyledHR />
				<StyledButton
					id='create-account-toggle'
					onClick={(event) => {
						handleVisiblity(event);
					}}>
					CREATE ACCOUNT
				</StyledButton>
				{/* <h2>New Member? Create your login</h2> */}
				<StyledForm
					open={newAccountToggle}
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
				</StyledForm>
			</StyledContainer>
		</StyledHomePage>
	);
}
export default Homepage;

const StyledHomePage = styled.div`
	background-color: #7fb069; /* Green */
	display: flex;
	flex-flow: row nowrap;
	text-align: center;
	min-height: 95vh;
	@media (max-width: 800px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
const StyledContainer = styled.div`
	width: 50%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;
`;

const StyledH1 = styled.h1`
	font-size: 15vw;
	@media (max-width: 800px) {
		font-size: 30vw;
		min-height: ;
	}
`;
const StyledHR = styled.hr`
	data-content: 'hello';
	width: 30%;
	margin: 2rem;
`;

const StyledButton = styled.button`
	height: fit-content;
	width: 60%;
	min-width: fit-content;
	font-size: 2em;
	border-radius: 20px;
	box-shadow: 5px 5px 8px blue;

	@media (max-width: 800px) {
		width: 90vw;
		font-size: 1.5rem;
	}
`;

const StyledForm = styled.form`
	background-color: thistle;
	border: 1px solid gray;
	border-top: none;
	opacity: ${props => (props.open ? "1" : "0")};
	max-height: ${props => (props.open ? "100%" : "0")};
	overflow: hidden;
	padding: ${props => (props.open ? "15px" : "0 15px")};
	transition: all 0.3s;
 
	p {
	  margin: 0;
	}
`;
