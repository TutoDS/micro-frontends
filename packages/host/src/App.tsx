import Counter from 'counter/Counter';
import Quote from 'quote/Quote';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => (
	<>
		<div className='flex gap-4 justify-center items-cente my-4 w-[50%] mx-auto'>
			<Counter />

			<Quote className={''} />
		</div>
	</>
);
ReactDOM.render(<App />, document.getElementById('app'));
