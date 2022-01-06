import axios from 'axios';

const quoteApi = axios.create({
	baseURL: 'https://quotes.rest'
});

export default quoteApi;
