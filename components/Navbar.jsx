import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='Navbar'>
			<h1 className='Navbar-title'>Heal and Hope</h1>
			<div className='Navbar-links'>
				<Link href='/'>
					<div className='Navbar-link'>home</div>
				</Link>
				<Link href='/about'>
					<div className='Navbar-link'>about</div>
				</Link>
				<Link href='/thechildren'>
					<div className='Navbar-link'>the children</div>
				</Link>
				<Link href='/contact'>
					<div className='Navbar-link'>contact</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
