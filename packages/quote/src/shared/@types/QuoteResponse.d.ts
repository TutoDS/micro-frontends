export type QuoteResponseType = {
	success: { total: number };

	contents: {
		quotes: {
			quote: string;
			author: string;
		}[];
	};
};

export type QuoteType = {
	text: string;
	author: string;
};
