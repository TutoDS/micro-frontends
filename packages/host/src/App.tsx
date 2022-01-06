import Counter from 'counter/Counter';
import Header from 'header/default';
import Quote from 'quote/Quote';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => (
	<>
		<Header />

		<div className='flex gap-8 justify-center items-center mt-4 bg-light-500 w-[50%] mx-auto'>
			<Counter />

			<Quote className={''} />
		</div>
	</>
);
ReactDOM.render(<App />, document.getElementById('app'));
