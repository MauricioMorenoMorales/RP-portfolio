import React from 'react';
import { About, Footer, Header, Hero, Projects, Stats } from './components';

const App = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Projects />
			<Stats />
			<About />
			<Footer />
		</div>
	);
};

export default App;
