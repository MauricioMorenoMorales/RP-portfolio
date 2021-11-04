import styled from 'styled-components';
import { borderSystem, colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	.project {
		background-color: ${colorSystem.background};
		border-radius: ${borderSystem.normal};
		padding-bottom: 20px;
		&__image {
			margin-bottom: 10px;
		}
		&__technologies {
			margin-left: 10px;
			& > * {
				margin-right: 7px;
			}
		}
		&__text {
			margin-left: 10px;
			margin-bottom: 20px;
			& > h3 {
				margin-top: 10px;
			}
		}
		&__buttons {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 10px;
			&__ghost {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 60%;
				height: 35px;
				padding: 3px 15px;
				border: 1px solid ${colorSystem.blue};
				border-radius: ${borderSystem.normal};
				color: ${colorSystem.blue};
				cursor: pointer;
			}
		}
	}
`;

export default Styles;
