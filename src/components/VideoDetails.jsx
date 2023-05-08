import { Link, useParams } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { Watch } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

const VideoDetails = () => {
	const { id } = useParams();
	const [video, setVideo] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(
			`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&key=${
				import.meta.env.VITE_SOME_VALUE
			}`
		)
			.then((response) => response.json())
			.then((data) => {
				setVideo(data.items[0]);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching video:', error);
				setIsLoading(false);
			});
	}, [id]);

	return (
		<div>
			<Link to='/' className='text-red-700 text-2xl lg:text-4xl  '>
				<BsArrowLeftCircleFill className='mx-6 mt-12' />
			</Link>
			{isLoading && (
				<div className='flex items-center justify-center mt-20'>
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
			{!isLoading && !video && (
				<div className='flex items-center justify-center mt-5'>
					<h2 className='text-white'>No video found.</h2>
				</div>
			)}
			{!isLoading && video && (
				<div className='max-w-6xl mx-auto pt-24 px-5 lg:px-0'>
					<div className='grid grid-cols-1 md:grid-cols-2 col-span-2'>
						<a
							href={`https://www.youtube.com/watch?v=${id}`}
							target='_blank'
							rel='noreferrer'>
							{video.snippet.thumbnails.high && (
								<div className='highImgContainer'>
									<img
										src={video.snippet.thumbnails.high.url}
										alt={video.snippet.title}
										className='highImg'
									/>
								</div>
							)}
						</a>
						<div className=''>
							<h2 className='title'>{video.snippet.title}</h2>
							<h3 className='channel'>{video.snippet.channelTitle}</h3>
							<h2 className='description'>{video.snippet.description}</h2>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default VideoDetails;
