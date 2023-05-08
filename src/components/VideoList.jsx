import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideoList = ({ videos }) => {
	if (!Array.isArray(videos)) {
		return null;
	}

	return (
		<div className='videoContainer'>
			{videos.map((video) => {
				if (!video.id || !video.id.videoId) {
					return null;
				}

				return (
					<div key={video.id.videoId}>
						<Link to={`/videos/${video.id.videoId}`}>
							<div className='highImgContainer'>
								<img
									src={video.snippet.thumbnails.high.url}
									alt='pic'
									className='highImg'
								/>
							</div>
						</Link>
						<div className='smallImgContainer'>
							<img
								src={video.snippet.thumbnails.default.url}
								alt='thumbnail'
								className='smallImg'
							/>
							<h2 className='title1'>{video.snippet.title}</h2>
						</div>
						<h3 className='channelstitle'>{video.snippet.channelTitle}</h3>
						{/* <p className='text-white'>{video.statistics.viewCount}</p> */}
					</div>
				);
			})}
		</div>
	);
};

VideoList.propTypes = {
	videos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.shape({
				videoId: PropTypes.string,
			}),
			snippet: PropTypes.shape({
				thumbnails: PropTypes.shape({
					high: PropTypes.shape({
						url: PropTypes.string.isRequired,
					}).isRequired,
					default: PropTypes.shape({
						url: PropTypes.string.isRequired,
					}).isRequired,
				}).isRequired,
				title: PropTypes.string.isRequired,
			}).isRequired,
		})
	).isRequired,
};

export default VideoList;
