import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.scss';

type QuoteResponse = {
	success: { total: number };

	contents: {
		quotes: {
			quote: string;
			author: string;
		}[];
	};
};

const quoteApiUrl = 'https://quotes.rest';

const Quote = () => {
	const [quote, setQuote] = useState<string>();
	const [author, setAuthor] = useState<string>();

	useEffect(() => {
		axios
			.get<QuoteResponse>(`${quoteApiUrl}/qod`, {
				params: {
					language: 'en'
				}
			})
			.then(({ data }) => {
				console.log(data);
				setAuthor(data.contents.quotes[0].author);
				setQuote(data.contents.quotes[0].quote);
			});
	}, []);

	return (
		<div className={'flex flex-col gap-2 w-1/2 mx-auto border-l-4 border-purple-400 px-4'}>
			<div className='text-purple-400 font-serif text-4xl'>"</div>

			<p className={'italic text-[24px]'}>{quote}</p>

			<div className='text-sm font-bold'>{author}</div>
		</div>
	);
};

// ReactDOM.render(<Quote />, document.getElementById('app'));

export default Quote;
