import { liquidVariables, Variables } from './localVariables';
import { Liquid } from 'liquidjs';

let engine: Liquid;

if (import.meta.env.MODE !== 'production') {
	engine = new Liquid({
		strictFilters: true,
		strictVariables: true,
	});
}

class LiquidParserClass {
	library: Variables;

	constructor(library: Variables) {
		this.library = library;
	}

	async parseLiquidAsync(liquidString: string) {
		try {
			const parsed = await engine.parseAndRender(liquidString, this.library);
			return parsed;
		} catch (error) {
			return error;
		}
	}

	parseLiquid(liquidString: string) {
		try {
			const parsed = engine.parseAndRenderSync(liquidString, this.library);
			return parsed;
		} catch (error) {
			return error;
		}
	}

	parse(liquidString: string) {
		if (import.meta.env.MODE !== 'production') {
			return this.parseLiquid(liquidString);
		}
		return liquidString;
	}

	parseAsync(liquidString: string) {
		if (import.meta.env.MODE !== 'production') {
			return this.parseLiquidAsync(liquidString);
		}
		return liquidString;
	}
}
const LiquidParse = new LiquidParserClass(liquidVariables);

export default LiquidParse;
