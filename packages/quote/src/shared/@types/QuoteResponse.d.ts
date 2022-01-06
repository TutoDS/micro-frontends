export type QuoteResponseType = {
	id?: string;
	tags?: string[];
	content: string;
	author: string;
	authorSlug?: string;
	length?: number;
	dateAdded?: Date;
	dateModified?: Date;
};
