import React from 'react';
import { Icons } from '../atoms';
import Styles from './Footer.styles';

const Footer: React.FC = () => {
	return (
		<Styles>
			<div className="footer">
				<article className="footer__text-links">
					<a href="/">Projects</a>
					<a href="/">About Me</a>
					<a href="/">Contact</a>
				</article>
				<article className="footer__icon-links">
					<span>
						<Icons type="linkedin" />
					</span>
					<span>
						<Icons type="github" />
					</span>
				</article>
			</div>
		</Styles>
	);
};




export default Footer;
