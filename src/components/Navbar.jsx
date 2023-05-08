import { RxHamburgerMenu } from 'react-icons/rx';
import icon from '../img/youtube.svg';
import Input from './Input';
import { MdOutlineVideoCall, MdOutlineNotificationsNone } from 'react-icons/md';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ handleSearch }) => {
	const [search, setSearch] = useState('');

	return (
		<nav className='navbarContainer'>
			<div className='logo-icon'>
				<RxHamburgerMenu className='hamburger' />
				<img src={icon} alt='youtube icon' className='image' />
				<h1 className='youtube-heading'>Cr YOUTUBE</h1>
				<sup className='super'>NG</sup>
			</div>
			<Input
				search={search}
				setSearch={setSearch}
				handleSearch={handleSearch}
			/>
			<div className='navNotification'>
				<MdOutlineVideoCall className='navVideo' />
				<div className='navNot'>
					<MdOutlineNotificationsNone className='not' />
					<div className='navNot1'>10+</div>
				</div>
				<div className='user'>Ij</div>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	handleSearch: PropTypes.func.isRequired,
};

export default Navbar;
