import ntc from 'ntcjs';
import React, { useEffect, useState } from 'react';
import HexInput from '../shared/HexInput';
import { ResultText } from './HTC.styled';

const HTC = ({ input, onChangeHexCode }) => {
	const [colorName, setColorName] = useState('...');
	useEffect(() => {
		ntc.name(input)[1].includes('Invalid Color')
			? setColorName('...')
			: setColorName(ntc.name(input)[1]);
	}, [input]);
	return (
		<>
			<HexInput onChangeHexCode={onChangeHexCode} margin={true} />
			<ResultText hexCode={input}>
				Name of this color is <span>{colorName}</span>
			</ResultText>
		</>
	);
};

export default HTC;
