import React from 'react';
import { IProject } from '../../interfaces/Project.interface';
import { Icons } from '../atoms';
import Styles from './Project.styles';

const Project: React.FC<{ project: IProject }> = ({ project }) => {
	return (
		<Styles>
			<article className="project">
				<figure className="project__image">
					<img
						src={window.location.origin + project.image}
						alt={project.projectName}
					/>
				</figure>
				<section className="project__technologies">
					{project.technologies.map((element, index) => (
						<Icons type={element} />
					))}
				</section>
				<section className="project__text">
					<h3>{project.projectName}</h3>
					<p>{project.description}</p>
				</section>
				<section className="project__buttons">
					<button
						className="button"
						onClick={() => window.open(project.pageLink, '_blank')?.focus()}
					>
						Go to Site
					</button>
					<div
						className="project__buttons__ghost"
						onClick={() => window.open(project.codeLink, '_blank')?.focus()}
					>
						View Code
						<Icons type="github" oneColor />
					</div>
				</section>
			</article>
		</Styles>
	);
};

export default Project;
