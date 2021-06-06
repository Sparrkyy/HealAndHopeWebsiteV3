import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='Navbar'>
			<div className='Navbar-title'>Heal and Hope</div>
			<Link href='/'>
				<div className='Navbar-link'>home</div>
			</Link>
			<Link href='/about'>
				<div className='Navbar-link'>about</div>
			</Link>
			<Link href='/contact'>
				<div className='Navbar-link'>contact</div>
			</Link>
		</div>
	);
};

export default Navbar;
