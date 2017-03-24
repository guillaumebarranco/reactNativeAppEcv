import filter from './filter';

it('should return currentFilter as none at beginning', () => {
	expect(filter().currentFilter).toBe('none');
});

it('should return currentFilter as goron after update', () => {

	const newFilter = {
		currentFilter: 'goron'
	};

	const result = filter(newFilter, 'UPDATE_FILTER');

	expect(result.currentFilter).toBe('goron');
});

