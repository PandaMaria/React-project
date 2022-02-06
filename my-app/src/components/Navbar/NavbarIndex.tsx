import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements' ;

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/main' activeStyle={{color:'purple'}}>
			Main
		</NavLink>
		<NavLink to='/profile' activeStyle={{color:'purple'}}>
			Profil
		</NavLink>
		<NavLink to='/auth' activeStyle={{color:'purple'}}>
			Autentificare
		</NavLink>

		<NavLink to='/login' activeStyle={{color:'purple'}}>
			Login
		</NavLink>
		<NavLink to='/register' activeStyle={{color:'purple'}}>
			Register
		</NavLink>


		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
