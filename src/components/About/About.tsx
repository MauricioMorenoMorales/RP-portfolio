import React from 'react';
import Styles from './About.styles';
import imagePlaceHolder from '../../assets/avatar-placeholder.png';
import mauricio from '../../assets/mauricio.png';
import { Icons } from '../atoms';

const About = () => {
	return (
		<Styles>
			<h2>About Me</h2>
			<article className="about">
				<section className="about__resources">
					<img
						className="about__resources__image"
						src={mauricio}
						alt="Mauricio Moreno"
						title="Mauricio"
					/>
					<div className="about__resources__links">
						<span
							onClick={() =>
								navigator.clipboard
									.writeText('MauricioMorenoMorales@protonmail.ch')
									.then(() => alert('Email Copied To Clipboard'))
									.catch(error => alert(error))
							}
						>
							<Icons type="email" />
						</span>
						<span
							onClick={() =>
								window
									.open(
										'https://www.linkedin.com/in/mauricio-moreno-morales-8565051aa/',
										'_blank',
									)
									?.focus()
							}
						>
							<Icons type="linkedin" />
						</span>
						<span
							onClick={() =>
								window
									.open('https://github.com/MauricioMorenoMorales', '_blank')
									?.focus()
							}
						>
							<Icons type="github" />
						</span>
					</div>
				</section>
				<section className="about__text">
					<p>
						I am a react/typescript developer, I like to learn things because I
						have fun doing It, every day gets easier to learn new things and
						that motivates me to continue doing the same
					</p>
					<p>
						Also I am Musician I play the saxophone and clarinet since I have 9
						years but I started to study professionaly at my 17s
					</p>
					<p>
						I like to study languages, like chinese or german, although at this
						moment I am not studing them, at this moment I prefer to concentrate
						my work on programation and maybe sometime I can go to live In
						another country and learn the local language
					</p>
					<p>
						{' '}
						Also I like trading, i have learned it for more than 3 years,
						currently I am learning order flow tools, like heatmap footprint and
						times and sales
					</p>
				</section>
			</article>
		</Styles>
	);
};

export default About;
