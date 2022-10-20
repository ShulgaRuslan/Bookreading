import styled from 'styled-components';

const FormCounterNumber = styled.div`
	display: flex;
	width: 100px;
	height: 100px;
	background: #f5f7fa;
	text-align: center;
	align-items: center;
	justify-content: center;
	box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);

	@media screen and (min-width: 768px) {
		width: 100px;
		height: 60px;
	}
	@media screen and (min-width: 1280px) {
		width: 100px;
		height: 100px;
	}
`;

export default FormCounterNumber;
