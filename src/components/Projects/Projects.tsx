import React, { useEffect, useState } from 'react';
import Styles from './Projects.styles';
import data from '../../projects.json';
import { IProject } from '../../interfaces/Project.interface';
import { Icons } from '../atoms';
import { Project } from '../';

const Projects: React.FC = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	if (width >= 1300)
		return (
			<Styles>
				<article className="projects desktop">
					{data.map((project: IProject, index) => (
						<Project project={project} />
					))}
				</article>
			</Styles>
		);
	if (width >= 768)
		return (
			<Styles>
				<article className="projects tablet">
					{data.map((project: IProject, index) => (
						<Project project={project} />
					))}
				</article>
			</Styles>
		);
	else
		return (
			<Styles>
				<article className="projects mobile">
					{data.map((project: IProject, index) => (
						<Project project={project} />
					))}
				</article>
			</Styles>
		);
};

export default Projects;
