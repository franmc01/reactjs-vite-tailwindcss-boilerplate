import { isProduction } from '../constants';
import LiquidParse from '../liquid/LiquidParse';

export const getImageFromLiquid = () => {
	return isProduction ? LiquidParse.parse('{{assets.image.value}}') : null;
};
