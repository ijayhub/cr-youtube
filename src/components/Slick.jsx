import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import yt1 from '../img/yt1.jpg';
import yt2 from '../img/yt2.jpg';
import yt3 from '../img/yt3.png'
import yt4 from '../img/yt4.jpg';
import yt5 from '../img/yt5.jpg';
import yt6 from '../img/yt6.jpg';
export default class AutoPlay extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			speed: 2000,
			autoplaySpeed: 2000,
			cssEase: 'linear',
		};
		return (
			<div className='slickContainer'>
				<Slider {...settings}>
					<div>
						<img src={yt1} alt='image' className='slick' />
					</div>
					<div>
						<img src={yt2} alt='image' className='slick' />
					</div>
					<div>
						<img src={yt3} alt='image' className='slick' />
					</div>
					<div>
						<img src={yt4} alt='image' className='slick' />
					</div>
					<div>
						<img src={yt5} alt='image' className='slick' />
					</div>
					<div>
						<img src={yt6} alt='image' className='slick' />
					</div>
				</Slider>
			</div>
		);
	}
}
