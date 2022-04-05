import React, { useState } from 'react';
import { StepInput } from './StepSize.styled';

const StepSize = ({ onChange: onStepSize }) => {
	const [inputValue, setInputValue] = useState('3');
	const onChange = (e) => {
		setInputValue(e.target.value);
		onStepSize(e.target.value);
	};
	return (
		<div>
			<StepInput
				type='range'
				min='2'
				max='8'
				onChange={onChange}
				value={inputValue}
			/>
		</div>
	);
};

export default StepSize;
