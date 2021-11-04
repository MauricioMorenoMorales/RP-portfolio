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
				<section className="projec__item__buttons">
					<button>Go to Site</button>
					<div className="project__buttons__ghost">
						View Code
						<Icons type="github" />
					</div>
				</section>
			</article>
		</Styles>
	);
};

export default Project;
