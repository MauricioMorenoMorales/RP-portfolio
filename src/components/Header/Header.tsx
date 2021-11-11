import React, { useState, useEffect } from 'react';
import { Icons } from '../atoms';
import Styles from './Header.styles';

const Header: React.FC = () => {
	const [opened, setOpened] = useState<boolean>(false);

	const closeMenuWhenScrolls = (): void => {
		window.scrollY > 500 && setOpened(false);
	};

	useEffect(() => {
		document.addEventListener('scroll', closeMenuWhenScrolls);
		return () => {
			document.addEventListener('scroll', closeMenuWhenScrolls);
		};
	}, []);

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
					<a href="#projects">Projects</a>
					<a href="#about">About Me</a>
					<a href="#stats">Stats</a>
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
				</section>
				{opened && (
					<div className="header--menu">
						<a onClick={() => setOpened(false)} href="#projects">
							Projects
						</a>
						<a onClick={() => setOpened(false)} href="#about">
							About Me
						</a>
						<a onClick={() => setOpened(false)} href="#stats">
							Stats
						</a>
						<div
							className="header--menu__icons"
							onClick={() => setOpened(false)}
						>
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
					</div>
				)}
				{opened && (
					<div
						className="header--menu--modal"
						onClick={() => setOpened(false)}
					></div>
				)}
			</div>
		</Styles>
	);
};

export default Header;
