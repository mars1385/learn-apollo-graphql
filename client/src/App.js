import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { Router } from '@reach/router';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className='container'>
				<h1 style={{ textAlign: 'center' }}>SpaceX</h1>
				<Router>
					<Launches path='/' />
					<Launch path='/launch/:flight_number' />
				</Router>
			</div>
		</ApolloProvider>
	);
}

export default App;
