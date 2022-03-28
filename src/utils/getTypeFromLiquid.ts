import LiquidParse from '../liquid/LiquidParse';
export const getTypeFromLiquid = (type: string): string | null => {
	return LiquidParse.parse(type);
};
