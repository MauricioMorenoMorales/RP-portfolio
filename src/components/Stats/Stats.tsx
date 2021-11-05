import React, { useState, useEffect } from 'react';
import Styles from './Stats.styles';

const Stats: React.FC = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<Styles>
			<h2>Languages used over Last Year</h2>
			<p>
				These are the main languages that I have used over the last year, also
				you can check my github profile to view all the code.
			</p>
			<p>
				Currently typescript and javascript, React JSX HTML and CSS based tools
				are the languages that I use the most, but js/ts does not includes
				technologies that I use with the language itself, like{' '}
				<b className="blue">React TSX</b> or{' '}
				<b className="blue">Styled Components</b>, in wich case will act like a
				preprocesor like <b className="blue">Sass</b> or{' '}
				<b className="blue">Stylus</b> both CSS based technologies, also it does
				not includes backend technologies like <b className="blue">Nestjs</b> or{' '}
				<b className="blue">Express</b> and its libraries.
			</p>
			<p>
				Also recently I have enabled the waka-time integration with the
				terminal, so <b className="blue">sh</b> count should be greater, and its
				use should count the use of linux terminal in general, but also
				technologies like <b className="blue">git, npm, yarn, docker</b>, etc...
			</p>
			<div className="stats">
				{width >= 700 ? (
					<figure>
						<embed src="https://wakatime.com/share/@MauricioMoreno22/e47ea4d3-347b-4ca9-ae8e-a79a428461a2.svg"></embed>
					</figure>
				) : (
					<figure>
						<embed src="https://wakatime.com/share/@MauricioMoreno22/f38d892c-5e48-4c0a-a628-27da00921f70.svg"></embed>
					</figure>
				)}
			</div>
		</Styles>
	);
};

export default Stats;
