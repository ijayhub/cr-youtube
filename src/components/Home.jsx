import VideoList from './VideoList';
import { Watch } from 'react-loader-spinner';
import Slick from './Slick';
import Footer from './Footer';
import Navbar from './Navbar';
import UseFetch from './UseFetch';
import { useState } from 'react';

const Home = () => {
	const [search, setSearch] = useState('');
	const {
		data: videos,
		isLoading,
		error,
	} = UseFetch(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${
			import.meta.env.VITE_SOME_VALUE
		}&maxResults=9`
	);

	const handleSearch = (query) => {
		setSearch(query);
	};

	return (
		<>
			<div className='max-w-7xl mx-auto py-8 px-3 lg:px-2'>
				<Navbar handleSearch={handleSearch} />
				<Slick />
				{isLoading && (
					<div className='flex items-center justify-center mt-5'>
						<Watch
							height='30'
							width='30'
							radius='48'
							color='red'
							ariaLabel='watch-loading'
							wrapperStyle={{}}
							wrapperClassName=''
							visible={true}
						/>
					</div>
				)}
				{error && (
					<div className='text-red-700 text-center md:text-2xl font-mono font-bold mt-3'>
						{error}
					</div>
				)}
				{!isLoading && videos && videos.length > 0 && (
					<VideoList videos={videos} />
				)}
			</div>
			<Footer />
		</>
	);
};

export default Home;
