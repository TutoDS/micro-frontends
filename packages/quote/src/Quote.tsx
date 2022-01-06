import React, { useEffect, useState } from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import './index.scss';
import { QuoteResponseType, QuoteType } from './shared/@types/QuoteResponse';
import quoteApi from './shared/services/quoteApi';

const Loading = () => (
	<div
		className={
			'bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'
		}
	>
		<svg
			className={'animate-spin -ml-1 mr-3 h-[75px] w-[75px] text-white'}
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
		>
			<circle
				className={'opacity-25'}
				cx='12'
				cy='12'
				r='10'
				stroke='currentColor'
				strokeWidth='4'
			></circle>
			<path
				className={'opacity-75'}
				fill='currentColor'
				d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
			></path>
		</svg>
	</div>
);

type Props = {
	className?: string;
};

const Quote = ({ className, ...props }: Props) => {
	const [quote, setQuote] = useState<QuoteType>({
		text: '',
		author: ''
	});

	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsLoading(true);

		quoteApi
			.get<QuoteResponseType>(`/qod`, {
				params: {
					language: 'en'
				}
			})
			.then(({ data }) => {
				setQuote({
					text: data.contents.quotes[0].quote,
					author: data.contents.quotes[0].author
				});
			});

		setIsLoading(false);

		// Clear values on states
		return () => {
			setIsLoading(false);
			setQuote({
				text: '',
				author: ''
			});
		};
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div
			{...props}
			className={`flex flex-col gap-2 border-l-4 border-purple-400 px-4 ${className || ''}`}
		>
			<ImQuotesLeft className={'text-purple-400 text-4xl'} />

			<p className={'font-serif text-[24px]'}>{quote.text}</p>

			<div className='text-300 text-[16px]'>{quote.author}</div>
		</div>
	);
};

// ReactDOM.render(<Quote />, document.getElementById('app'));

export default Quote;
