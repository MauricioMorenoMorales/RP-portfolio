import styled from 'styled-components';
import { borderSystem } from '../../global/designSystem';

const Styles = styled.div`
	.hero {
		&__image {
			position: relative;
			height: 800px;
			margin: 0 auto;
			width: 320px;
			&__first-panel {
				position: absolute;
				padding: 16px;
				max-width: 300px;
				border-radius: ${borderSystem.normal};
				background: linear-gradient(
					180deg,
					#0c1821 0%,
					rgba(12, 24, 33, 0.39) 90.1%
				);
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				& > p {
					font-size: 1.4rem;
				}
			}
			&__second-panel {
				position: absolute;
				top: 280px;
				left: 80px;
				padding: 16px;
				max-width: 236px;
				border-radius: ${borderSystem.normal};
				background: linear-gradient(
					180deg,
					rgba(12, 24, 33, 0.56) 0%,
					rgba(12, 24, 33, 0.39) 100%
				);
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				& > p {
					font-size: 1.4rem;
				}
			}
		}
	}
`;

export default Styles;
