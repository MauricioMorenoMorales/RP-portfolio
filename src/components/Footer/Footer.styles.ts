import styled from 'styled-components';
import { colorSystem } from '../../global/designSystem';

const Styles = styled.footer`
	background-color: ${colorSystem.darkestBackground};
	border-bottom: 40px solid ${colorSystem.blue};
	.footer {
		max-width: 300px;
		border-top: 1px solid ${colorSystem.background};
		text-align: center;
		margin: 0 auto;
		padding: 30px 0;
		&__text-links {
			text-align: center;
			& > a {
				text-align: center;
				margin: 16px;
				justify-content: center;
			}
		}
		&__icon-links {
			& > span {
				margin: 0 10px;
			}
		}
	}
	@media screen and (min-width: 768px) {
		.footer {
			max-width: 750px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			&__text-links {
				display: flex;
			}
		}
	}
	@media screen and (min-width: 1250px) {
		.footer {
			max-width: 1250px;
		}
	}
`;

export default Styles;
