import styled from 'styled-components';

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
		margin-bottom: 100px;
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
