import React, { useState } from 'react';
import './index.scss';

type Props = {
	className?: string;
};

const Counter = ({ className, ...props }: Props) => {
	const [count, setCount] = useState(0);

	return (
		<div className={`text-center flex flex-col gap-2 ${className || ''}`}>
			<h3
				className={
					'rounded-lg text-center text-purple-500 text-[40px] border-2 border-gray-300 p-2'
				}
			>
				{count}
			</h3>

			<button
				className={
					',text-[16px] py-1 px-4 rounded-lg bg-purple-500 text-white shadow-md shadow-dark-500 hover:bg-purple-700'
				}
				onClick={() => setCount((prevState) => prevState + 1)}
			>
				Increment
			</button>
		</div>
	);
};

export default Counter;
