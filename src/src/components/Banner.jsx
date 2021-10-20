import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.scss';

const Banner = () => {
	return (
		<section className="banner" id="features">
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src="./images/final.gif" alt="" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="./images/silderbanner.jpg" alt="" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="./images/silderbanner3.jpg" alt="" />
				</Carousel.Item>
			</Carousel>
			<a href="#about" className="scroll-down">
				<span className="icon">
					<i className="fas fa-angle-down" />
				</span>
				{/* <span className="text">SCROLL DOWN</span> */}
			</a>
		</section>
	);
};

export default Banner;
