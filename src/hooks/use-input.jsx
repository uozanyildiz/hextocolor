import { useEffect, useState } from 'react';

export const useInput = (changeValue = () => {}, isItHex = true) => {
	const [input, setInput] = useState('');
	const hexReg = /^#?[0-9a-f]*$/i;
	const onChange = (e) => {
		const value =
			e.target.value.includes('#') && isItHex
				? e.target.value.replace('#', '')
				: e.target.value;
		if (!hexReg.test(value) && isItHex) return;
		if (value.length > 6) return;
		setInput(value);
		changeValue(value);
	};

	return {
		input,
		onChange,
	};
};
