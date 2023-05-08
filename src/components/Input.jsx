import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMicrophone } from 'react-icons/hi';

const Input = ({ search, setSearch, handleSearch }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(search);
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Search'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='input'
				autoComplete='off'
			/>
			<button type='submit' className='search'>
				<AiOutlineSearch className='search1' />
			</button>
			<span className='mic'>
				<button className='move'>
					<HiMicrophone className='move1' />
				</button>
			</span>
		</form>
	);
};

Input.propTypes = {
	search: PropTypes.string.isRequired,
	setSearch: PropTypes.func.isRequired,
	handleSearch: PropTypes.func.isRequired,
};

export default Input;
