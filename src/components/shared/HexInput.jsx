import React from 'react';
import { useInput } from '../../hooks/use-input';
import { Input } from './HexInput.styled';

const HexInput = ({ onChangeHexCode, margin }) => {
	const { input, onChange } = useInput(onChangeHexCode);
	return (
		<Input margin={margin} width={input && (input.length + 1) * 16}>
			<span>#</span>
			<input value={input} onChange={onChange} />
		</Input>
	);
};

export default HexInput;
