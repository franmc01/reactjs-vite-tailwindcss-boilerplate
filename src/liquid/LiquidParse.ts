import * as Liquid from 'liquidjs';
import { liquidVariables } from './localVariables';
let engine: any;

const LiquidNs = process.env.NODE_ENV !== 'production' ? Liquid : null;
// const LiquidNs =
// 	process.env.NODE_ENV !== 'production' ? require('liquidjs') : null;
if (LiquidNs) {
	engine = new LiquidNs.Liquid({
		strictFilters: true,
		strictVariables: true,
	});
}

class LiquidParserClass {
	/** context of liquid drops in local */
	library = {};

	/**
	 * Create a Client.
	 * @param library object containing all local liquid context
	 * @returns function with all Liquid instance
	 */
	constructor(library: any) {
		this.library = library;
	}

	/**
	 * Parse a liquid string
	 * @param liquidString Target Content Space UID
	 * @returns a usable object or string
	 */
	async parseLiquidAsync(liquidString: string) {
		try {
			const parsed = await engine.parseAndRender(liquidString, this.library);
			return parsed;
		} catch (error) {
			return error;
		}
	}

	/**
	 * Parse a liquid string
	 * @param liquidString Target Content Space UID
	 * @returns a usable object or string
	 */
	parseLiquid(liquidString: string) {
		try {
			const parsed = engine.parseAndRenderSync(liquidString, this.library);
			return parsed;
		} catch (error) {
			return error;
		}
	}

	parse(liquidString: string) {
		if (process.env.NODE_ENV !== 'production') {
			return this.parseLiquid(liquidString);
		}
		return liquidString;
	}

	parseAsync(liquidString: string) {
		if (process.env.NODE_ENV !== 'production') {
			return this.parseLiquidAsync(liquidString);
		}
		return liquidString;
	}
}
const liquidParser = new LiquidParserClass(liquidVariables);

export default liquidParser;
