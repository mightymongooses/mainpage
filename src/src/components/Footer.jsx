import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
	return (
        <>
		<footer className="footer">
			<Container>
				<Row>
					<Col sm="12" md="12">
						<div className="footer-header text-center">
							<h2>the rarest</h2>
							<h3>villans</h3>
						</div>
						<div className="footer-body text-center">
							<p> 
								Not much is known about these villans at this time. It is up to us to find out their
								story and uncover their secrets. <br />
								For now, we just know about The Villans are on its way. They have unique traits and
								stand out completely from the mongooses. <br /> Lets wait for their reveal. By accquring
								one of these villans, you will be eligible to join a special group of villans and take
								part in community voting
							</p>

							<br />

							<h4>GET READY TO FIND 5 OF THE RAREST VILLANS</h4>

							<Row className="justify-content-center">
								<Col sm="12" md="5">
									<div className="foo">
										<div className="foo-icon">
											<Image src="./images/light.png" />
										</div>
										<div className="foo-body text-start">
											<h5>
												Unique art with the <br />
												greatest rarity
											</h5>
										</div>
									</div>
								</Col>
								<Col sm="12" md="5">
									<div className="foo">
										<div className="foo-icon">
											<Image src="./images/light.png" />
										</div>
										<div className="foo-body text-start">
											<h5>
												VIP access to a special <br />
												chat in Discord
											</h5>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
			<div className="copyright">
				<Container>
					<Row>
						<Col sm="12" md="8">
							<div className="copyright-layout">
								<div className="copyright-icon">
									<Image src="./images/copyright.png" />
								</div>
                                    <div className="copyright-content">
                                        <h6>© Mighty mongooses. 2021, All rights reserved , </h6>
                                        <h6>Contact information - contact@mightymongooses.com</h6>
                                    </div>
							</div>


                            <ul className="social">
								<li className="social-item">
									<a href="#" className="social-link">
										<i className="fab fa-twitter" />
									</a>
								</li>
								<li className="social-item">
									<a href="#" className="social-link">
										<i className="fab fa-instagram" />
									</a>
								</li>
								<li className="social-item">
									<a href="#" className="social-link">
										<i className="fab fa-facebook" />
									</a>
								</li>
							</ul>


						</Col>
                        <Col sm="12" md="4" className="developed-by">
                            <p>Developed by - Team Mongooses</p>
                        </Col>
					</Row>
				</Container>
			</div>
            </>
	);
};

export default Footer;
