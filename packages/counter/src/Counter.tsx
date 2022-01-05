import React, { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className={'flex items-center justify-center flex-col'}>
			<div className={'text-8xl mb-4 text-indigo-500 text-center'}>{count}</div>

			<button
				className={
					'text-sm text-center border-2 px-4 py-1 rounded-lg border-indigo-500 text-indigo-500 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white'
				}
				onClick={() => setCount((prevState) => prevState + 1)}
			>
				Increment
			</button>
		</div>
	);
};

export default Counter;
