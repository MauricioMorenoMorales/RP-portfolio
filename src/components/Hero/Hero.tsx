import React from 'react';
import Styles from './Hero.styles';

const Hero: React.FC = () => {
	return (
		<Styles>
			<div className="hero">
				<article className="hero__text">
					<h1>
						Hi I am <b className="blue">Mauricio</b> Moreno, I am a{' '}
						<b className="blue">Frontend</b> Developer
					</h1>
					<button
						className="button-big"
						onClick={() =>
							navigator.clipboard
								.writeText('MauricioMorenoMorales@protonmail.ch')
								.then(() => alert('Email Copied To Clipboard'))
								.catch(error => alert(error))
						}
					>
						Get My Email
					</button>
				</article>
				<article className="hero__image">
					<section className="hero__image__first-panel">
					{/* {
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
							} */}
						<p><b className="yellow">&#123;</b></p>
							{/* name */}
							<p className="i1"><b className="orange">"name"</b> : <b className="purple">&#123;</b></p>
								<p className="i2"><b className="orange">"firstName"</b> : <b className="green">"mauricio"</b>,</p>
								<p className="i2"><b className="orange">"lastName"</b> : <b className="green">"moreno"</b></p>
							<p className="i1"><b className="purple">&#125;</b>,</p>
							{/* country */}
							<p className="i1"><b className="orange">"country"</b> : <b className="green">"mexico"</b>,</p>
							{/* roles */}
							<p className="i1"><b className="orange">"roles"</b> : <b className="purple">[</b></p>
								<p className="i2"><b className="green">"frontend"</b>,</p>
								<p className="i2"><b className="green">"basic ui-ux/design"</b>,</p>
								<p className="i2"><b className="green">"basic backend with node"</b></p>
							<p className="i1"><b className="purple">]</b>,</p>
								{/* languages */}
							<p className="i1"><b className="orange">"languages"</b> : <b className="purple">&#123;</b></p>
								<p className="i2"><b className="orange">"spanish"</b> : <b className="green">"native"</b>,</p>
								<p className="i2"><b className="orange">"english"</b> : <b className="green">"advanced"</b>,</p>
								<p className="i2"><b className="orange">"chinese"</b> : <b className="green">"A2"</b>,</p>
								<p className="i2"><b className="orange">"german"</b> : <b className="green">"A2"</b></p>
							<p className="i1"><b className="purple">&#125;</b></p>
						<p><b className="yellow">&#125;</b></p>
					</section>
					<section className="hero__image__second-panel">
					{/* {
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
									"currentlyPracticing": [
										"backend with nestjs",
										"sql",
									],
									"interestedOn": [
										"elixir",
										"python",
										"haskell",
										"ui-design"
									]
								} */}
						<p><b className="yellow">&#123;</b></p>
							{/* frontendTechnologies */}
							<p className="i1"><b className="orange">"frontendTechnologies"</b> : <b className="purple">[</b></p>
								<p className="i2"><b className="green">"react"</b>,</p>
								<p className="i2"><b className="green">"typescript"</b>,</p>
								<p className="i2"><b className="green">"redux-toolkit"</b>,</p>
								<p className="i2"><b className="green">"sass, stylus"</b>,</p>
								<p className="i2"><b className="green">"webpack"</b></p>
							<p className="i1"><b className="purple">]</b>,</p>
							{/* backendTechnologies */}
							<p className="i1"><b className="orange">"backendTechnologies"</b> : <b className="purple">[</b></p>
								<p className="i2"><b className="green">"express"</b>,</p>
								<p className="i2"><b className="green">"nestjs"</b>,</p>
								<p className="i2"><b className="green">"docker"</b>,</p>
								<p className="i2"><b className="green">"sql"</b></p>
							<p className="i1"><b className="purple">]</b>,</p>
							{/* currentlyPracticing */}
							<p className="i1"><b className="orange">"currentlyPracticing"</b> : <b className="purple">[</b></p>
								<p className="i2"><b className="green">"backend with nestjs"</b>,</p>
								<p className="i2"><b className="green">"sql"</b></p>
							<p className="i1"><b className="purple">]</b>,</p>
							{/* interestedOn */}
							<p className="i1"><b className="orange">"interestedOn"</b> : <b className="purple">[</b></p>
								<p className="i2"><b className="green">"elixir"</b>,</p>
								<p className="i2"><b className="green">"python"</b>,</p>
								<p className="i2"><b className="green">"ui-design"</b></p>
							<p className="i1"><b className="purple">]</b></p>
						<p><b className="yellow">&#125;</b></p>
					</section>
				</article>
			</div>
		</Styles>
	);
};

export default Hero;
