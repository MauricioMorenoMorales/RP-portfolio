import styled from 'styled-components';
import {
	borderSystem,
	colorSystem,
	shadowSystem,
} from '../../global/designSystem';

const Styles = styled.header`
	.header {
		background-color: ${colorSystem.darkestBackground};
		position: relative;
		padding: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: ${shadowSystem.normal};
		&__logo {
			cursor: default;
			user-select: none;
		}
		&__links {
			display: none;
			& > * {
				margin-left: 16px;
			}
		}
		&--menu {
			position: absolute;
			top: 130px;
			background-color: ${colorSystem.darkestBackground};
			left: 0;
			right: 0;
			margin-left: auto;
			margin-right: auto;
			max-width: 250px;
			border-radius: ${borderSystem.normal};
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 30px;
			box-shadow: ${shadowSystem.normal};
			z-index: 11;
			&--modal {
				z-index: 10;
				position: absolute;
				height: 5000px;
				left: 0;
				width: 100vw;
				background-color: #00000099;
			}
			& > * {
				margin: 10px auto;
			}
			&__icons {
				display: flex;
				& > * {
					margin: 0 4px;
				}
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
			&--menu {
				display: none;
			}
			&--modal {
				display: none;
			}
		}
	}
`;

export default Styles;
