import React, { useContext, useState } from 'react';
import { Link } from '@reach/router';
import UserContext from '../Context/UserContext';
import { getUserByUsername } from '../api';
import styled from 'styled-components';
//import {login} from '../Context/userFunctions'

function Homepage() {
	// context
	const { setUser } = useContext(UserContext);
	// state for user context
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
	const [awaitingRes, setAwaitingRes] = useState(false);
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
				setUser(user);
			})
			.catch((err) => {
				console.log(err);
			});
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
			<GreenStyledContainer>
				<StyledH1>NC NEWS.</StyledH1>
			</GreenStyledContainer>

			<StyledContainer>
				<YellowStyledButton>
					<Link
						style={{ width: `100%`, color: `black`, textDecoration: `none` }}
						to='/articles'>
						CONTINUE AS A GUEST{' '}
					</Link>{' '}
				</YellowStyledButton>

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
					<div className='form-group'>
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
					</div>
					<button type='submit' value='Login'>
						Login
					</button>
				</StyledForm>
				{/*



				*/}
				<StyledHR />
				<OrangeStyledButton
					id='create-account-toggle'
					onClick={(event) => {
						handleVisiblity(event);
					}}>
					CREATE ACCOUNT
				</OrangeStyledButton>
				{/* <h2>New Member? Create your login</h2> */}
				<StyledForm
					open={newAccountToggle}
					style={{ display: 'flex', flexDirection: 'column' }}
					onSubmit={handleNewUser}>
					<fieldset>
						<legend>Create your new user login here.</legend>
						<ul>
							<li>Minimum 5 characters</li>
							<li>Only characters a-z A-Z 0-9 can be used</li>
						</ul>
						<div className='form-group'>
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
						</div>
						<div className='form-group'>
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
						</div>
						<button type='submit' value='create your account'>
							Create Account
						</button>
					</fieldset>
				</StyledForm>
			</StyledContainer>
		</StyledHomePage>
	);
}
export default Homepage;

const StyledHomePage = styled.div`
	/*background-color: #7fb069; /* Green */
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

const GreenStyledContainer = styled(StyledContainer)`
	/*background-color: #7fb069;*/
	font-family: 'Cutive Mono', monospace;
`;
const StyledH1 = styled.h1`
	font-size: 15vw;
	@media (max-width: 800px) {
		font-size: 30vw;
		min-height: ;
	}
`;
const StyledHR = styled.hr`
	width: 30%;
	margin: 2rem;
`;

const StyledButton = styled.button`
	height: 3rem;
	width: 60%;
	min-width: fit-content;
	background-color: #fff;
	font-size: 2em;
	border-radius: 20px;
	border: orange 1px;
	box-shadow: 5px 5px 8px #425494;

	@media (max-width: 800px) {
		width: 90vw;
		font-size: 1.5rem;
	}
`;
const YellowStyledButton = styled(StyledButton)`
	box-shadow: 5px 5px 8px #f0cc11;
`;
const OrangeStyledButton = styled(StyledButton)`
	box-shadow: 5px 5px 8px #fb951d;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	border: 1px solid gray;
	min-width: 50%;
	border: none;
	opacity: ${(props) => (props.open ? '1' : '0')};
	max-height: ${(props) => (props.open ? '100%' : '0')};
	overflow: hidden;
	padding: ${(props) => (props.open ? '15px' : '0 15px')};
	transition: all 0.3s;
	border-radius: 6px;
	box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.1);
	justify-content: center;
	align-items: center;

	.form-group {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 5px;
	}
	label {
		min-width: 25%;
		padding-right: 5px;
	}
	input {
		background: #fff;
		border-radius: 20px;
		border: none;
		box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
		line-height: 1.45;
		outline: none;
		padding: 0.75rem;
	}

	input:hover {
		border: 1px solid grey;
	}

	input:focus {
		color: #4b515d;
		border: 1px solid #b8b6b6;
		box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
			0px 0px 8px rgba(0, 0, 0, 0.2);
	}
	button {
		margin: 1rem;
		padding: 0.75rem;
		border-radius: 10px;
		border: 0;
		background: #fb951d;
		font-size: 1.2em;
		color: #fff;
		text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
	}
	button:hover {
		background-color: #ff550d;
	}
`;
