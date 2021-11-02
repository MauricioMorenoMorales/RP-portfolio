import styled from 'styled-components';
import { colorSystem } from '../../global/designSystem';

const Styles = styled.header`
	.header {
		background-color: ${colorSystem.darkestBackground};
		padding: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&__links {
			display: none;
			& > * {
				margin-left: 16px;
			}
		}
	}
	@media screen and (min-width: 600px) {
		.header {
			&__burger {
				display: none;
			}
			&__links {
				display: flex;
			}
		}
	}
`;

export default Styles;
