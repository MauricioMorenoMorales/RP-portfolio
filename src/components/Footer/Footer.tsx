import React from 'react';
import { Icons } from '../atoms';
import Styles from './Footer.styles';

const Footer: React.FC = () => {
	return (
		<Styles>
			<div className="footer">
				<article className="footer__text-links">
					<a href="#projects">Projects</a>
					<a href="#about">About Me</a>
					<a href="#stats">Stats</a>
				</article>
				<article className="footer__icon-links">
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
								.open(
									'https://github.com/MauricioMorenoMorales',
									'_blank',
								)
								?.focus()
						}
					>
						<Icons type="github" />
					</span>
				</article>
			</div>
			<div className="footer-gradient"></div>
		</Styles>
	);
};

export default Footer;
