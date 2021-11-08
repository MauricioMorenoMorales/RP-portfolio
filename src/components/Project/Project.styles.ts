import styled from 'styled-components';
import { borderSystem, colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	.project {
		position: relative;
		background-color: ${colorSystem.background};
		border-radius: ${borderSystem.normal};
		padding-bottom: 20px;
		overflow: hidden;
		height: 430px;
		display: flex;
		flex-direction: column;
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
			margin-right: 10px;
			margin-bottom: 20px;
			& > h3 {
				margin-top: 10px;
				color: ${colorSystem.blue};
			}
		}
		&__buttons {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 10px;
			position: absolute;
			bottom: 3px;
			&__ghost {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 140px;
				margin-left: 10px;
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
