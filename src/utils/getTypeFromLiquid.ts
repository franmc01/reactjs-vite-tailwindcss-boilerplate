import { isProduction } from '../constants';
import LiquidParse from '../liquid/LiquidParse';
export const getTypeFromLiquid = (type: string) => {
	return isProduction ? LiquidParse.parse(type) : null;
};
