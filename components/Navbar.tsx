import React, { MouseEventHandler } from "react";
import Link from "next/link";

type Props = {
	handleClose: MouseEventHandler | undefined;
};

const LinkList = ({ handleClose }: Props) => {
	return (
		<>
			<Link href='/'>
				<div className='Navbar-link' onClick={handleClose}>
					Home
				</div>
			</Link>
			<Link href='/about'>
				<div className='Navbar-link' onClick={handleClose}>
					About
				</div>
			</Link>
			<Link href='/thechildren'>
				<div className='Navbar-link' onClick={handleClose}>
					The Children
				</div>
			</Link>
			<Link href='/contact'>
				<div className='Navbar-link' onClick={handleClose}>
					Contact
				</div>
			</Link>
		</>
	);
};
const Navbar = () => {
	return (
		<div className='Navbar'>
			<h1 className='Navbar-title'>Heal & Hope.</h1>
			<div className='Navbar-links'>
				<LinkList handleClose={undefined} />
			</div>
			<NavbarDropdown />
		</div>
	);
};

const NavbarDropdown = () => {
	const [open, setOpen] = React.useState(false);

	const setMenuClosed = () => {
		setOpen(false);
	};

	return (
		<div className='Navbar-Menu-Dropdown-Super-Container'>
			<img
				className='Navbar-Menu-Dropdown-Burger'
				src='/hamburger-removebg-preview.png'
				alt='dropdown menu icon, click here to open'
				onClick={() => setOpen(!open)}
			></img>
			{open && (
				<div className='Navbar-Menu-Dropdown-Container'>
					{" "}
					<LinkList handleClose={setMenuClosed} />
				</div>
			)}
		</div>
	);
};

export default Navbar;
