import { useState } from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import VideoDetails from './components/VideoDetails';

const App = () => {
	const [query, setQuery] = useState('');

	return (
		<Routes>
			<Route path='/' element={<Home query={query} setQuery={setQuery} />} />
			<Route path='/videos/:id' element={<VideoDetails />} />
		</Routes>
	);
};

export default App;
