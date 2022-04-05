import styled from 'styled-components';
import { css } from 'styled-components';
import { device } from '../../helper/breakpoints';

export const Input = styled.div`
	padding: 8px 16px;
	font-size: 1rem;
	border-radius: 16px;
	background-color: white;

	@media ${device.mobile} {
		font-size: 1rem;
	}

	@media ${device.tablet} {
		font-size: 1.25rem;
	}

	@media ${device.laptop} {
		font-size: 1.5rem;
	}

	${(props) =>
		props.margin &&
		css`
			margin-bottom: 32px;
		`}
	text-align: center;

	& > input {
		all: unset;
		width: ${(props) => props.width / 2 || 84}px;
		transition: width 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
		@media ${device.mobile} {
			width: ${(props) => props.width / 1.75 || 84}px;
		}

		@media ${device.tablet} {
			width: ${(props) => props.width / 1.5 || 84}px;
		}

		@media ${device.laptop} {
			width: ${(props) => props.width || 84}px;
		}
	}

	& > span:first-child {
		user-select: none;
		color: ${(props) => props.theme.colors.secondary};
		margin-right: 2px;
	}
`;
