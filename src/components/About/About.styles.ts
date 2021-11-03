import styled from 'styled-components';
import { colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	background-color: ${colorSystem.darkestBackground};
	padding: 50px 0;
	.about {
		text-align: center;
		max-width: 300px;
		margin: 0 auto;
		&__resources {
			margin-bottom: 50px;
			&__image {
				border: 3px solid ${colorSystem.blue};
				border-radius: 50%;
				padding: 10px;
			}
			&__links {
				margin-top: 20px;
				& > span {
					margin: 0 8px;
				}
			}
		}
		&__text {
			& > p {
				margin-bottom: 20px;
			}
		}
	}
	@media screen and (min-width: 768px) {
		.about {
			max-width: 750px;
			display: grid;
			grid-template-columns: 300px 1fr;
			text-align: start;
			&__resources {
				text-align: center;
			}
		}
	}
	@media screen and (min-width: 1250px) {
		.about {
			max-width: 1250px;
			&__text {
				margin-top: 40px;
			}
		}
	}
`;

export default Styles;
