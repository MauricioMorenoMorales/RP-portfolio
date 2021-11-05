import React, { useEffect, useState } from 'react';
import Styles from './Projects.styles';
import data from '../../projects.json';
import { IProject } from '../../interfaces/Project.interface';
import { Project } from '../';

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
					profile
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
						className="navigation-buttons__back"
						onClick={() => handleSlice('subtract')}
					>
						back
					</button>
					<button
						className="navigation-buttons__next"
						onClick={() => handleSlice('add')}
					>
						next
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
					profile
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
						className="navigation-buttons__back"
						onClick={() => handleSlice('subtract')}
					>
						back
					</button>
					<button
						className="navigation-buttons__next"
						onClick={() => handleSlice('add')}
					>
						next
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
					profile
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
						className="navigation-buttons__back"
						onClick={() => handleSlice('subtract')}
					>
						back
					</button>
					<button
						className="navigation-buttons__next"
						onClick={() => handleSlice('add')}
					>
						next
					</button>
				</section>
			</Styles>
		);
	}
};

export default Projects;
