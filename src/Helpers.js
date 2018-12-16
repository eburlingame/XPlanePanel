export function constrain(low, value, high) {
	if (low < high) {
		if (value <= low) {
			return low;
		}
		if (value >= high) {
			return high;
		}
		return value;
	} else {
		return constrain(high, value, low);
	}
};

export function linmap(
	domainLow,
	domainHi,
	value,
	rangeLow,
	rangeHi) {
	return rangeLow + 
		(rangeHi- rangeLow) * 
		((value - domainLow) / (domainHi - domainLow));
};

export function linmapConstrain(
	domainLow,
	domainHi,
	value,
	rangeLow,
	rangeHi) {
	return constrain(rangeLow, 
					 linmap(domainLow, domainHi, value, rangeLow, rangeHi), 
					 rangeHi);
};

export function rotate(value, units) {
	return {transform: "rotate(" + value + "" + units + ")"};
};

export function rotate_around(value, units, x, y) {
	return {
		...rotate(value, units),
		transformOrigin: x + "% " + y + "%"
	};
};