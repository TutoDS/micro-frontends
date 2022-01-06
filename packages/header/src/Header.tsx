import React from 'react';
import './index.scss';

const Header = () => (
	<header className='shadow bg-gray-800'>
		<div className='container flex items-center justify-between p-6 mx-auto capitalize text-gray-300'>
			<img
				src='https://github.com/TutoDS/snippets-and-codes/raw/master/images/daniel-sousa.png'
				className={'w-[35px]'}
				alt='Daniel Sousa @TutoDS'
			/>

			<nav>
				<a
					href='https://github.com/TutoDS'
					className='border-b-2 border-transparent transition-colors duration-200 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
				>
					GitHub
				</a>

				<a
					href='https://gitlab.com/jdaniel.asousa'
					className='border-b-2 border-transparent transition-colors duration-200 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
				>
					GitLab
				</a>

				<a
					href='https://www.linkedin.com/in/daniel-sousa-tutods/'
					className='border-b-2 border-transparent transition-colors duration-200 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
				>
					LinkedIn
				</a>
			</nav>
		</div>
	</header>
);

export default Header;
