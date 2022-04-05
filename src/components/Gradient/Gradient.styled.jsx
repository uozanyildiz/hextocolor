import styled from 'styled-components';
import { device } from '../../helper/breakpoints';

export const GradientContainer = styled.div`
	text-align: center;
	margin-top: 16px;

	& > span {
		font-size: 1rem;
		display: inline-block;
		margin-bottom: 8px;

		@media ${device.mobile} {
			font-size: 1.25rem;
		}

		@media ${device.tablet} {
			font-size: 1.5rem;
		}

		@media ${device.laptop} {
			font-size: 2rem;
		}
	}
`;

export const OptionsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 32px;
	align-items: center;
	justify-content: center;
	margin-bottom: 32px;

	& > div > span {
		padding-bottom: 32px;
	}
`;

export const Color = styled.div`
	width: 32px;
	height: 32px;

	margin-bottom: 16px;
	background-color: ${(props) => props.hexCode};

	@media ${device.mobile} {
		width: 48px;
		height: 48px;
	}

	@media ${device.tablet} {
		width: 64px;
		height: 64px;
	}

	@media ${device.laptop} {
		width: 96px;
		height: 96px;
	}

	@media ${device.desktop} {
		width: 128px;
		height: 128px;
	}
`;

export const ColorBox = styled.div`
	cursor: pointer;

	& > span {
		@media ${device.mobile} {
			font-size: 0.55rem;
		}

		@media ${device.tablet} {
			font-size: 0.65rem;
		}

		@media ${device.laptop} {
			font-size: 0.75rem;
		}

		@media ${device.desktop} {
			font-size: 0.85rem;
		}
	}
`;

export const ColorBoxContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
