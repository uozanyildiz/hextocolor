const hexToRgb = (hex) => {
	let fixedHex = '';
	hex.length === 3
		? (fixedHex = `#${hex[0].repeat(2) + hex[1].repeat(2) + hex[2].repeat(2)}`)
		: (fixedHex = `#${hex}`);
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fixedHex);
	return result
		? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
				result[3],
				16
		  )})`
		: null;
};

export const rgbLogBlend = (p, c0, c1) => {
	let c0_fixed = hexToRgb(c0);
	let c1_fixed = hexToRgb(c1);
	var i = parseInt,
		r = Math.round,
		P = 1 - p,
		[a, b, c, d] = c0_fixed.split(','),
		[e, f, g, h] = c1_fixed.split(','),
		x = d || h,
		j = x
			? ',' +
			  (!d
					? h
					: !h
					? d
					: r((parseFloat(d) * P + parseFloat(h) * p) * 1000) / 1000 + ')')
			: ')';
	return (
		'rgb' +
		(x ? 'a(' : '(') +
		r(
			(P * i(a[3] === 'a' ? a.slice(5) : a.slice(4)) ** 2 +
				p * i(e[3] === 'a' ? e.slice(5) : e.slice(4)) ** 2) **
				0.5
		) +
		',' +
		r((P * i(b) ** 2 + p * i(f) ** 2) ** 0.5) +
		',' +
		r((P * i(c) ** 2 + p * i(g) ** 2) ** 0.5) +
		j
	);
};

export const copyToClipboard = (text) => navigator.clipboard.writeText(text);
