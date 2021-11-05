import styled from 'styled-components';

const Styles = styled.div`
	text-align: center;
	max-width: 300px;
	margin: 0 auto;
	& > p {
		max-width: 1200px;
		margin: 0 auto;
		margin-bottom: 50px;
	}
	.stats {
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
		margin-bottom: 100px;
	}
	@media screen and (min-width: 768px) {
		max-width: 750px;
	}
	@media screen and (min-width: 1300px) {
		max-width: 1250px;
	}
`;

export default Styles;
