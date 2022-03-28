import { describe, test, expect } from 'vitest';
import { getTypeFromLiquid } from '../../utils/getTypeFromLiquid';

describe('When function is invoke', () => {
	test('should get string type from liquid', () => {
		const result = getTypeFromLiquid('{{vars.tailwind}}');
		expect(result).toEqual(
			'https://cloud.modyocdn.com/uploads/a7a4b683-f68a-4385-8d1c-4f3374dd2213/original/logo-tailwind_e8c14e87.png'
		);
	});
});
