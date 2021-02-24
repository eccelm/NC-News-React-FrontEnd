import React, { useContext, useState } from 'react';
import { Link } from '@reach/router';
//import { getUsersByUsername } from '../api';
import UserContext from '../Context/UserContext';

function Homepage() {
	const { message, user } = useContext(UserContext);
	const [newUser, setNewUser] = useState({
		name: '',
		username: '',
		avatar:
			'https://cdn.pixabay.com/photo/2017/01/31/17/48/animal-2025913_960_720.png',
	});
	//const [validated, setValidated] = useState(false);
  
	function handleChange(event) {
		const { value, name } = event.target;
		console.log(value, name, newUser);
		setNewUser((prevUser)=>{
return {...prevUser, [name]: value}
		});
		console.log(newUser);
	}
	function handleNewUser(event) {
		event.preventDefault();
		console.log(newUser);
	}
	return (
		<div className='homepage'>
			<h1>NC NEWS</h1>
			<p>{message} --a message from the context</p>
			<p>The current user is: {user}</p>
			<h2>Hello and welcome to the ncnews app!</h2>
			<Link to='/articles'>
				<button>Continue as a guest</button>
			</Link>
			<h2>Returning member? Login:</h2>
			<form>
				<label htmlFor='newusername'>Username:</label>
				<input
					type='text'
					name='username'
					id='newusername'
					onChange={handleChange}
					minLength='6'
					maxLength='20'
					pattern='[A-Za-z0-9]+'
				/>
				<input type='submit' value='Login' />
			</form>
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
						onChange={handleChange}
						pattern='[\w ]+'
						minLength='6'
						maxLength='20'
					/>
					<label htmlFor='newusername'>Username:</label>
					<input
						type='text'
						name='username'
						id='newusername'
						onChange={handleChange}
						minLength='6'
						maxLength='20'
						pattern='[A-Za-z0-9]+'
					/>
					<input type='submit' value='create your account' />
				</fieldset>
			</form>
		</div>
	);
}
export default Homepage;
