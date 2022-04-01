const initialState = {
	search: true,
	width: '70vw',
	autowidth: true,
	pagination: true,
	cols: [],
	activeColumns: [],
	rows: [],
	products: [],
	detail: {},
	product_definitions: {},
	hasTransactions: false,
	productId: '',
	productType: '',
	isLoading: {
		products: true,
		transactions: true,
	},
	isLogged: {
		status: false,
		error: '',
	},
};
