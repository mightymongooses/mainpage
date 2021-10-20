import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Collections.scss';

const Collections = () => {
	const options = {
		additionalTransfrom: 0,
		arrows: false,
		autoPlay: true,
		autoPlaySpeed: 5000,
		centerMode: false,
		className: 'slider',
		containerClass: 'container-with-dots',
		draggable: true,
		focusOnSelect: false,
		infinite: true,
		itemClass: 'slider-item',
		keyBoardControl: true,
		minimumTouchDrag: 80,
		renderButtonGroupOutside: false,
		renderDotsOutside: false,
		responsive: {
			desktop: {
				breakpoint: {
					max: 3000,
					min: 1024
				},
				items: 5,
				partialVisibilityGutter: 40
			},
			mobile: {
				breakpoint: {
					max: 464,
					min: 0
				},
				items: 1,
				partialVisibilityGutter: 30
			},
			tablet: {
				breakpoint: {
					max: 1024,
					min: 464
				},
				items: 2,
				partialVisibilityGutter: 30
			}
		},
		showDots: false,
		sliderClass: '',
		slidesToSlide: 2,
		swipeable: true
	};

	const sliders = [
		{
			id: 1,
			image: './images/s1.png'
		},
		{
			id: 2,
			image: './images/s2.png'
		},
		{
			id: 3,
			image: './images/s3.png'
		},
		{
			id: 4,
			image: './images/s4.png'
		},
		{
			id: 5,
			image: './images/s5.png'
		},
		{
			id: 6,
			image: './images/s3.png'
		}
	];

	return (
		<section className="collections" id="my-collections">
			<Container className="collections-container">
				<Button size="lg" className="btn-collect text-uppercase">
					Check on opensea
				</Button>
				<Row>
					<Col sm="12" md="12">
						<div className="collections-header text-center">
							<h3>explore our</h3>
							<h2>collections</h2>
						</div>
					</Col>

					<Col sm="12" md="12">
						<div className="collections-body">
							<Carousel className="slider" {...options}>
								{sliders &&
									sliders.map((slide) => (
										<div key={slide.id} className="slider-item">
											<Image src={slide.image} fluid />
										</div>
									))}
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Collections;
