import React from 'react';
import { About, Footer, Header, Hero, Projects, Stats } from './components';

const App = () => {
	return (
		<div>
			<Header />
			<Hero />
			<div id="projects">
				<Projects />
			</div>
			<div id="stats">
				<Stats />
			</div>
			<div id="about">
				<About />
			</div>
			<Footer />
		</div>
	);
};

export default App;
