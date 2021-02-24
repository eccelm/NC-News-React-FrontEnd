import React, { useState, useReducer } from 'react';

export const initialState = {
	user: 'guest',
	loading: false,
	errorMessage: null,
};
/*
UserReducer(intiialState, action)
Remember creating a function that takes in two things:

1. Case 1: Login button on landing page
- Takes the inputted value
- Requests to aipi for users


2. Case 2: it matches!
	- Update context

3. Case 3:
		- Give error message explaining it doesn't exist

4. Case 4:
	- Return user details to a string of 'guest'
*/
export const UserReducer = (initialState, action) => {
	switch (action.type) {
		case 'REQUEST_LOGIN':
			return {
				...initialState,
				loading: true,
			};
		case 'LOGIN_SUCCESS':
			return {
				...initialState,
				user: action.payload.user,
				loading: false,
			};
		case 'LOGOUT':
			return {
				...initialState,
				user: '',
			};

		case 'LOGIN_ERROR':
			return {
				...initialState,
				loading: false,
				errorMessage: action.error,
			};

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
