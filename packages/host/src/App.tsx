import Counter from 'counter/Counter';
import Quote from 'quote/Quote';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => (
	<div className='mt-10 text-3xl mx-auto max-w-6xl'>
		<div>Name: host</div>
		<div>Framework: react</div>
		<div>Language: TypeScript</div>
		<div>CSS: Tailwind</div>
		<Counter />

		<Quote />
	</div>
);
ReactDOM.render(<App />, document.getElementById('app'));
