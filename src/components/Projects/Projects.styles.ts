import styled from 'styled-components';
import { colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	& > p {
		text-align: center;
		max-width: 300px;
		margin: 0 auto;
		margin-bottom: 40px;
	}
	.projects {
		display: grid;
		margin: 0 auto;
		gap: 6px;
		margin-bottom: 50px;
		&.mobile {
			max-width: 250px;
			grid-template-columns: 250px;
		}
		&.tablet {
			max-width: 750px;
			grid-template-columns: repeat(3, 250px);
		}
		&.desktop {
			max-width: 1250px;
			grid-template-columns: repeat(5, 250px);
		}
	}
	.navigation-buttons {
		display: flex;
		justify-content: center;
		margin-bottom: 100px;
		&__item {
			background-color: transparent;
			padding: 7px;
			border: 1px solid ${colorSystem.blue};
			cursor: pointer;
			&:hover {
				transform: scale(1.02);
			}
			&.back {
				border-radius: 5px 0px 0px 5px;
				margin-right: -1px;
			}
			&.next {
				border-radius: 0 5px 5px 0;
			}
		}
	}
	@media screen and (min-width: 768px) {
		& > p {
			max-width: 500px;
		}
	}
`;

export default Styles;
