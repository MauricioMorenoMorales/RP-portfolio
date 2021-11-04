import styled from 'styled-components';

const Styles = styled.div`
	.projects {
		display: grid;
		margin: 0 auto;
		gap: 10px;
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
`;

export default Styles;