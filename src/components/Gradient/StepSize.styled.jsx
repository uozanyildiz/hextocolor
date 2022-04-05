import styled from 'styled-components';

export const StepInput = styled.input`
	appearance: none;
	outline: none;
	cursor: pointer;
	background-color: ${(props) => props.theme.colors.background};

	&::-webkit-slider-runnable-track {
		background-color: ${(props) => props.theme.colors.secondary};
		border-radius: 32px;
		appearance: none;
		height: 5px;
	}
	&::-webkit-slider-thumb {
		appearance: none;
		background-color: ${(props) => props.theme.colors.primary};
		width: 6px;
		height: 20px;
		margin: -7px 0 0 0;
	}
`;
