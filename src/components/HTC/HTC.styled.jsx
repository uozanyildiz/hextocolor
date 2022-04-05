import styled from 'styled-components';
import { css } from 'styled-components';
import { device } from '../../helper/breakpoints';

export const ResultText = styled.div`
	margin-bottom: 24px;
	font-size: 1rem;
	vertical-align: baseline;
	@media ${device.mobile} {
		font-size: 1.25rem;
	}

	@media ${device.tablet} {
		font-size: 1.5rem;
	}

	@media ${device.laptop} {
		font-size: 2rem;
	}
	& span {
		&::after {
			${(props) =>
				props.hexCode
					? css`
							content: '';
					  `
					: ''}
			width: 12px;
			height: 12px;
			border-radius: 50%;
			display: inline-block;
			background-color: #${(props) => props.hexCode};
			border: 1px solid black;
			vertical-align: top;
		}
	}
`;
