import React, { useEffect, useState } from 'react';
import Styles from './Projects.styles';
import data from '../../data.json';
import { IProject } from '../../interfaces/Project.interface';
import { Project } from '../';
import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';

const Projects: React.FC = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [desktopSlice, setDesktopSlice] = useState<{
		start: number;
		end: number;
	}>({ start: 0, end: 5 });
	const [tabletSlice, setTabletSlice] = useState<{
		start: number;
		end: number;
	}>({ start: 0, end: 3 });
	const [mobileSlice, setMobileSlice] = useState<{
		start: number;
		end: number;
	}>({ start: 0, end: 1 });
	// This function determines the slicer behavior in all layouts
	const handleSlice = (action: 'add' | 'subtract') => {
		if (action === 'add') {
			//Add all slices
			if (mobileSlice.end + 1 > data.length) return;
			setMobileSlice(prevState => ({
				start: prevState.start + 1,
				end: prevState.end + 1,
			}));
			if (tabletSlice.end + 1 > data.length) return;
			setTabletSlice(prevState => ({
				start: prevState.start + 1,
				end: prevState.end + 1,
			}));
			if (desktopSlice.end + 1 > data.length) return;
			setDesktopSlice(prevState => ({
				start: prevState.start + 1,
				end: prevState.end + 1,
			}));
		} else {
			// subtracts all slices
			if (mobileSlice.start - 1 < 0) return;
			setMobileSlice(prevState => ({
				start: prevState.start - 1,
				end: prevState.end - 1,
			}));
			if (tabletSlice.start - 1 < 0) return;
			setTabletSlice(prevState => ({
				start: prevState.start - 1,
				end: prevState.end - 1,
			}));
			if (desktopSlice.start - 1 < 0) return;
			setDesktopSlice(prevState => ({
				start: prevState.start - 1,
				end: prevState.end - 1,
			}));
		}
	};
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	if (width >= 1300) {
		return (
			<Styles>
				<h2>Projects</h2>
				<p>
					Some of the projects that i have maded, there is more on my github
					profile. <br />
					Also you can ask me for my <b className="blue">Figma</b> and{' '}
					<b className="blue">UI/UX</b> experience, my focus is in frontend
					development but also I like design
					<br />
					Coming soon backend Projects...
				</p>
				<article className="projects desktop">
					{data
						.slice(desktopSlice.start, desktopSlice.end)
						.map((project: IProject, index) => (
							<Project project={project} key={index} />
						))}
				</article>
				<section className="navigation-buttons">
					<button
						className="navigation-buttons__item back"
						title="back"
						onClick={() => handleSlice('subtract')}
					>
						<img src={LeftArrow} alt="" />
					</button>
					<button
						className="navigation-buttons__item next"
						title="next"
						onClick={() => handleSlice('add')}
					>
						<img src={RightArrow} alt="" />
					</button>
				</section>
			</Styles>
		);
	}
	if (width >= 768) {
		return (
			<Styles>
				<h2>Projects</h2>
				<p>
					Some of the projects that i have maded, there is more on my github
					profile. <br />
					Also you can ask me for my <b className="blue">Figma</b> and{' '}
					<b className="blue">UI/UX</b> experience, my focus is in frontend
					development but also I like design
					<br />
					Coming soon backend Projects...
				</p>
				<article className="projects tablet">
					{data
						.slice(tabletSlice.start, tabletSlice.end)
						.map((project: IProject, index) => (
							<Project project={project} key={index} />
						))}
				</article>
				<section className="navigation-buttons">
					<button
						className="navigation-buttons__item back"
						title="back"
						onClick={() => handleSlice('subtract')}
					>
						<img src={LeftArrow} alt="" />
					</button>
					<button
						className="navigation-buttons__item next"
						title="next"
						onClick={() => handleSlice('add')}
					>
						<img src={RightArrow} alt="" />
					</button>
				</section>
			</Styles>
		);
	} else {
		return (
			<Styles>
				<h2>Projects</h2>
				<p>
					Some of the projects that i have maded, there is more on my github
					profile. <br />
					Also you can ask me for my <b className="blue">Figma</b> and{' '}
					<b className="blue">UI/UX</b> experience, my focus is in frontend
					development but also I like design
					<br />
					Coming soon backend Projects...
				</p>
				<article className="projects mobile">
					{data
						.slice(mobileSlice.start, mobileSlice.end)
						.map((project: IProject, index) => (
							<Project project={project} key={index} />
						))}
				</article>
				<section className="navigation-buttons">
					<button
						className="navigation-buttons__item back"
						title="back"
						onClick={() => handleSlice('subtract')}
					>
						<img src={LeftArrow} alt="" />
					</button>
					<button
						className="navigation-buttons__item next"
						title="next"
						onClick={() => handleSlice('add')}
					>
						<img src={RightArrow} alt="" />
					</button>
				</section>
			</Styles>
		);
	}
};

export default Projects;
