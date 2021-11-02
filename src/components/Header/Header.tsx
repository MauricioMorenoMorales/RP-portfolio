import React from 'react';
import { Icons } from '../atoms';
import Styles from './Header.styles';

const Header: React.FC = () => {
	return (
		<Styles>
			<div className="header">
				<section className="header__logo">
					<p>
						<b className="yellow">Mauricio &gt;</b>{' '}
						<b className="desaturated-yellow">.Emmanuel</b>{' '}
						<b className="purple">&#123;</b>
					</p>
					<p className="i1">
						<b>moreno: </b>
						<b className="blue">$morales</b>;
					</p>
					<p>
						<b className="purple">&#125;</b>
					</p>
				</section>
				<section className="header__burger">
					<Icons type="burger" />
				</section>
				<section className="header__links">
					<a href="/">Projects</a>
					<a href="/">About Me</a>
					<a href="/">Contact</a>
					<Icons type="linkedin" />
					<Icons type="github" />
				</section>
			</div>
		</Styles>
	);
};

export default Header;
