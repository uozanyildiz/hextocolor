import React, { StrictMode } from 'react';
import ReactDOMClient from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Main from './Main';

const theme = {
	colors: {
		background: '#F7E2E2',
		primary: '#61A4BC',
		secondary: '#5B7DB1',
	},
	breakpoints: {
		mobile: '480px',
		tablet: '768px',
		laptop: '1024px',
		desktop: '1200px',
	},
};

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Nunito', sans-serif;
		background-color: ${(props) => props.theme.colors.background};
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

const container = document.getElementById('root');
const rootClient = ReactDOMClient.createRoot(container);
rootClient.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Main />
		</ThemeProvider>
	</StrictMode>
);
