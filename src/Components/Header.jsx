import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';
import { Link } from '@reach/router';
import homeButton from '../Images/homebutton.png';
import styled from "styled-components";
function Header() {
	const { user, setUser } = useContext(UserContext);

	return (
		<StyledNav>
      {/* <ul  className='header'> */}
			<Link to='/' className="header__link">
				{' '}
				<img
					src={homeButton}
					alt='home button'
					height='50'
					width='50'
					className='header__link'
				/>{' '}
			</Link>
			<p>Logged in as: {user.username}</p>
			<StyledButton
      className="header__logout-btn"
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
      {/* </ul> */}
		</StyledNav>
	);
}
export default Header;

/*
STYLED COMPONENTS

- two styled containers to keep article button and home together and same for login? 

*/
const StyledNav = styled.nav`
display: flex;
padding: 0.5rem;
flex-flow: row wrap;
justify-content: space-between;
background-color: orange;
`;


const StyledButton = styled.button`
  background-color: black;
  font-size: inherit;
  color: white;
  `;

