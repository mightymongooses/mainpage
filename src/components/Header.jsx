import React, { useRef, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
	const ref = useRef();
	const navbarRef = useRef();
	const colapseRef = useRef();

	useEffect(() => {
		const header = ref.current;
		// const sticky = header.offsetTop;
		const scrollcallback = window.addEventListener('scroll', () => {
			if (window.pageYOffset > 200) {
				header.classList.add('sticky');
			} else {
				header.classList.remove('sticky');
			}
		});
		return () => {
			window.removeEventListener('scroll', scrollcallback);
		};
	}, []);

	const handleNavigate = (e) => {
		navbarRef.current.classList.remove('show');
		colapseRef.current.classList.add('collapsed');
	};

	return (
		<header className="header" ref={ref}>
			<Navbar expand="lg">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" ref={colapseRef} />
					<Navbar.Collapse id="basic-navbar-nav" ref={navbarRef}>
						<Nav className="ms-auto">
							<Nav.Link onClick={handleNavigate} href="#features">
								Features
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#the-team">
								The Team
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#story">
								Story
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#my-collections">
								My Collections
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#road-map">
								Roard Map
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#breeding">
								Breeding
							</Nav.Link>
							<Nav.Link onClick={handleNavigate} href="#faq">
								Faq
							</Nav.Link>
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
							<Button className="btn-connect">Connect to MetaMask</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
