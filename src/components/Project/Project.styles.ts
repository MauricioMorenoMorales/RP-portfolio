import styled from 'styled-components';
import { borderSystem, colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	.project {
		background-color: ${colorSystem.background};
		border-radius: ${borderSystem.normal};
		&__image {
			margin-bottom: 10px;
		}
		&__technologies {
			margin-left: 10px;
			& > * {
				margin-right: 7px;
			}
		}
	}
`;

export default Styles;
