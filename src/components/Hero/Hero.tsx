import React from 'react';
import Styles from './Hero.styles';

const Hero: React.FC = () => {
	return (
		<Styles>
			<article className="hero">
				<section className="hero__text">
					<h1>
						Hi I am <b className="blue">Mauricio</b> Moreno, I am a{' '}
						<b className="blue">Frontend</b> Developer
					</h1>
					<button>Look my Work</button>
				</section>
			</article>
			<article className="hero__image">
				<section className="hero__image__first-panel-p">
					<p><b className="yellow">&#123;</b></p>

					{/* name */}
					<p className="i1"><b className="orange">"name"</b> : <b className="purple">&#123;</b></p>
					<p className="i2"><b className="orange">"firstName"</b> : <b className="green">"mauricio"</b>,</p>
					<p className="i2"><b className="orange">"lastName"</b> : <b className="green">"moreno"</b></p>
					<p className="i1"><b className="purple">&#125;</b></p>
					{/* country */}
					<p className="i1"><b className="orange">"country"</b> : <b className="green">"mexico"</b>,</p>
					{/* roles */}
					<p className="i1"><b className="orange">"roles"</b> : <b className="purple">[</b></p>
					<p className="i2"><b className="orange">"frontend"</b>,</p>
					<p className="i2"><b className="orange">"basic ui-ux/design"</b>,</p>
					<p className="i2"><b className="orange">"basic backend with node"</b></p>
					<p className="i1"><b className="purple">]</b></p>
						{/* languages */}
					<p className="i1"><b className="orange">"languages"</b> : <b className="purple">&#123;</b></p>
					<p className="i2"><b className="orange">"spanish"</b> : <b className="green">"native"</b>,</p>
					<p className="i2"><b className="orange">"english"</b> : <b className="green">"advanced"</b></p>
					<p className="i2"><b className="orange">"chinese"</b> : <b className="green">"A2"</b></p>
					<p className="i2"><b className="orange">"german"</b> : <b className="green">"A2"</b></p>
					<p className="i1"><b className="purple">&#125;</b></p>

					<p><b className="yellow">&#125;</b></p>
				</section>
				<pre className="hero__image__first-panel">{`
{
  "name": {
    "firstName": "mauricio",
    "lastName": "moreno"
  }
  "country": "mexico",
  "roles": [
    "frontend",
    "basic ui-ux/design",
    "basic backend with node"
  ],
  "languages": {
    "spanish": "native",
    "english": "advanced",
    "chinese": "A2",
    "german": "A2"
  }
}`
}
				</pre>
				<pre className="hero__image__second-panel">{`
{
  "fontendTechnologies": [
    "react",
    "typescript",
    "redux-toolkit",
    "sass, stylus",
    "webpack"
  ],
  "backendTechnologies": [
    "express",
    "nestjs",
    "docker",
    "sql"
  ],
  "designTechnologies": [
    "figma"
  ],
  "currentlyLearning": [
    "backend with nestjs",
    "sql",
  ],
  "interestedOn": [
    "elixir",
    "python",
    "haskell",
    "ui-design"
  ]
}
`}
				</pre>
			</article>
		</Styles>
	);
};

export default Hero;
