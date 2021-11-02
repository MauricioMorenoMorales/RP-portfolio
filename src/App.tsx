import React from 'react';
import { Header } from './components';

const App = () => {
	return (
		<div>
			<Header />
			<p>
				Hola mundo<b className="yellow">Hola</b> <b className="orange">mundo</b>{' '}
			</p>
		</div>
	);
};

export default App;
