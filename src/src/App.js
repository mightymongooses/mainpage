import { React } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Mongoonomics from './components/Mongoonomics';
import Rarity from './components/Rarity';
import Owership from './components/Owership';
import Collections from './components/Collections';
import RoadMap from './components/RoadMap';
import OurStory from './components/OurStory';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<About />
				<Mongoonomics />
				<Rarity />
				<Owership />
				<Collections />
				<RoadMap />
				<OurStory />
				<Faq />
			</main>
			<Footer />
		</>
	);
}

export default App;
