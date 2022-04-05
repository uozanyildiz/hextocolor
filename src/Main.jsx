import React, { useState } from 'react';
import { Container, Title } from './Main.styled';
import Gradient from './components/Gradient/Gradient';
import HTC from './components/HTC/HTC';

const App = () => {
	const [firstColor, setFirstColor] = useState('');

	const onChangeHexCode = (hexCode) =>
		setFirstColor(hexCode.length === 6 || hexCode.length === 3 ? hexCode : '');

	return (
		<Container>
			<Title>Hex To Color & Gradient Generator</Title>
			<HTC input={firstColor} onChangeHexCode={onChangeHexCode} />
			<Gradient hexCode={firstColor} />
		</Container>
	);
};

export default App;
