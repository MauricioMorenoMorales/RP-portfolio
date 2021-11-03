import React from 'react';
import Styles from './About.styles';
import imagePlaceHolder from '../../assets/avatar-placeholder.png';
import { Icons } from '../atoms';

const About = () => {
	return (
		<Styles>
			<h2>About Me</h2>
			<article className="about">
				<section className="about__resources">
					<img
						className="about__resources__image"
						src={imagePlaceHolder}
						alt="Mauricio Moreno"
						title="Mauricio"
					/>
					<div className="about__resources__links">
						<span>
							<Icons type="email" />
						</span>
						<span>
							<Icons type="linkedin" />
						</span>
						<span>
							<Icons type="github" />
						</span>
					</div>
				</section>
				<section className="about__text">
					<p>
						I am a react/typescript developer, actually I want to learn backend
						technologies and continue improving my css habilities
					</p>
					<p>Also I am Musician I play the saxophone and clarinet</p>
					<p>
						I like to study languages, like chinese or german, although at this
						moment I am not studing them, at this moment I prefer to concentrate
						my work on programation and maybe sometime I can go to live In
						another country and learn the local language
					</p>
					<p>
						{' '}
						Also I like trading, i have leearning it for more than 3 years,
						currently I am learning order flow tools, like heatmap footprint and
						times and sales
					</p>
				</section>
			</article>
		</Styles>
	);
};

export default About;
