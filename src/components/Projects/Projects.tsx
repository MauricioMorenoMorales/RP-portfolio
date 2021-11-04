import React from 'react';
import Styles from './Projects.styles';
import data from '../../projects.json';
import { IProject } from '../../interfaces/Project.interface';
import { Icons } from '../atoms';

const Projects: React.FC = () => {
	return (
		<Styles>
			<article className="projects">
				{data.map((project: IProject, index) => (
					<article className="projects__item">
						<figure className="project__item__image">
							<img
								src={window.location.origin + project.image}
								alt={project.projectName}
							/>
						</figure>
						<section className="project__item__technologies">
							{project.technologies.map((element, index) => (
								<Icons type={element} />
							))}
						</section>
						<section className="project__item__text">
							<h3>{project.projectName}</h3>
							<p>{project.description}</p>
						</section>
						<section className="projec__item__buttons">
							<button>Go to Site</button>
							<div className="project__item__buttons__ghost">
								View Code
								<Icons type="github" />
							</div>
						</section>
					</article>
				))}
			</article>
		</Styles>
	);
};

export default Projects;
