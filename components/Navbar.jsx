import React from 'react';
import Link from 'next/link';

const LinkList = () => {
	return (
		<>
			<Link href='/'>
				<div className='Navbar-link'>Home</div>
			</Link>
			<Link href='/about'>
				<div className='Navbar-link'>About</div>
			</Link>
			<Link href='/thechildren'>
				<div className='Navbar-link'>The Children</div>
			</Link>
			<Link href='/contact'>
				<div className='Navbar-link'>Contact</div>
			</Link>
		</>
	);
};
const Navbar = () => {
	return (
		<div className='Navbar'>
			<h1 className='Navbar-title'>Heal and Hope</h1>
			<div className='Navbar-links'>
				<LinkList />
			</div>
			<NavbarDropdown />
		</div>
	);
};

const NavbarDropdown = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<div className='Navbar-Menu-Dropdown-Super-Container'>
			<h4
				className='Navbar-Menu-Dropdown-Button'
				onClick={() => setOpen(!open)}
			>
				Menu
			</h4>
			{open && (
				<div className='Navbar-Menu-Dropdown-Container'>
					{' '}
					<LinkList />
				</div>
			)}
		</div>
	);
};

export default Navbar;
