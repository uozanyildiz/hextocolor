import styled from 'styled-components';
import { device } from './helper/breakpoints';

export const Container = styled.div`
	display: flex;
	margin-top: 64px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.div`
	margin-bottom: 32px;
	text-align: center;
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobile} {
		font-size: 2rem;
	}

	@media ${device.tablet} {
		font-size: 2.5rem;
	}

	@media ${device.laptop} {
		font-size: 3rem;
	}
`;
