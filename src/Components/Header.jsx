import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';
import { Link } from '@reach/router';
import homeButton from '../Images/outline.webp';
import articlesButton from '../Images/newspaper.webp'
import styled from 'styled-components';
function Header() {
	const { user, setUser } = useContext(UserContext);

	return (
		<StyledNav>
			<StyledContainer>
				<Link to='/' className='header__link'>
					{' '}
					<img
						src={homeButton}
						alt='home button'
						height='50'
						width='50'
						className='header__link'
					/>{' '}
				</Link>
				<Link to='/articles' className='header__link'>
					{' '}
					<img
						src={articlesButton}
						alt='articles button'
						height='50'
						width='50'
						className='header__link'
					/>{' '}
				</Link>
			</StyledContainer>
			<StyledContainer>
				<StyledParagraph>Logged in as: {user.username}</StyledParagraph>
				{user.username !== 'guest' ? (
					<StyledButton
						className='header__logout-btn'
						onClick={() => {
							setUser({
								username: 'guest',
								name: 'guest',
								avatar: '',
							});
							console.log('reset to guest');
						}}>
						LOGOUT
					</StyledButton>
				) : (
				
<Link to='/' className='header__link'>
<StyledButton>	LOGIN</StyledButton>
				</Link>

					
				)}
			</StyledContainer>
		</StyledNav>
	);
}
export default Header;

/*
STYLED COMPONENTS

- two styled containers to keep article button and home together and same for login? 

*/
const StyledContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
`;
const StyledParagraph = styled.p`
	color: white;
	padding: 0.1rem 1rem;
`;

const StyledNav = styled.nav`
	display: flex;
	padding: 0.5rem;
	flex-flow: row wrap;
	justify-content: space-between;
	background-color: #ff550d;

	@media (max-width: 500px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const StyledButton = styled.button`
border-radius: 12px;  
border: 2px solid #7FB069;
box-shadow: 2px 5px #63934D;
background-color: white;
padding: 0.5rem;
margin: 0.5rem;
font-size: inherit;
color: black;

:hover {
	background-color: #7FB069; /* Green */
	color: white;

:active {

	box-shadow: 1px 1px #51783F;
	transform: translateY(3px);
  `;
