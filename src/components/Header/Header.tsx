import React, { useState } from 'react';
import { Icons } from '../atoms';
import Styles from './Header.styles';

const Header: React.FC = () => {
	const [opened, setOpened] = useState<boolean>(false);
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
				<section className="header__burger" onClick={() => setOpened(!opened)}>
					<Icons type="burger" />
				</section>
				<section className="header__links">
					<a href="/">Projects</a>
					<a href="/">About Me</a>
					<a href="/">Contact</a>
					<Icons type="linkedin" />
					<Icons type="github" />
				</section>
				{opened && (
					<div className="header--menu">
						<a onClick={() => setOpened(false)} href="/">
							Projects
						</a>
						<a onClick={() => setOpened(false)} href="/">
							About Me
						</a>
						<a onClick={() => setOpened(false)} href="/">
							Contact
						</a>
						<div
							className="header--menu__icons"
							onClick={() => setOpened(false)}
						>
							<Icons type="linkedin" />
							<Icons type="github" />
						</div>
					</div>
				)}
			</div>
		</Styles>
	);
};

export default Header;
